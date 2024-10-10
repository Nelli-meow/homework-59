import './App.css'
import Form from "./components/Form/Form.tsx";
import { useState } from 'react';
import Jokes from './containers/Jokes.tsx';


const App = () => {
const [page, setPage] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setPage(!page)} className="btn btn-primary">Next ex</button>

      {page ? <Jokes/> : <Form/>}

    </>
  )
};

export default App
