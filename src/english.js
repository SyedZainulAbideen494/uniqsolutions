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
import Aus from './images/Australia.png'
import canada from './images/Canada.png'
import germ from './images/Germany.png'
import uae from './images/UAE.png'
import uk from './images/UK.png'
import USA from './images/USA.png'

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

    emailjs.sendForm('service_1jdtwoh', 'template_6i2r4im', form.current, 'RBWnh4c9lvoO7R7yO')
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

  const SimpleDropdown = () => {
    const languageOptions = [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'हिन्दी' }, // Hindi
      { code: 'te', name: 'తెలుగు' }, // Telugu
      { code: 'mr', name: 'मराठी' }, // Marathi
      { code: 'ta', name: 'தமிழ்' }, // Tamil
      { code: 'kn', name: 'ಕನ್ನಡ' }, // Kannada
      { code: 'fr', name: 'Français' }, // French
      { code: 'de', name: 'Deutsch' }, // German
      { code: 'ko', name: '한국어' }, // Korean
      { code: 'uk', name: 'українська' }, // Ukrainian
      { code: 'ar', name: 'العربية' }, // Arabic
      { code: 'zh', name: '中文' }, // Chinese
    ];
  
    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
  
      // Redirect to the selected language route
      window.location.href = `/${selectedLanguage}`;
    };
  
    return (
      <div className="simple-dropdown">
        <select onChange={handleLanguageChange}>
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
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
                <SimpleDropdown/>
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
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>Email</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
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
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>Canada</h3>
            <ul>
                <li>Visitor Visa</li>
                <li>Student Visa & Admission</li>
                <li>Work Visa – FSTP</li>
                <li>Business Visa</li>
                <li>PR Visa – Express Entry</li>
                <li>PR Visa – PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>Contact us</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>AUSTRALIA</h3>
            <ul>
                <li>Visitor Visa</li>
                <li>Student Visa & Admission</li>
                <li>Graduate Work Visa</li>
                <li>Subclass 189</li>
                <li>TSS Visa</li>
                <li>Business Visa</li>
                <li>PR Visa – Skill Migration</li>
            </ul>
            <button onClick={scrollTocontactus}>Contact us</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>GERMANY</h3>
            <ul>
                <li>Visitor Visa</li>
                <li>Student Visa & Admission</li>
                <li>Job Seeker Visa</li>
                <li>Business Visa</li>
            </ul>
            <button onClick={scrollTocontactus}>Contact us</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>USA</h3>
            <ul>
                <li>Visitor Visa</li>
                <li>Student Visa & Admission</li>
                <li>Work Visa – FSTP</li>
                <li>Business Visa</li>
            </ul>
            <button onClick={scrollTocontactus}>Contact us</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>UK</h3>
            <ul>
                <li>Visitor Visa</li>
                <li>Student Visa – Tier 4</li>
                <li>Work Visa – Skilled Worker</li>
                <li>Business Visa</li>
                <li>Innovator Visa</li>
                <li>HPI Visa</li>
            </ul>
            <button onClick={scrollTocontactus}>Contact us</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>Canada</h3>
            <ul>
                <li>Visitor Visa</li>
                <li>Tourist Visa</li>
                <li>Work Visa</li>
                <li>Golden Visa</li>
                <li>Green Visa</li>
            </ul>
            <button onClick={scrollTocontactus}>Contact us</button>
          </div>
          </section>
          </section>
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