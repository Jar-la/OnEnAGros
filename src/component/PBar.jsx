import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

class PBar extends React.Component {


    constructor(props){
        super(props);
    }

    render() { 
        
        return (
            <div>
                <ProgressBar 
                animated now={this.props.actual}
                striped variant = {this.props.critical ? "danger":"success"}/>
                {this.props.critical}
            </div>

        );
    }
}
 
 
export default PBar;