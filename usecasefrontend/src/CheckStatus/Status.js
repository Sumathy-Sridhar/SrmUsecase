import './Status.css';

import React from 'react';

export default function Status(){
    return(
       <div>
    <div class="search-box">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>


<footer>
  <p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://codepen.io/ahmadbassamemran/">Ahmad Emran</a>
    Follow me : 
      <a target="_blank"  href="https://www.instagram.com/ahmadbassamemran/"><i class="fab fa-instagram"></i></a>
    <a target="_blank"  href="https://www.linkedin.com/in/ahmademarn/"><i class="fab fa-linkedin"></i></a>
    <a target="_blank" href="https://codepen.io/ahmadbassamemran/"><i class="fab fa-codepen"></i></a> 
        <a target="_blank" href="https://dev.to/ahmadbassamemran"><i class="fab fa-dev"></i></a> 
             <a target="_blank" href="https://twitter.com/ahmadbassamemra"><i class="fab fa-twitter-square"></i></a> 
	</p>
</footer>

<div class="youtubeBtn">
  <a target="_blank" href="https://www.youtube.com/AhmadEmran?sub_confirmation=1">
      <span>Watch on YouTube</span>
  <i class="fab fa-youtube"></i>
    </a>

</div> 
        </div>
        
    )
}
