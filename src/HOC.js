import React, {Component} from 'react';

export default function Hoc(HocComponent, data) {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        render() {
            return (
                <div>
                    <HocComponent data={this.state.data}{...this.props}/>
                </div>
            )
        }
    }
}