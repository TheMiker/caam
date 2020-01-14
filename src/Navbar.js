import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import HeaderZero from './HeaderZero.js'
import HeaderOne from './HeaderOne.js'
import HeaderTwo from './HeaderTwo.js'
import HeaderThree from './HeaderThree.js'

const navTitleStyle = {
    marginRight: '22%', 
    flexGrow: '1', 
    color: '#282c34',
};


export default function Navbar(props) {
const [group, setGroup] = useState("GP 0");

function helperZero(){
    setGroup("GP 0");
    props.setter(<HeaderZero/>)
}

function helperOne(){
    setGroup("GP 1");
    props.setter(<HeaderOne/>)
}

function helperTwo(){
    setGroup("GP 2");
    props.setter(<HeaderTwo/>)
}

function helperThree(){
    setGroup("GP 3");
    props.setter(<HeaderThree/>)
}

  return (
      <AppBar position="fixed" style={{backgroundColor: 'white'}}>
        <Toolbar>
            <ButtonGroup>
                <Button onClick={()=> helperZero()}>GP 0</Button>
                <Button onClick={()=> helperOne()}>GP 1</Button>
                <Button onClick={()=> helperTwo()}>GP 2</Button>
                <Button onClick={()=> helperThree()}>GP 3</Button>
            </ButtonGroup>
            <Typography variant="h6" style={navTitleStyle}>{group}</Typography>
        </Toolbar>
      </AppBar>
  );
}