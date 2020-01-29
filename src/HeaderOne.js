import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import SubjectIcon from '@material-ui/icons/Subject';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function HeaderOne() {
    const classes = useStyles();
    return (
        <header className="App-header">
            <iframe title="slidesFrame" style={{marginTop: '6rem'}} src="https://docs.google.com/presentation/d/e/2PACX-1vQ0gHRwCEy23N5OTYv2QRoxs6sjNMo3lyjAN55kjkWxkZaAoShe3whl-C7BpSNCLSv9a4Wy3p9mPBtA/embed?start=true&loop=true&delayms=3000" frameBorder="0" width="100%" height="569" allowFullScreen={true} mozallowfullscreen="true"  webkitallowfullscreen="true"></iframe>
            <div style={{padding: '.5rem'}}/>
            <Grid style={{marginTop:'0 rem', display:'block'}}>
              <Button 
                variant="contained"
                color="default"
                href="https://docs.google.com/document/d/1sN3HQ4PuZ3blq1EDggInJsRnrmrPM9ufjVfHSvse20s/edit?usp=sharing"
                className={classes.button}
                startIcon={<SubjectIcon />}
              >
              Report
              </Button>
              <Button
                variant="contained"
                color="default"
                href="https://drive.google.com/open?id=1RnIeBv60qoP7aKdQloLfqqCseUX8jK_y1viR53Yzs3w"
                className={classes.button}
                startIcon={<SlideshowIcon />}
              >
              Presentation
              </Button>
            </Grid>
        </header>
      );
    }