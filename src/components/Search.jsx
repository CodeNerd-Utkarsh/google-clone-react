import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer';

function Search({hideButtons = false}) {
    const[{},dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search=e=>{
        e.preventDefault();
        // console.log('You hit the search button and input is >>',input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })

        history.push('/search');
    };
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
            {!hideButtons ? (
                
            <div className="search__buttons">
                <Button variant='outlined' onClick={search} type='submit'>Google Search</Button>
                <Button variant='outlined' >I'm Feeling Lucky</Button>
            </div>
            ) : (
            <div className="search__buttons">
                <Button className='search__buttonsHidden' variant='outlined' onClick={search} type='submit'>Google Search</Button>
                <Button className='search__buttonsHidden' variant='outlined' >I'm Feeling Lucky</Button>
            </div>
            )}
            {/* </div> */}
    

        </form> 
    )
}

export default Search
