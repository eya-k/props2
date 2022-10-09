import logo from './logo.svg';
import './App.css';
import Movielist from './Movielist' ; 
import {moviesData} from './Moviedata' ;



import Search from './Search';
function App() {
  return (
    <div className="App">
      <Search/>
      <Movielist moviesData={moviesData}> </Movielist>
    </div>
  );
}

export default App;
