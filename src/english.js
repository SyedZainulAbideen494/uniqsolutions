import React, { Fragment, useCallback, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import banner from './images/Dropment (1).png'
import logo from './images/Dropment.png'
import code from './images/Dropment (7).png'
import host from './images/Dropment (8).png'
import keyimg from './images/Dropment (10).png'
import arrow from './images/Untitled design (16).png'
import './App.css'
import emailjs from '@emailjs/browser';
import conu from './images/conu.png'
import ex from './images/exp.png'
import succ from './images/succ.png'

const English = (props) => {

  const itemsRef = useRef(null);
  const aboutusRef = useRef(null);
  const contactusRef = useRef(null);

  const scrollToItems = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToaboutus = () => {
    if (aboutusRef.current) {
      aboutusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTocontactus = () => {
    if (contactusRef.current) {
      contactusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const whatsappNumber = '7760372901'; // Replace with your desired WhatsApp number
  const message = 'Hello, this is a test message!'; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };


  return (
    <Fragment>
      <div className="maindivtemp1">
        <div className="temp1head2">
          <header>
            <h2 className="nameofweb">Uniqsolutions</h2>
            <ul>
              <li><button onClick={scrollToItems}>Our service</button></li>
              <li><button onClick={scrollToaboutus}>About us</button></li>
              <li><button onClick={scrollTocontactus}>Contact us</button></li>
            </ul>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">INDIA’S NO.1 IMMIGRATION & VISA CONSULTANT</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">Our services</button>
              </section>
            </div>
            <div className="temp1head1img">
              <secion>
                <img src={banner}/>
              </secion>
            </div>
          </header>
        </div>
        <div className="keystemp1">
          <div className="key1temp1">
            <section>
              <img src={conu}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>COUNSELED</h2>
              <p>10 MILLION+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>EXPERTS</h2>
              <p>SINCE 1999</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>SUCCESSES</h2>
              <p>1 MILLION</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>Contact us</h2>
            <div className="blcokemail">
      <label>Name</label><br/>
      <input type="text" name="user_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>Email</label><br/>
      <input type="email" name="user_email"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>Phone number</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="Send" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>About us</h1>
            <p>Uniqsolutions is India’s No.1 Overseas Career Consultant and presumably the world’s largest B2C immigration firm. Established in 1999, our 50+ company owned and managed offices across India, Australia, the United Arab Emirates, the United Kingdom, and Canada and 1500+ employees serve over 1 million customers. We are Licensed Recruitment Agents in India and IATA travel agents. As part of our services, we provide personal one-on-one counseling to about 1,00,000+ individual inquiries every month for migration, study and work visas. Over 50% of our customers are through word-of-mouth. No other company understands overseas careers like we do.</p>
            <button ref={itemsRef}>Our services</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>Our services</h1>
        </div>
        <div className="contactustemp1">
          <footer>
            <h2>Contact us</h2>
            <ul>
              <li>@instagram</li>
              <li>77665544</li>
              <li>You@gmail.com</li>
            </ul>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default English;