import React from 'react'
import Results from "@/app/components/Results";

export default async function searchPage({params}) {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
    const data =await res.json();
    const results = data.results;
  return (
    <div>
        {
            results && results.length === 
                <h1 className="text-center pt-6 text-amber-600 text-3xl">No Result Found</h1>
            
        }
        {
            results && <Results results={results}/>
        }
    </div>
  )
}
