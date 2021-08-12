import './Aboutus.css';

import React from 'react';

export default function Aboutus(){
    return(
        <div>
        <div class="about-section">
  <h1>About Us</h1>
  <p> Bank of SRM is a leading private sector bank in India. The Bank’s consolidated total assets stood at Rs. 14.76 trillion at September 30, 2020.  ICICI Bank currently has a network of 5,288 branches and 15,158 ATMs across India.</p>
  <p> Bank of SRM was formed in 1955 at the initiative of the World Bank, the Government of India and representatives of Indian industry. The principal objective was to create a development financial institution for providing medium-term and long-term project financing to Indian businesses. Until the late 1980s, ICICI primarily focused its activities on project finance, providing long-term funds to a variety of industrial projects. With the liberalization of the financial sector in India in the 1990s, ICICI transformed its business from a development financial institution offering only project finance to a diversified financial services provider that, along with its subsidiaries and other group companies, offered a wide variety of products and services. As India’s economy became more market-oriented and integrated with the world economy, ICICI capitalized on the new opportunities to provide a wider range of financial products and services to a broader spectrum of clients. ICICI Bank was incorporated in 1994 as a part of the ICICI group. In 1999, ICICI became the first Indian company and the first bank or financial institution from non-Japan Asia to be listed on the New York Stock Exchange.</p>
    </div>

<h2 >Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://th.bing.com/th/id/OIP.scZz_Dqic7hNaJ_yQYK1_AAAAA?pid=ImgDet&rs=1" alt="Jane" />
      <div class="container">
        <h2>John </h2>
        <p class="title">CEO & Founder</p>
        <p> </p>
        <p>john@yahoo.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://th.bing.com/th/id/OIP.Rkn1t-YMDUWmr_GX1xVzHAHaE8?pid=ImgDet&rs=1" alt="Mike"/>
      <div class="container">
        <h2> Laara </h2>
        <p class="title">Senior Manager</p>
        <p></p>
        <p>Laara@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://i.vimeocdn.com/video/295416443.jpg?mw=1920&mh=1080&q=70" alt="John" />
      <div class="container">
        <h2> Neha</h2>
        <p class="title"> </p>
        <p></p>
        <p>Neha@yahoo.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>
    )
}