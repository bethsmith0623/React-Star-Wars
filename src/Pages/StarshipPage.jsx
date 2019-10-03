import React from 'react';
import {Link} from 'react-router-dom';
import './StarshipPage.css';

const StarshipPage = (props) => {
    const starship = props.getStarship(props.match.params.idx);
    return(
        <div className="StarshipPage">
            {starship ? 
                <div className="StarshipPage-starship">
                    <span>Name:</span>
                    <span>{starship.name}</span>
                    <span>Model:</span>
                    <span>{starship.model}</span>
                    <span>Class:</span>
                    <span>{starship.starship_class}</span>
                    <span>Hyperdrive Rating:</span>
                    <span>{starship.hyperdrive_rating}</span>
                    <span>Crew:</span>
                    <span>{starship.crew}</span>
                    <span>Passengers:</span>
                    <span>{starship.passengers}</span>
                    <Link to='/'>RETURN</Link>
                </div>
            :
            <h4>Loading ...</h4>    
        }
        </div>
    );

};


export default StarshipPage;