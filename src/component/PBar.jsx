import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

class PBar extends React.Component {

    constructor(props){
        super(props);
        this.setState({
            critical: true
        });
    }

    render() { 
        let diff = this.props.max - this.props.min;
        let sMin = this.props.min + diff * this.props.seuil;
        let sMax = this.props.max - diff * this.props.seuil;
        let critical = (sMin < this.props.actual < sMax) ? false : true;
        console.log(sMax)
        return (
            <div>
                <ProgressBar 
                animated now={(this.props.actual/this.props.max) * 100} 
                striped variant = {critical ? "danger":"success"}/>
                {critical}
            </div>

        );
    }
}
 
 
export default PBar;