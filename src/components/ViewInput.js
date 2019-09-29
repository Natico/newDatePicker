import React from 'react';
import { classNames } from '../util'
import moment from 'moment';

class ViewInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(event) {
        this.setState({value:event.target.value})
        
      }

    static getDerivedStateFromProps(props, state){
    const {year, month, day} = props;
    let date, dateMoment;
    if (year && month && day) {
                dateMoment = moment([year, month, day]);
                date = dateMoment.format("YYYY/MM/DD");
            }
    return { value: date };
    }

    render(){    
        return (
            <React.Fragment>
                <input type="text" defaultValue={this.state.value} onChange={this.handleChange} />
            </React.Fragment>
        );
    }
    
}

export default ViewInput;