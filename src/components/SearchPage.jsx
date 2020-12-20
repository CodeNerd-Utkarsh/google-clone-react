import React from 'react';
import useGoogleSearch from '../customHooks/useGoogleSearch';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
// import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchPageOptions from './SearchPageOptions';

function SearchPage() {
     const[{term},dispatch] = useStateValue();
    //  this one is the live API call
     const {data} = useGoogleSearch(term);

    // this one is dummy call
    // const data = Response;

     console.log('data is',data);
    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to='/'>
                    <img className='searchPage__logo' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>
                {/* <h1>{term}</h1> */}
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <SearchPageOptions />
                </div>
            </div>
            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item =>(
                        <div className="searchPage__result">
                            <a href='{item.link}'>
                                {item.displayLink}
                            </a>
                            <a href="{item.Link}" className='searchPage__resultTitle'>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                        
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;
// https://developers.google.com/custom-search/v1/using_react
