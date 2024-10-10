import * as React from 'react';
import { useEffect, useState } from 'react';


const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [jokes, setJokes] = useState([]);

  const fetchData = async  () => {
    const response = await fetch(url);

    if(response.ok) {
      const result = await response.json();
      console.log(result);

      setJokes(result.value);
    } else {
      console.error('Could not fetch jokes.');
    }
  }

  useEffect( () => {
    void fetchData();
  }, [])

  return (
    <div className="container m-5">
      <div className="row">
        <div className="card">
          <div className="card-body">

          </div>
        </div>
      </div>
      <button type="button" className="btn btn-outline-success m-3">Get new joke</button>
    </div>
  );
};

export default Jokes;