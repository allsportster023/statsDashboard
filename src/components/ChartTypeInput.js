import React from 'react';

class ChartTypeInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            objectives: []
        }
    }

    componentWillReceiveProps(nextProps) {

        if(this.props != nextProps) {
            this.setState({objectives: nextProps.objectives})
        }
    }

    handleClick(selection) {
        this.props.onClick(selection);
    }

    handleSearch(vals){
        console.log("Handling AxisXInput Search");
        console.log(vals);

    }

    render() {

        return (
            <select value={this.state.value} onChange={this.handleClick}>
                <option value="bar">Bar Chart</option>
                <option value="pie">Pie Chart</option>
            </select>
        )}
}

export default ChartTypeInput
