import React, {Component} from 'react';
import axios from 'axios';
import Chart from './chart';

const user1 = 'https://api.github.com/repos/haydenevans/Docusaurus/commits';
const user2 = 'https://api.github.com/repos/JorgeBucaran/hyperapp/commits';
const user3 = 'https://api.github.com/repos/remhume/Hotot/commits';

export class Charts extends Component {
    constructor() {
        super();
        this.state = {charts: []};
    }

    componentDidMount() {
        axios
            .get(user3)
            .then(response => {
                this.setState({charts: response.data});
            });
    }

    render() {
        console.log(this.state.charts);
        return (
            <div>
                {this.state.charts.map((chart, i) => (
                  <Chart key={i} chart={chart} location={this.props.location}/>
                ))}
            </div>
        );
    }
}
