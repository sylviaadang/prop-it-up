import react from 'react';
import React, {useState} from 'react';

const PersonCard = (props) => {



    const [click, setClick] = useState(parseInt(props.age))

    const buttonClick = () => {
        setClick(click+1)
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <h4>Age: {click}</h4>
            <h4>Hair Color: {props.haircolor}</h4>
            <button onClick={ buttonClick }>Birthday Button for {props.name}</button>
        </div>

    )
}

export default PersonCard
