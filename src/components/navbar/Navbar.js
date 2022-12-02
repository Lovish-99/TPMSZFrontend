import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap'

function navbar() {
  return (
    <div>
      <nav class="navbar">
        <Container>
          <div class="logo">Placement Cell</div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">Register</a></li>
              <li class="services">
                <a href="/">LogIn</a>
                <ul class="dropdown">
                  <li><a href="/">LogIn Student </a></li>
                  <li><a href="/">LogIn Admin</a></li>
                  <li><a href="/">LogIn Recruiter</a></li>
                </ul>
              </li>
              <li><a href="/">Contact</a></li>
            </div>
          </ul>
        </Container>
      </nav>
    </div>
  )
}

export default navbar
