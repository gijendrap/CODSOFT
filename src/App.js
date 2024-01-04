import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import img1 from './Assets/1.jpeg';
import img2 from './Assets/2.jpeg';
import img3 from './Assets/3.jpeg';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [focusedCard, setFocusedCard] = useState(null);

  const backgroundImages = [
    'https://www.pixground.com/wp-content/uploads/2023/02/galaxy-stars-space-digital-art-hd-wallpaper-pixground-1024x576.jpg',
    'https://wallpapercave.com/wp/wp4725717.jpg',
    'https://rare-gallery.com/uploads/posts/4590954-artwork-fantasy-art-concept-art-spaceship-stars-space-digital-art-science-fiction.jpg',
    'https://www.pixground.com/wp-content/uploads/2023/02/Black-Hole-in-the-Vastness-of-Space-AI-4K-Desktop-Wallpaper-Pixground.jpg',
    'https://cdn.wallpapersafari.com/53/55/C43Z0E.jpg',
    'https://images6.alphacoders.com/435/435794.jpg',
    'https://wallpaperaccess.com/full/1253132.jpg',
    'https://www.pixground.com/wp-content/uploads/2023/05/Helix-Nebula-Eye-4K-Wallpaper-1024x576.webp',
  ];

  const image = [
    'https://cdn.wallpapersafari.com/7/59/chMEzZ.jpg',
    'https://cdn.wallpapersafari.com/46/69/GNQuLK.jpg',
    'https://www.wallpaperflare.com/static/690/365/67/science-fiction-apocalyptic-space-art-planet-wallpaper.jpg',
    'https://c4.wallpaperflare.com/wallpaper/538/989/68/sci-fi-spaceship-planetscape-hd-wallpaper-preview.jpg',
    'https://rare-gallery.com/uploads/posts/4591164-artwork-spaceship-planet-concept-art-fantasy-art-space-futuristic.jpg',
    'https://c4.wallpaperflare.com/wallpaper/576/350/354/atmosphere-spacecraft-international-space-station-space-station-wallpaper-preview.jpg'

  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      controls1.start({
        opacity: 1 - scrollProgress,
        y: 50 - scrollProgress * 200,
      });

      controls2.start({
        opacity: 1 - scrollProgress,
        y: 50 - scrollProgress * 200,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls1, controls2]);

  const handleCardHover = (index) => {
    setFocusedCard(index);
  };

  

  const [text, setText] = useState('');
  const originalText = "Exploring the cosmos, our project carries boundless ambitions to new heights....!";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(originalText.substring(0, index));
      index++;

      if (index > originalText.length) {
        clearInterval(intervalId);
      }
    }, 50); 

    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <div>
      <div
        style={{
          backgroundColor: 'black',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 01)), url(${backgroundImages[backgroundIndex]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '50rem',
          zIndex: -1,
          backgroundPosition: `50% -${scrollPosition * 0.5}px`,
        }}
      />
      <></>

      <Navbar expand="lg" style={{ backgroundColor: 'transparent', zIndex: 100, fontFamily:'monospace' }}>
        <Navbar.Brand href="#home" style={{ marginLeft: '2rem', color: 'white',  }}>
          Space Ride
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navcon">
            <Nav.Link href="#home" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ textAlign: 'center', marginTop: '200px', color: 'white', fontFamily: 'monospace' }}>
        <h1>Space Ride</h1>
        <p>{text}</p>
      </div>

      <div
        className="container-fluid d-flex justify-content-center"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '10px',
          padding: '20px',
          marginTop: '20rem',
          fontFamily:'monospace'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.8 }}
          className="container mt-2"
          style={{
            borderRadius: '1rem',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            width: '40rem',
            height: '250px',
          }}
        >
          <h2 className="mb-4">Mission Objectives:</h2>
          <p>Conduct detailed observations of exoplanets to identify potential habitable zones.
          Study cosmic phenomena, such as supernovae and black holes, to deepen our understanding of the universe.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls2}
          transition={{ duration: 0.8 }}
          className="container mt-5"
          style={{
            borderRadius: '1rem',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            width: '30rem',
          }}
        >
          <h2 className="mb-4">Innovation Highlights:</h2>
          <p>Integration of artificial intelligence for real-time data analysis and mission optimization.
          Collaboration with international space agencies to leverage shared resources and expertise..</p>
        </motion.div>
      </div>


      <div className="d-flex justify-content-center" 
           style={{color:'white', 
                   marginTop:'100px',
                   fontFamily:'monospace'
                   }}
          >
          <h1>Projects</h1>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 2fr))',
          gap: '10px',
          padding: '90px',
          fontFamily:'-moz-initial'
        }}
      >
        {image.map((image, index) => (
          <Card
            key={index}
            style={{
              width: '18rem',
              margin: '20px auto',
              backgroundColor: focusedCard === index ? 'white' : 'rgba(255, 255, 255, 0.2)',
              color: focusedCard === index ? 'black' : 'white',
              filter: focusedCard !== null && focusedCard !== index ? 'blur(2px)' : 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title style={{fontWeight:'bolder'}}>Orbital Pathfinder</Card.Title>
              <Card.Text>
              The Orbital Pathfinder project is dedicated to deploying a state-of-the-art satellite into Earth's orbit, aiming to advance communication, observation, and scientific research capabilities.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          padding: '20px',
          lineHeight: '1.6',
          maxWidth: '600px',
          textAlign: 'justify',
          margin: '20px auto',
          fontFamily:'monospace'
        }}
      >
        <h2>About Us</h2>
        <p>
        At Celestial Explorations, we are a passionate team of scientists, engineers, and visionaries united by our shared commitment to unraveling the mysteries of the cosmos. Founded on the belief that the wonders of space should be accessible to all, we embark on a journey of exploration and discovery.
        </p>
        <p>
        Our mission is to push the boundaries of space exploration, fostering innovation and expanding our understanding of the universe. Through cutting-edge projects and collaborations, we strive to inspire curiosity, advance scientific knowledge, and contribute to the global community's shared vision of reaching beyond our earthly confines.
        </p>
        <p>
        Whether you're a fellow space enthusiast, a researcher, or someone eager to support the future of space exploration, we invite you to join us on this celestial journey. Together, we can reach for the stars and unlock the secrets of the universe.
        </p>
      </div>

      <div style={{ backgroundColor: 'transparent', color: 'white', padding: '30px', margin: '20px',fontFamily:'monospace' }}>
        <h2 style={{ padding: '60px', color:'#659DBD'}}>Project Leads</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src={img1}
              className="img-fluid rounded-circle"
              alt="ss"
              style={{ width: '150px', height: '150px', margin: '10px auto', }}
            />
            <p className="text-center" style={{ color:'#E27D60'}}>Admiral Turbo Meowington</p>
          </div>

          <div className="col-md-4">
            <img
              src={img2}
              alt="Employee 2"
              className="img-fluid rounded-circle"
              style={{ width: '150px', height: '150px', margin: '10px auto' }}
            />
            <p className="text-center" style={{ color:'#41B3A3'}}>Yoyo Meow</p>
          </div>

          <div className="col-md-4">
            <img
              src={img3}
              alt="Employee 3"
              className="img-fluid rounded-circle"
              style={{ width: '150px', height: '150px', margin: '10px auto' }}
            />
            <p className="text-center" style={{ color:'#C38D9E'}}>Tika Meowsala</p>
          </div>

        </div>
      </div>

      <div className="text-center mt-5" >
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: 'white' ,padding:'10px' }} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'white',padding:'10px' }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'white',padding:'10px' }} />
        </a>
      </div>

      <footer className="text-center py-4" style={{ fontFamily: 'serif', color: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0px' }}>
        
          <a href="#link1" style={{ color: 'white', textDecoration: 'none' }}>
            Github
          </a>

          <a href="#link2" style={{ color: 'white', textDecoration: 'none' }}>
            Projects
          </a>

          <a href="#link3" style={{ color: 'white', textDecoration: 'none' }}>
            Meow office
          </a>

          <a href="#link4" style={{ color: 'white', textDecoration: 'none' }}>
            dart cat
          </a>

          <a href="#link5" style={{ color: 'white', textDecoration: 'none', marginBottom: '2rem' }}>
            cat margin
          </a>

          <a href="#link6" style={{ color: 'white', textDecoration: 'none' }}>
            catistic
          </a>
        </div>
        <p>Space Ride &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;