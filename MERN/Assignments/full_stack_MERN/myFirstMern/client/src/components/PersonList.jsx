import React from 'react'
import axios from 'axios';
    
const PersonList = (props) => {
    return (
        <div>
            {props.people.map( (person, i) =>
                <p key={i}>{person.lastName}, {person.firstName}</p>
            )}
        </div>
    )
}
    
export default PersonList;

