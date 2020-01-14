import React from 'react';
import collage from './collage.jpg';
import './App.css';
import Navbar from './Navbar.js'
import Typography from '@material-ui/core/Typography';

const topicStyle = {
  paddingRight:'10em',
  paddingLeft:'10em',
};

function App() {
  var text = require('./text.json');
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={collage} className="App-logo" alt="logo" />
        <div style={{padding: '1em'}}/>
        <Typography variant="body1" style={topicStyle}>{text.topicDescription}</Typography>
      </header>
    </div>
  );
}

export default App;
