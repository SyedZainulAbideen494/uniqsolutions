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

const Telugu = (props) => {

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
            <h2 className="nameofweb">అద్వితీయ సమాధానాలు</h2>
            <ul>
              <li><button onClick={scrollToItems}>మా సేవలు</button></li>
              <li><button onClick={scrollToaboutus}>మా గురించి</button></li>
              <li><button onClick={scrollTocontactus}>మమ్మల్ని సంప్రదించండి</button></li>
            </ul>
            <SimpleDropdown/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">ఇండియా నంబర్ 1 విసా మరియు ఎయిర్ ట్రావెల్ సాంస్థలు</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">మా సేవలు</button>
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
              <h2>సలహా ఇచ్చాం</h2>
              <p>10 మిలియన్+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>పరిపాలకులు</h2>
              <p>1999 నుంచి</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>విజయాలు</h2>
              <p>1 మిలియన్</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>మమ్మలు సంప్రదించండి</h2>
            <div className="blcokemail">
      <label>పేరు</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ఇమెయిల్</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ఫోన్ నంబర్</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="పంపు" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>మమ్మలు గురించి</h1>
            <p>అద్వితీయ సమాధానాలు ఇండియాలో సంచలనమైన ఒక B2C విసా కంపెనీ మరియు అనుమతి విచారకులు. 1999 లో స్థాపించబడిన, మా 50+ సంస్థానాలు భారతదేశం, ఆస్త్రేలియా, యూనైటెడ్ అరబ్ ఎమిరేట్స్, యూనైటైడ్ కింగ్డమ్, మరియు కనడా లో ఉన్నాయి, మరియు 1500+ ఉద్యోగారులు 1 మిలియన్ కస్టమర్లకు సర్వీస్ చేస్తున్నాయి. మాకు భారతదేశంలో అనుమతి యాత్రకులు అనుమతి యాత్రకులు అనుమతిగా ఉన్నాయి మరియు పని విసాలకు వ్యక్తిగత ఒకటి-ఒకటి సలహా ఇచ్చబడుతుంది. మా గ్రాహకుల నుండి అధికమైన 50% వార్తల వల్ల వచ్చింది. ఇతర సంస్థలకు మాటీకంటే వద్ద విదేశ కరీయాలను మాకు తెలుసుకోవడం లేదు.</p>
            <button ref={itemsRef}>మా సేవలు</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>మా సేవలు</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>కనడా</h3>
            <ul>
                <li>సందర్శకుల విసా</li>
                <li>విద్యార్థుల విసా & అడ్మిషన్</li>
                <li>విద్యాభ్యాస విసా - FSTP</li>
                <li>వ్యాపార విసా</li>
                <li>PR విసా - ఎక్స్ప్రెస్ ఎంట్రీ</li>
                <li>PR విసా - PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>మమ్మలు సంప్రదించండి</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>ఆస్త్రేలియా</h3>
            <ul>
                <li>సందర్శకుల విసా</li>
                <li>విద్యార్థుల విసా & అడ్మిషన్</li>
                <li>గ్రాజుయట్ వర్క్ విసా</li>
                <li>సబ్క్లాస్ 189</li>
                <li>TSS విసా</li>
                <li>వ్యాపార విసా</li>
                <li>PR విసా - స్కిల్ మైగ్రేషన్</li>
            </ul>
            <button onClick={scrollTocontactus}>మమ్మలు సంప్రదించండి</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>జర్మని</h3>
            <ul>
                <li>సందర్శకుల విసా</li>
                <li>విద్యార్థుల విసా & అడ్మిషన్</li>
                <li>జాబ్ సీకర్ విసా</li>
                <li>వ్యాపార విసా</li>
            </ul>
            <button onClick={scrollTocontactus}>మమ్మలు సంప్రదించండి</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>యునైటైడ్ స్టేట్స్</h3>
            <ul>
                <li>సందర్శకుల విసా</li>
                <li>విద్యార్థుల విసా & అడ్మిషన్</li>
                <li>విద్యాభ్యాస విసా - FSTP</li>
                <li>వ్యాపార విసా</li>
            </ul>
            <button onClick={scrollTocontactus}>మమ్మలు సంప్రదించండి</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>యునైటైడ్ కింగ్డమ్</h3>
            <ul>
                <li>సందర్శకుల విసా</li>
                <li>విద్యార్థు విసా - టియర్ 4</li>
                <li>వేలు విసా - స్కిల్డ్ వర్కర్</li>
                <li>వేలు విసా - వర్కర్</li>
                <li>ఇనోవేటర్ విసా</li>
                <li>HPI విసా</li>
            </ul>
            <button onClick={scrollTocontactus}>మమ్మలు సంప్రదించండి</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>యునైటైడ్ అరబ్ ఎమిరేట్స్</h3>
            <ul>
                <li>సందర్శకుల విసా</li>
                <li>టూరిస్ట్ విసా</li>
                <li>వేలు విసా</li>
                <li>గోల్డెన్ విసా</li>
                <li>గ్రీన్ విసా</li>
            </ul>
            <button onClick={scrollTocontactus}>మమ్మలు సంప్రదించండి</button>
          </div>
          </section>
          </section>
        </div>
        <div className="contactustemp1">
          <footer>
            <h2>మమ్మలు సంప్రదించండి</h2>
            <ul>
              <li>@ఇన్స్టాగ్రామ్</li>
              <li>77665544</li>
              <li>You@gmail.com</li>
            </ul>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Telugu;