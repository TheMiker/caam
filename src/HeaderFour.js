import React from 'react';
import headerImage from './headerFour.jpg';
import './App.css';
import Typography from '@material-ui/core/Typography';

const topicStyle = {
  paddingRight:'4rem',
  paddingLeft:'4rem',
};

export default function HeaderFour() {
    var text = require('./text.json');
    return (
        <header className="App-header">
            <img src={headerImage} className="App-logo" alt="logo" />
            <div style={{padding: '1em'}}/>
            <Typography variant="body1" style={topicStyle}>{text.HeaderThree}</Typography>
        </header>
      );
    }