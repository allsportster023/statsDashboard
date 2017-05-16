import React from 'react';
import {Brush, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const unique = function(arr)
{
  var n = {},r=[];
  for(var i = 0; i < arr.length; i++)
  {
    if (!n[arr[i]])
    {
      n[arr[i]] = true;
      r.push(arr[i]);
    }
  }
  return r;
};

const CustomizedAxisTick = React.createClass({
  render () {
    const {x, y, stroke, payload} = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(-45)">{payload.value}</text>
      </g>
    );
  }
});



class StackedChart extends React.Component {

  render () {

    const _this = this;

    let fields = [];
    this.props.data.forEach(function (d) {
      for(let elem in d){
        if(elem != _this.props.xField){
          fields.push(elem);
        }
      }
    });

    return (
      <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
                margin={{top: 20, right: 0, left: 0, bottom: 40}}>
        <XAxis dataKey={this.props.xField} tick={<CustomizedAxisTick/>} minTickGap={0} axisLine={{stroke: 'white', strokeWidth: '3'}} label="HI"/>
        <YAxis tick={{stroke: 'white'}} axisLine={{stroke: 'white'}} />
        <Tooltip/>
        {/*<Legend />*/}
         {unique(fields).map((field, idx) =>

            <Bar key={field.toString()} dataKey={field} stackId="a" fill={this.props.colorMap[field] ? this.props.colorMap[field] : 'black'}/>

         )}
        {/*<Brush dataKey={this.props.xField} height={30} stroke="#8884d8"/>*/}
      </BarChart>
    );
  }
}

export default StackedChart
