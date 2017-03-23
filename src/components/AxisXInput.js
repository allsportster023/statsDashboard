import React from 'react';

class AxisXInput extends React.Component {

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
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        )}
}

export default AxisXInput
