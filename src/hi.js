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
import banner1 from './images/Untitled design (10).png'
import banner2 from './images/Untitled design (12).png'
const Hi = (props) => {

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

  const whatsappNumber = '9739839118'; // Replace with your desired WhatsApp number
  const message = 'Hello, this is a test message!'; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  const SimpleDropdown = () => {
    const languageOptions = [
      {code: 'en', name: 'language'},
      {code: '', name: 'english'},
      { code: 'hi', name: 'हिन्दी' }, // Hindi
      { code: 'te', name: 'తెలుగు' }, // Telugu
      { code: 'ma', name: 'मराठी' }, // Marathi
      { code: 'ta', name: 'தமிழ்' }, // Tamil
      { code: 'ka', name: 'ಕನ್ನಡ' }, // Kannada
      { code: 'fr', name: 'Français' }, // French
      { code: 'de', name: 'Deutsch' }, // German
      { code: 'ko', name: '한국어' }, // Korean
      { code: 'ar', name: 'العربية' }, // Arabic
      { code: 'ch', name: '中文' }, // Chinese
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
              <li><button onClick={scrollToItems}>हमारी सेवाएं</button></li>
              <li><button onClick={scrollTocontactus}>हमसे संपर्क करें</button></li>
            </ul>
            <SimpleDropdown/><br/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">भारत का संख्या 1 वीज़ा सलाहकार</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">हमारी सेवाएं</button>
              </section>
            </div>
            <div className="temp1head1img">
              <secion>
                <img src={banner1}/>
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
              <h2>सलाह दी</h2>
              <p>10 मिलियन+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>विशेषज्ञ</h2>
              <p>1999 से</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>सफलताएँ</h2>
              <p>1 मिलियन</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>हमसे संपर्क करें</h2>
            <div className="blcokemail">
      <label>नाम</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ईमेल</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>फ़ोन नंबर</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="भेजें" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>हमारे बारे में</h1>
            <p>यूनिक्सोल्यूशंस भारत का नंबर 1 विदेशी करियर सलाहकार है और संभावत: दुनिया का सबसे बड़ा बी2सी इमिग्रेशन कंपनी है। 1999 में स्थापित होने के बाद हमारे 50+ कंपनी के स्वामित्व वाले और प्रबंधित कार्यालय भारत, ऑस्ट्रेलिया, संयुक्त अरब इमारात, संयुक्त राज्य और कनाडा में हैं, और 1500+ कर्मचारी हमारे 1 मिलियन से अधिक ग्राहकों की सेवा करते हैं। हम भारत में लाइसेंस्ड रिक्रूटमेंट एजेंट्स और IATA यात्रा एजेंट्स हैं। हमारी सेवाओं के हिस्से के तौर पर हम प्रत्येक महीने लगभग 1,00,000+ व्यक्तिगत पूछताछ के लिए पर्सनल वन-ऑन-वन सलाहकारी प्रदान करते हैं, जैसे कि प्रवास, अध्ययन और काम की वीज़ा के लिए। हमारे ग्राहकों में से 50% से अधिक शब्द-द्वारा मुंहास्य किए जाते हैं। कोई और कंपनी हमारे तरह विदेशी करियर को समझती नहीं है।</p>
            <button ref={itemsRef}>हमारी सेवाएं</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>हमारी सेवाएं</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>कनाडा</h3>
            <ul>
                <li>आगंतुक वीज़ा</li>
                <li>छात्र वीज़ा और प्रवेश</li>
                <li>काम वीज़ा – FSTP</li>
                <li>व्यापारिक वीज़ा</li>
                <li>पीआर वीज़ा – एक्सप्रेस एंट्री</li>
                <li>पीआर वीज़ा – पीएनपी</li>
            </ul>
            <button onClick={scrollTocontactus}>हमसे संपर्क करें</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>ऑस्ट्रेलिया</h3>
            <ul>
                <li>आगंतुक वीज़ा</li>
                <li>छात्र वीज़ा और प्रवेश</li>
                <li>ग्रेजुएट वर्क वीज़ा</li>
                <li>सबक्लास 189</li>
                <li>TSS वीज़ा</li>
                <li>व्यापारिक वीज़ा</li>
                <li>पीआर वीज़ा – कौशल प्रवासन</li>
            </ul>
            <button onClick={scrollTocontactus}>हमसे संपर्क करें</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>जर्मनी</h3>
            <ul>
                <li>आगंतुक वीज़ा</li>
                <li>छात्र वीज़ा और प्रवेश</li>
                <li>जॉब सीकर वीज़ा</li>
                <li>व्यापारिक वीज़ा</li>
            </ul>
            <button onClick={scrollTocontactus}>हमसे संपर्क करें</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>संयुक्त राज्य अमेरिका</h3>
            <ul>
                <li>आगंतुक वीज़ा</li>
                <li>छात्र वीज़ा और प्रवेश</li>
                <li>काम वीज़ा – FSTP</li>
                <li>व्यापारिक वीज़ा</li>
            </ul>
            <button onClick={scrollTocontactus}>हमसे संपर्क करें</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>संयुक्त राज्य</h3>
            <ul>
                <li>आगंतुक वीज़ा</li>
                <li>छात्र वीज़ा – टियर 4</li>
                <li>काम वीज़ा – स्किल्ड वर्कर</li>
                <li>व्यापारिक वीज़ा</li>
                <li>इनोवेटर वीज़ा</li>
                <li>HPI वीज़ा</li>
            </ul>
            <button onClick={scrollTocontactus}>हमसे संपर्क करें</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>संयुक्त अरब इमारात</h3>
            <ul>
                <li>आगंतुक वीज़ा</li>
                <li>पर्यटन वीज़ा</li>
                <li>काम वीज़ा</li>
                <li>गोल्डन वीज़ा</li>
                <li>ग्रीन वीज़ा</li>
            </ul>
            <button onClick={scrollTocontactus}>हमसे संपर्क करें</button>
          </div>
          </section>
          </section>
        </div>
        <div className="contactustemp1">
          
        </div>
      </div>
    </Fragment>
  );
};

export default Hi;