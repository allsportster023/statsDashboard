import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import MapLegend from './MapLegend';
import axios from 'axios';

export class Map extends  React.Component{

  constructor(props) {
    super(props);

    this.convertArrayToSolrSyntax = this.convertArrayToSolrSyntax.bind(this);
    this.createSolrQueryString = this.createSolrQueryString.bind(this);

    this.state = {
      data: []
    }
  }

  componentDidUpdate(nextProps, nextState) {
    if(this.props != nextProps) {
      if (this.props.sources.length != 0 &&
        this.props.timeframe.length != 0 &&
        this.props.categories.length != 0 &&
        this.props.codes.length != 0 &&
        this.props.colorMap) {

        let map = this.map;
        this.map.eachLayer(function (layer) {
          if(layer instanceof L.FeatureGroup) {
            map.removeLayer(layer);
          }
        });

        this.addPoints();
        this.forceUpdate();

      }
    }
  }

  componentDidMount(){
    this.loadMap();
  }

  componentWillUnmount(){
    this.map.eachLayer(function (layer) {
      map.removeLayer(layer);
    });
  }

  loadMap() {
    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef);

    this.map = L.map(node, {
        center: [0,0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 20,
        zoomControl: true,
        layers: [
          L.tileLayer(
            'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png')
        ],
        attributionControl: false
      });

  }

  addPoints() {

    let featureGroup = L.featureGroup();

    featureGroup.addTo(this.map);

    let colorMap = this.props.colorMap;

    let customCircleMarker = L.CircleMarker.extend({
      options: {
        radius: 1.5,
        opacity: 0.7,
        fillOpacity: 0.7,
        metadata: null
      }
    });

    // axios.get("http://localhost:8983/solr/appData/select?wt=json&indent=true&q=*:*&rows=50")
    axios.get(this.createSolrQueryString())
      .then(function (d) {
        console.log("Loaded Map Data");

        d.data.response.docs.forEach(function(obj){
          // let ptMarker = L.circleMarker(L.latLng(obj.Location[0].split(/.*\((.*),\s(.*)\)/)[2], obj.Location[0].split(/.*\((.*),\s(.*)\)/)[1]), {color: colorMap[obj.Source[0]]});

          let objMarker = new customCircleMarker(L.latLng(obj.Location[0].split(/.*\((.*),\s(.*)\)/)[2], obj.Location[0].split(/.*\((.*),\s(.*)\)/)[1]),
            { metadata: obj,
              color: colorMap[obj.Source[0]]
            }
          );

          let tooltipText = "<b>Source:</b> " + obj.Source[0] + "<br/>" +
                            "<b>Date:</b> " + obj.Date[0] + "<br/>" +
                            "<b>Category:</b> " + obj.Category[0] + "<br/>" +
                            "<b>Code:</b> " + obj.Code[0] + "<br/>";

          objMarker.bindTooltip(tooltipText).openTooltip();

          featureGroup.addLayer(objMarker);

        });
      });
  }

  createSolrQueryString(){
    let solrQueryStr = "http://localhost:8983/solr/appData/select?wt=json&indent=true&rows=50&q=";

    solrQueryStr += "Source:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.sources);
    solrQueryStr += " AND Category:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.categories);
    solrQueryStr += " AND Code:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.codes);
    solrQueryStr += " AND Date:["+new Date(this.props.timeframe[0]).toISOString()+" TO "+new Date(this.props.timeframe[1]).toISOString()+"]";

    console.log(solrQueryStr);

    return solrQueryStr;

  }

  convertArrayToSolrSyntax(arr) {

    let solrStr = "(";
    arr.forEach(function (d, i) {
      solrStr += d;

      if (i < arr.length - 1) {
        solrStr += " OR "
      }
    });

    solrStr += ")";

    return solrStr;

  }


  render(){
    return (
      <div>
        <div ref="map" style={this.props.size}>Loading Map...</div>
        <MapLegend sources={this.props.sources} colorMap={this.props.colorMap}/>
      </div>
  )
  }
}

export default Map
