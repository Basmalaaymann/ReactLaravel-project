import React from 'react'
import some from './../imgs/img (1).png'
import vector from './../imgs/Vector.png'
import social from './../imgs/Social.png'
 const Footer = () => {
  return (
    <div className='myydiv'>
        <footer>
          <div className='vector'>
            <img src={vector}></img>
            <h2>BistroBliss</h2>
            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          <img src={social} className='social'></img>
          </div>
          <h2>pages</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
          <div className='utiliy'>
          <h2>Utility Pages</h2>
          <ul>
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>Licenses</li>
            <li>Changelog</li>
             <li>View More</li>
          </ul>
          </div>
          <div className='imgss'>
            <img src={some}></img>
          </div>
          <br></br>
          <h5>Copyright © 2023 Hashtag Developer. All Rights Reserved</h5>
        </footer>
    </div>
  )
}
export default Footer;
