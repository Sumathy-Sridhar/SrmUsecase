import './Queries.css';

import React from 'react';

export default function Queries(){
    return(
        <div>
        <div class="container">
  <div >
    <h2>Contact Us</h2>
    <p> </p>
  </div>
  <div class="row">
  <img src="https://res.cloudinary.com/neotechbd/image/upload/v1503063455/Neo-Technologies/Animation/contact-us.gif" alt="img" />
    <div class="column">
     
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
</div>
    )
}