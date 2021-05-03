import React from 'react';
import Input from './Input'

function Home({handleChange, handleSearch}) {
    return (
        <div className="homepage">
            <h1>Welcome to <span id="main">Mender</span></h1>
            <h2>Search for <b>artists</b> you like, find <b>albums</b> you'll love!</h2>
            <h3>Begin Discovering:</h3> 
            <Input handleChange={handleChange} handleSearch={handleSearch}/>
        </div>
    );
}

export default Home;