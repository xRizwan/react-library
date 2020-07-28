import React from 'react';

export default function DisplayBook(props){
    
    return(
        <tr className="row">
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book.pages}</td>
            <td>{props.book.read ? "Yes": "No"}</td>
            <td>
                <span
                    className="rToggle"
                    onClick={props.handleClick}
                    data-key={props.num}>
                    ToggleRead
                </span>
                <span
                    data-key={props.num}
                    className="delete"
                    onClick={props.handleDelete}>
                    Delete
                </span>
            </td>
        </tr>
    )
}