import React from 'react';

function Favorites(props) {
    const favorites = JSON.parse(localStorage.getItem("favorites"))

    let output = favorites.map((album) => {
        return (
            <div className="favorite">
                <img src={album.image[3]["#text"]} alt={album.name}/>
                <span className="favoriteFooter">
                <h2>{album.name}</h2>
                <h4>{album.artist.name}</h4>
                </span>
            </div>
        )
    })
    return (
        <div className="favorites">
            {output}
        </div>
    );
}

export default Favorites;