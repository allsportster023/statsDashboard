import React from 'react';
import {PieChart, Pie, Cell, Tooltip} from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class MultiLevelPieChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <PieChart width={this.props.width} height={this.props.height}>
        <Tooltip/>
        <Pie data={this.props.data[0]} cx={this.props.width / 2} cy={(this.props.height / 2) + 4} outerRadius={80}
             fill="#8884d8">
          {
            this.props.data[0].map((entry, index) => (
              <Cell key={`${entry.name}`} className={entry.name}
                    fill={this.props.colorMap[entry.name] ? this.props.colorMap[entry.name] : 'black'}/>))
          }
        </Pie>
        <Pie data={this.props.data[1]} cx={this.props.width / 2} cy={(this.props.height / 2) + 4} innerRadius={80}
             outerRadius={135} fill="#82ca9d">
          {
            this.props.data[1].map((entry, index) => (
              <Cell key={`${entry.name}`}
                    fill={this.props.colorMap[entry.name] ? this.props.colorMap[entry.name] : 'black'}/>))
          }
        </Pie>
      </PieChart>
    );
  }
}

export default MultiLevelPieChart
