import React from 'react';

function Tools(props) {
    return(
        <div className="tools">
            <img className="image" src={props.item.imgurl} alt={props.item.imgalt}/>
            <p><b>{props.item.name}</b></p>
        </div>
    )
}



export default Tools;