import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

class PBar extends React.Component {
    constructor(props){
        super(props);
        this.setState({
            critical: false
        });
    }

    isCritical(props){
        let diff = props.max - props.min;
        let sMin = props.min + diff * 1.15;
        let sMax = props.max - diff * 1.15;
        this.setState({
            critical : (props.actual > sMin && props.actual < sMax) ? 
                true : false});

    }

    render() { 
        return (
            <ProgressBar />
        );
    }
}
 
 
export default PBar;