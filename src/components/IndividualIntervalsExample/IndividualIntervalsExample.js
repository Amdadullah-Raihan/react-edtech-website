import { ImageList } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import img from './images/cover/cover-1.png'
import './IndividualIntervalsExample.css'

function IndividualIntervalsExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 bg-transparent"
          src={img}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h1>World Most Trusted E-Learning Providor</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 bg-transparent"
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Learn anything you want</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg-transparent"
          src={img}
          alt="Third slide"
        />
        
        <Carousel.Caption className='bold-text'>
          <h1>Earn Money By Learning Demanded Skills</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;