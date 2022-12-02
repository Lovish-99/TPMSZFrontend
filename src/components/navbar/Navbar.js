import React from 'react';
import './Navbar.css';

function navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">Training & Placement Cell</div>
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
        </nav>
    </div>
  )
}

export default navbar
