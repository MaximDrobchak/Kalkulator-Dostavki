
import React, {useState, useEffect, Fragment} from 'react';
import { MDBContainer } from 'mdbreact';
import NavBar from '../components/NavBar'
import './index.css';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import video from '../data/videoplayback.mp4';
import Step1 from './Step1';
import Step2 from './Step2';
import { styles } from './styles'


const gridExamplesPage = () => {

  return (
    <div>
      <WithVide />
      <WithMain />
    </div>
  )
};
function Video(props){
  const { classes } = props;
  return (
      <video autoplay muted loop className={classes.video} id='forsage'>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
  )
}
Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WithVide = withStyles(styles)(Video);

function Main(props){
  const { classes } = props;
  const width = setWindowWidth();
  return (
    <div className={classes.main}>
      <NavBar title='Расчет доставки авто'/>
      <MDBContainer className={classes.root}
        style={{
          flexDirection: width < 992
          ? 'column'
          : 'row'
        }}
      >

      <MDBContainer className={classes.step}>
        <Step1>
          {/* <NavBar title='Расчет доставки авто'/> */}
        </Step1>
      </MDBContainer>

      <MDBContainer  className={classes.step}>
        <Step2>
          {/* <NavBar title='Разсчет розтаможки' /> */}
        </Step2>
      </MDBContainer>

      </MDBContainer>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

const WithMain = withStyles(styles)(Main);
function setWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handlyResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handlyResize);

		return () =>
			window.removeEventListener('resize', handlyResize);
	});
	return width;
}

export default withSnackbar(gridExamplesPage);
