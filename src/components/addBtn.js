import React from 'react';

export default function Add(props){
    return(
        <div
            className="addBtn"
            onClick={props.changeDisplay}>
                Add To Library
        </div>
    )
}