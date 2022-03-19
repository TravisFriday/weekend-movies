import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

console.log(process.env.REACT_APP_API_KEY)
function App() {
  return (
    <div className="App">
     
        <Button variant="contained">Hello World</Button>
    </div>
  );
}
export default App;


