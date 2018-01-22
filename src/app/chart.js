import React, {Component} from 'react';

function Chart({chart}) {
    return (
        <ul>
            <li>{chart.commit.author.name}</li>
            <li>{chart.commit.author.email}</li>
        </ul>
    );
}

export default Chart;