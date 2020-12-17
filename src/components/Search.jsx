import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

function Search() {
    const [input, setInput] = useState('');

    const search=e=>{
        e.preventDefault();
        console.log('You hit the search button and input is >>',input);
    }
    return (
        // to use the Enter key for submitting the value of the input feild we can simply change to containing div to a form 
        // <div className='search'>
        <form className='search'> 
        
            <div className="search__input">
                <SearchIcon className='search__inputIcon'/>
                <input value={input} onChange=
                {e=> setInput(e.target.value)} />
                
                <MicIcon />
            </div>
    {/* and make the Button type='submit' */}
            <div className="search__buttons">
                <Button variant='outlined' onClick={search} type='submit'>Google Search</Button>
                <Button variant='outlined' >I'm Feeling Lucky</Button>
            </div>

        {/* </div> */}

        </form> 
    )
}

export default Search
