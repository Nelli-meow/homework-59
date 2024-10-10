import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from './components/Button/Button.tsx';

const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [jokes, setJokes] = useState([]);
  const [iconUrl, setIconUrl] = useState('');

  const fetchData = async  () => {
    const response = await fetch(url);

    if(response.ok) {
      const result = await response.json();

      setJokes(result.value);
      setIconUrl(result.icon_url);
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
            <img src={iconUrl} alt="Chuck Norris" className="mb-3"/>
            <p>{jokes}</p>
          </div>
        </div>
      </div>
      <Button onClick={ fetchData }/>
    </div>
  );
};

export default Jokes;