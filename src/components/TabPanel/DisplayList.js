import React from 'react';
import DisplayDetails from './DisplayDetails';

const DisplayList = props => {
    return (
        <div>
            <div className="row">
                {
                    props.displayResults.map((result, index) => {
                        return (
                            <DisplayDetails
                                key={index} 
                                image={result.poster_path} 
                                title={result.title} 
                                name={result.name}
                                release_date={result.release_date}
                                popularity={result.popularity} 
                                overview={result.overview}/>   
                        ) 
                    })
                }
            </div>
        </div>

    )
}

export default DisplayList;