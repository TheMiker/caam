import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '150%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));



export default function HeaderTwo() {
  const classes = useStyles();
    return (
        <header className="App-header">
          <Card style={{marginTop: "10vh", width: "60vh", height: "90vh"}}>
            <CardMedia  className={classes.media} title="poster" image={require('./headerTwo.jpg')}/>
          </Card>
          <Button
                variant="contained"
                color="default"
                href="https://drive.google.com/open?id=1N1G1DBu3tMYbzQa54Q44DdyATRwPMBad"
                className={classes.button}
              >
              Image Download
              </Button>
        </header>
      );
    }