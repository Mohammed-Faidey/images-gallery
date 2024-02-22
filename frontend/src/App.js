import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';


function App() {
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH;
  const [word, setWord] = useState('');
  
  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(UNSPLASH_KEY);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //console.log(process.env);

  return (
    <div className="App">
      <Header title="Images Gallery"></Header>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}></Search>
    </div>
  );
}

export default App;
