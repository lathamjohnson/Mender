import {React, useState} from 'react';

function Results({addFavorite, current}) { 
    return (
        <div className="resultCard">
            <span className="control" onClick={addFavorite}><sub id="fav">&#10084;</sub><sub id="next">&#10140;</sub></span>
            <img id="cover" src={current.image[3]["#text"]} alt="Album Cover"/>
            <span id="albumFoot">
            <h2 id="title">{current.name}</h2>
            <h2 id="artist" href={current.artist.url}>{current.artist.name}</h2>
            </span>
        </div>
    );
}


export default Results;