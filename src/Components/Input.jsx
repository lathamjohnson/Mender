import React from 'react';

function Input({handleSearch, handleChange}) {
    return (
        <form onSubmit={handleSearch}>
            <input onChange={handleChange} type="text" placeholder="artist..."/>
        </form>
    );
}

export default Input;