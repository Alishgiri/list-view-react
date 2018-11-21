import React from 'react';

import './List-item.css';

const list = props => (
    <div className="list">
        <div className="box">
            <h3>{props.firstName} {props.lastName}</h3>
            <p>{props.gender}</p>
            <p>{props.email}</p>
        </div>
    </div>
);

export default list;
