import React from 'react';

function Job(props){
    return(
        <div>
          <h1>{props.salary}</h1>
          <h1>{props.position}</h1>
          <h1>{props.company}</h1>
        </div>
    );
}

export default Job;