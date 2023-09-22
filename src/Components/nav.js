import React from 'react';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const linkStyle = {
    color: '#fafafa',    // Set the text color to your desired color
    textDecoration: 'none' // Remove the underline
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={linkStyle}>
          <i className="fa-solid fa-satellite fa-rotate-180" style={{ color: '#f2f2f2' }}></i> CosmicExplorations
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/Explorations">Exploration</Link></li>
        <li className="navbar-item"><Link to="/Interactives">Interactive</Link></li>
        <li className="navbar-item"><Link to="/Shop"><i className="fa-solid fa-basket-shopping" style={{ color: "#f7f7f8" }}></i></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
































// import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom'; // Import the Link component from React Router

// export default class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar bg="dark" data-bs-theme="dark" style={{zIndex: 10}}>
//           <Container>
//             <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
//             <Nav className="justify-content-end">
//               <Nav.Link as={Link} to="/">Home</Nav.Link>
//               <Nav.Link as={Link} to="/Explorations">Explorations</Nav.Link>
//               <Nav.Link as={Link} to="/Interactives">Interactives</Nav.Link>
//               <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
//               <Nav.Link as={Link} to="/Shop">
//                 <i className="fa-solid fa-basket-shopping" style={{ color: "#f7f7f8" }}></i>
//               </Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//     );
//   }
// }