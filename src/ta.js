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

const Tamil = (props) => {

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
            <h2 className="nameofweb">அதிசயநேடிகள்</h2>
            <ul>
              <li><button onClick={scrollToItems}>எங்கள் சேவை</button></li>
              <li><button onClick={scrollToaboutus}>எங்களை பற்றி</button></li>
              <li><button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button></li>
            </ul>
            <SimpleDropdown/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">இந்தியாவின் எண் 1 வெளிநாட்டு விசா ஆலோசகர்</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">எங்கள் சேவைகள்</button>
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
              <h2>ஆலோசிக்கப்பட்டது</h2>
              <p>10 மில்லியன்+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>அறிவியல்</h2>
              <p>1999 வரை</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>வெற்றிகரம்</h2>
              <p>1 மில்லியன்</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>எங்களுக்கு தொடர்பு கொள்ளவும்</h2>
            <div className="blcokemail">
      <label>பெயர்</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>மின்னஞ்சல்</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>தொலைபேசி எண்</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="அனுப்பு" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>எங்களை பற்றி</h1>
            <p>அதிசயநேடிகள் இந்தியாவின் எண் 1 வெளிநாட்டு விசா ஆலோசகர் மற்றும் எய்ர்வேடை பிரதிநிதிகள் காம்பேட்டில் அமைக்கப்பட்டவர் என்பதை நினைவில் கொள்ளுகின்றனர். 1999 ஆம் ஆண்டில் அறிவியல் வளாகத்தில், நம் 50+ நிறுவன உட்பட நாங்கள் இந்தியா, ஆஸ்திரேலியா, ஐக்ய அரபு கூட்டமைப்பு, ஐக்ய இராச்சியம், கனடா மற்றும் 1500+ பணியாளர்கள் வரை மிகவும் பல்வேறு கிளைகள் வழங்கின்றனர். நாங்கள் இந்தியாவில் அனுமதிகள் வேண்டும் மற்றும் IATA பயணிக்காளர்களாக இருக்க வேண்டும். நம் சேவைகளின் ஒரு பக்கமாக, புலம் ஒரு பெருமைபாடு அளிக்கின்றோம், படிக்கடிகள் மற்றும் வேலை விசாக்குகள் குறித்து முற்போக்குகள். நம் உத்தமமான 50% க்ரித்தபடிகள் வார்த்தைக்கு மூலமாக அவர்களை வேண்டும். இந்தியாவிற்கு ஏற்ற மற்ற நேர ஒன்று ஒன்று ஆய்வகங்களுக்கு அளிக்கிறது.</p>
            <button ref={itemsRef}>எங்கள் சேவைகள்</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>எங்கள் சேவைகள்</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>கனடா</h3>
            <ul>
                <li>பராமரிப்பு விசா</li>
                <li>மாணவர் விசா மற்றும் அனுமதி</li>
                <li>வேலை விசா - FSTP</li>
                <li>வணிக விசா</li>
                <li>PR விசா - எக்ஸ்ப்ரெஸ் என்ட்ரி</li>
                <li>PR விசா - PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>ஆஸ்திரேலியா</h3>
            <ul>
                <li>பராமரிப்பு விசா</li>
                <li>மாணவர் விசா மற்றும் அனுமதி</li>
                <li>கிரேஜுட் வேல் விசா</li>
                <li>உபகுல மதிப்பு 189</li>
                <li>TSS விசா</li>
                <li>வேலை விசா - திறப்பு பராமரிப்பு</li>
                <li>PR விசா - ஸ்கில் மைக்ரேஷன்</li>
            </ul>
            <button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>ஜெர்மனி</h3>
            <ul>
                <li>பராமரிப்பு விசா</li>
                <li>மாணவர் விசா மற்றும் அனுமதி</li>
                <li>வேலை விசா</li>
                <li>வணிக விசா</li>
            </ul>
            <button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>ஐக்கிய அமெரிக்கா</h3>
            <ul>
                <li>பராமரிப்பு விசா</li>
                <li>மாணவர் விசா மற்றும் அனுமதி</li>
                <li>வேலை விசா - FSTP</li>
                <li>வணிக விசா</li>
            </ul>
            <button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>ஐக்கிய அரசு</h3>
            <ul>
                <li>ஆகமது விசா</li>
                <li>மாணவர் விசா - டியர் 4</li>
                <li>வேலை விசா - ஸ்கில்ட் வொர்கர்</li>
                <li>வேலை விசா - விசா</li>
                <li>அளித்தல் விசா</li>
                <li>HPI விசா</li>
            </ul>
            <button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>ஐக்கிய அரபு அமெரிக்கா</h3>
            <ul>
                <li>பராமரிப்பு விசா</li>
                <li>பர்யடநா விசா</li>
                <li>வேலை விசா</li>
                <li>கோல்டன் விசா</li>
                <li>கிரீன் விசா</li>
            </ul>
            <button onClick={scrollTocontactus}>எங்களுக்கு தொடர்பு கொள்ளவும்</button>
          </div>
          </section>
          </section>
        </div>
        <div className="contactustemp1">
          <footer>
            <h2>எங்களுக்கு தொடர்பு கொள்ளவும்</h2>
            <ul>
              <li>@இன்ஸ்டாகிராம்</li>
              <li>77665544</li>
              <li>You@gmail.com</li>
            </ul>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Tamil;