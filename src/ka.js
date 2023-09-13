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
const Ka = (props) => {

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

  const whatsappNumber = '9739839118'; // ನಿಮ್ಮ ಇಚ್ಛಿಸುವ ವಾಟ್ಸ್ಯಾಪ್ ಸಂಖ್ಯೆಯನ್ನು ಬದಲಾಯಿಸಿ
  const message = 'ನಮಸ್ಕಾರ, ಇದು ಒಂದು ಪರೀಕ್ಷೆ ಸಂದೇಶವಾಗಿದೆ!'; // ನಿಮ್ಮ ಇಚ್ಛಿತ ಸಂದೇಶಕ್ಕಾಗಿ ಬದಲಾಯಿಸಿ

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  const SimpleDropdown = () => {
    const languageOptions = [
      {code: 'en', name: 'language'},
      {code: '', name: 'english'},
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
            <h2 className="nameofweb">ಅನಿಕ್ಸೊಲ್ಯೂಷನ್ಸ್</h2>
            <ul>
              <li><button onClick={scrollToItems}>ನಮ್ಮ ಸೇವೆಗಳು</button></li>
              <li><button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button></li>
            </ul>
            <SimpleDropdown/><br/>
            
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">ಭಾರತದ ಸಂಖ್ಯಾ 1 ಇಮಿಗ್ರೇಶನ್ ಮತ್ತು ವಿಸಾ ಸಲಹಾಗಾರ</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">ನಮ್ಮ ಸೇವೆಗಳು</button>
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
              <h2>ಸಲಹಾಗಾರ</h2>
              <p>10 ಲಕ್ಷ+ ಜನ</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>ನಿಪುಣರು</h2>
              <p>1999 ರಿಂದ</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>ಯಶಸ್ಸುಗಳು</h2>
              <p>1 ಲಕ್ಷ+ ಯಶಸ್ಸುಗಳು</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h2>
            <div className="blcokemail">
      <label>ಹೆಸರು</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ಇಮೇಲ್</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ಫೋನ್ ನಂಬರ್</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="ಕಳುಹಿಸಿ" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>ನಮ್ಮ ಬಗ್ಗೆ</h1>
            <p>ಯೂನಿಕ್ಸೊಲ್ಯೂಷನ್ಸ್ ಭಾರತದ ಸಂಖ್ಯಾ 1 ವಿದೇಶಾಂಗ ಕೆರಿಯರ್ ಸಲಹಾಗಾರ ಆಗಿದೆ ಮತ್ತು ಸಾಯದ ವ್ಯಕ್ತಿಗಳ ಸಂಖ್ಯೆಯ ದೃಷ್ಟಿಯಿಂದ ವಿಶ್ವದಲ್ಲೂ ಅತ್ಯಂತ ದೊಡ್ಡ B2C ಇಮಿಗ್ರೇಶನ್ ಸಂಸ್ಥೆ ಆಗಿದೆ. 1999 ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾಗಿದೆ, ನಮ್ಮ 50+ ಸ್ವಂತ ಆಯ್ಕೆಗಾರ ಮತ್ತು ನಿರ್ವಹಣಾಧಿಕಾರಿ ಕಚೆಗಳು ಭಾರತ, ಆಸ್ಟ್ರೇಲಿಯಾ, ಸಂಯುಕ್ತ ಅರಬ್ ಅಮೀರಾತ್, ಸಂಯುಕ್ತ ರಾಜ್ಯ ಅಮೆರಿಕಾ, ಮತ್ತು ಕೆನಡಾದಲ್ಲಿ 50+ ಸ್ವಂತ ಆಯ್ಕೆಗಾರ ಆಗಿದ್ದಾರೆ ಮತ್ತು 1500+ ಉದ್ಯಮಿ ನೆಮ್ಮದಿಗಳಿಗೆ 1 ಲಕ್ಷ+ ಗ್ರಾಹಕರಿಗೆ ಸೇವೆ ಮಾಡುತ್ತಾರೆ. ನಾವು ಭಾರತದಲ್ಲಿ ಅನುಮತಿತ ನೌಕರಣಿ ಸಂಸ್ಥೆಗಳು ಮತ್ತು IATA ಯಾತ್ರಾ ಏಜೆಂಟ್ಗಳು. ನಮ್ಮ ಸೇವೆಗಳ ಭಾಗವಾಗಿ, ಪ್ರತಿ ತಿಂಗಳು ಸಮನ್ವಯ ಮಾಡಲು ನಮಗೆ ಅನ್ಯಕ್ಕರ ಆದರ ಪಡೆಯುವ ವ್ಯಕ್ತಿಗಳಿಗೆ ವ್ಯಕ್ತಿಗತ ಸಲಹಾಗಾರಿಕೆ ಒದಗಿಸುತ್ತೇವೆ, ಸಂಶೋಧನೆ ಮತ್ತು ಕೆಲಸ ವೀಜಾಗಳಿಗಾಗಿ ಪ್ರತಿ ತಿಂಗಳು ಸಾವಿರಾರು ವ್ಯಕ್ತಿಗಳನ್ನು ವಿಚಾರಿಸುತ್ತೇವೆ. ನಮ್ಮ 50% ಕ್ರಿತಸೂಚಿ ಮೂಲಕವೇ ನಮ್ಮ ಗ್ರಾಹಕರು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ. ಇತಾವಾಚಕ ಸಂಸ್ಥೆ ಇಮಿಗ್ರೇಶನ್ ಗಳನ್ನು ನಾವು ಹೇಗೆ ಅರಿಯುತ್ತೇವೆ ಎಂದು ಇನ್ನೊಂದು ಸಂಸ್ಥೆ ಅರಿಯುವುದಿಲ್ಲ.</p>
            <button ref={itemsRef}>ನಮ್ಮ ಸೇವೆಗಳು</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>ನಮ್ಮ ಸೇವೆಗಳು</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>ಕೆನಡಾ</h3>
            <ul>
                <li>ಆಗಂತುಕ ವಿಸಾ</li>
                <li>ವಿದ್ಯಾರ್ಥಿ ವಿಸಾ ಮತ್ತು ಪ್ರವೇಶ</li>
                <li>ಕಾರ್ಯ ವಿಸಾ – FSTP</li>
                <li>ವ್ಯಾಪಾರಿಕ ವಿಸಾ</li>
                <li>ಪಿಆರ್ ವಿಸಾ – ಎಕ್ಸ್ಪ್ರೆಸ್ ಏಂಟ್ರಿ</li>
                <li>ಪಿಆರ್ ವಿಸಾ – ಪಿಎನ್‌ಪಿ</li>
            </ul>
            <button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>ಆಸ್ಟ್ರೇಲಿಯಾ</h3>
            <ul>
                <li>ಆಗಂತುಕ ವಿಸಾ</li>
                <li>ವಿದ್ಯಾರ್ಥಿ ವಿಸಾ ಮತ್ತು ಪ್ರವೇಶ</li>
                <li>ಗ್ರಾಜುಯೇಟ್ ವರ್ಕ್ ವಿಸಾ</li>
                <li>ಸಬ್‌ಕ್ಲಾಸ್ ೧೮೯</li>
                <li>TSS ವಿಸಾ</li>
                <li>ವ್ಯಾಪಾರಿಕ ವಿಸಾ</li>
                <li>ಪಿಆರ್ ವಿಸಾ – ಸ್ಕಿಲ್ ಮೈಗ್ರೇಷನ್</li>
            </ul>
            <button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>ಜರ್ಮನಿ</h3>
            <ul>
                <li>ಆಗಂತುಕ ವಿಸಾ</li>
                <li>ವಿದ್ಯಾರ್ಥಿ ವಿಸಾ ಮತ್ತು ಪ್ರವೇಶ</li>
                <li>ಜಾಬ್ ಶಿಕ್ಷಕ ವಿಸಾ</li>
                <li>ವ್ಯಾಪಾರಿಕ ವಿಸಾ</li>
            </ul>
            <button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನಗಳು</h3>
            <ul>
                <li>ಆಗಂತುಕ ವಿಸಾ</li>
                <li>ವಿದ್ಯಾರ್ಥಿ ವಿಸಾ ಮತ್ತು ಪ್ರವೇಶ</li>
                <li>ಕಾರ್ಯ ವಿಸಾ – FSTP</li>
                <li>ವ್ಯಾಪಾರಿಕ ವಿಸಾ</li>
            </ul>
            <button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>ಯುನೈಟೆಡ್ ಕಿಂಗ್ಡಮ್</h3>
            <ul>
                <li>ಆಗಂತುಕ ವಿಸಾ</li>
                <li>ವಿದ್ಯಾರ್ಥಿ ವಿಸಾ – ಟಿಯರ್ 4</li>
                <li>ಕಾರ್ಯ ವಿಸಾ – ಸ್ಕಿಲ್ಡ್ ವರ್ಕರ್</li>
                <li>ವ್ಯಾಪಾರಿಕ ವಿಸಾ</li>
                <li>ಇನ್ನೊಂದು ಮಾನ್ಯತಾ ವಿಸಾ</li>
                <li>ಹೆಚ್‌ಪಿಯ್‌ಆಯ್ ವಿಸಾ</li>
            </ul>
            <button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>ಸಂಯುಕ್ತ ಅರಬ್ ಅಮೀರಾತ್</h3>
            <ul>
                <li>ಆಗಂತುಕ ವಿಸಾ</li>
                <li>ಪರ್ಯಟನಾ ವಿಸಾ</li>
                <li>ಕಾರ್ಯ ವಿಸಾ</li>
                <li>ಗೋಲ್ಡನ್ ವಿಸಾ</li>
                <li>ಗ್ರೀನ್ ವಿಸಾ</li>
            </ul>
            <button onClick={scrollTocontactus}>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</button>
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

export default Ka;