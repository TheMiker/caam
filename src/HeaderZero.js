import React from 'react';
import collage from './collage.jpg';
import './App.css';
import Typography from '@material-ui/core/Typography';

const topicStyle = {
  paddingRight:'4rem',
  paddingLeft:'4rem',
};

const nameStyle = {
  paddingTop:'1rem',
  paddingBottom: '0rem',
};

const teamNameStyle = {
  paddingTop:'5rem',
  paddingBottom: '0rem',
};

export default function HeaderZero() {
    var text = require('./text.json');
    return (
        <header className="App-header">
            <Typography variant="h3" style={teamNameStyle}>Inclusiviteam</Typography>
            <img src={collage} className="App-logo" alt="logo" />
            <Typography variant="body2" style={nameStyle}>Christine Yan, AK Alilonu, Anton Generalov, Michael Rodriguez</Typography>
            <div style={{padding: '1em'}}/>
            <Typography variant="body1" style={topicStyle}>{text.HeaderZero}</Typography>
        </header>
      );
    }