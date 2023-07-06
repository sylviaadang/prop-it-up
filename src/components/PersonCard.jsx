import react from 'react';

const PersonCard = (props) => {


    return (
        <div>
            <h2>{props.name}</h2>
            <h4>Age: {props.age}</h4>
            <h4>Hair Color: {props.haircolor}</h4>
        </div>

    )
}

export default PersonCard
