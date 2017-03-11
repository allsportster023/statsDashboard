import React from 'react';



class DatePicker extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        value: PropTypes.string
    }



    render() {
        const {value, onClick} = this.props;

        return (
            <div className="form-group">
                <input type="text" className="form-control" value={value} onClick={onClick}/>
                <IconCalendar className="date-picker-icon" onClick={onClick}></IconCalendar>
            </div>
        );
    }
}


