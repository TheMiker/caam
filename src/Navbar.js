import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'

const navTitleStyle = {
    marginRight: '22%', 
    flexGrow: '1', 
    color: '#282c34',
};

export default function Navbar() {
const [group, setGroup] = useState("GP 0");

  return (
      <AppBar position="fixed" style={{backgroundColor: 'white'}}>
        <Toolbar>
            <ButtonGroup>
                <Button onClick={()=>setGroup("GP 0")}>GP 0</Button>
                <Button onClick={()=>setGroup("GP 1")}>GP 1</Button>
                <Button onClick={()=>setGroup("GP 2")}>GP 2</Button>
                <Button onClick={()=>setGroup("GP 3")}>GP 3</Button>
            </ButtonGroup>
            <Typography variant="h6" style={navTitleStyle}>{group}</Typography>
        </Toolbar>
      </AppBar>
  );
}