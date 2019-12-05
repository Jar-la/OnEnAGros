import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

class PBar extends React.Component {
    constructor(props){
        super(props);
        this.setState({
            critical: false
        });
        this.isCritical(props);
    }

    isCritical(props){
        let diff = props.max - props.min;
        let sMin = props.min + diff * props.seuil;
        let sMax = props.max - diff * props.seuil;
        this.setState({
            critical : (sMin < props.actual < sMax) ? 
                true : false});

    }

    render() { 
        return (
            <div>
                <ProgressBar 
                animated now={(this.props.actual/this.props.max) * 100} 
                striped variant = {this.state.critical ? "success":"danger"}/>
                {this.state.critical}
            </div>

        );
    }
}
 
 
export default PBar;