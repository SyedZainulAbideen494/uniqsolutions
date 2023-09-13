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
const Ma = (props) => {

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

  const whatsappNumber = '9739839118'; // आपल्याला आपल्या इच्छित WhatsApp नंबरसह बदला करा
  const message = 'नमस्कार, ही एक चाचणी संदेश आहे!'; // आपल्या इच्छित संदेशासह बदला करा

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
            <h2 className="nameofweb">अनिकसोल्यूशन्स</h2>
            <ul>
              <li><button onClick={scrollToItems}>आमची सेवा</button></li>
              <li><button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button></li>
            </ul>
            <SimpleDropdown/><br/>
            <Link to='/'>
            <button>English</button>
            </Link>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">भारताच्या क्र. 1 इमिग्रेशन आणि व्हिझा सल्लागार</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">आमची सेवा</button>
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
              <h2>सल्लागार</h2>
              <p>१० मिलियन+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>विशेषज्ञ</h2>
              <p>१९९९ पासून</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>यश</h2>
              <p>१ मिलियन+</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>आमच्याशी संपर्क साधा</h2>
            <div className="blcokemail">
      <label>नाव</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ईमेल</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>फोन नंबर</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="पाठवा" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>आमच्याबद्दल</h1>
            <p>यूनिक्सोल्यूशन्स हे भारताच्या क्र. 1 विदेशी करिअर सल्लागार आणि कोणतेही संभाव्यतः जगातील मोठ्या B2C इमिग्रेशन कंपनी आहे. १९९९ मध्ये स्थापित झालेल्या आमच्या 50+ कंपनी उद्योगी आणि संचलित कार्यालये भारत, ऑस्ट्रेलिया, संयुक्त अरब अमीरात, संयुक्त राज्य अमेरिका, आणि कॅनडा येथे आहेत आणि १५००+ कर्मचारी एकमेकांना १ मिलियन+ ग्राहकांसाठी सेवा प्रदान करताना. आपल्याला भारतातील नियोक्ता एजेंट म्हणून मिळवण्याची अनुमती आहे आणि आपल्याला IATA यात्रा एजेंट्स म्हणून काम करण्याची अनुमती आहे. आमच्या सेवेच्या भागाच्या भागात, आम्ही प्रत्येक महिन्याला १,००,०००+ व्यक्तिक विचारांसाठी व्यक्तिगत एक-आपल्याने पर्सनल सल्लागारी प्रदान करतो, मागास्वीकृती आणि काम वीजा साठी. आमच्या ग्राहकांच्या 50% पेक्षा अधिक लोकांनी मातृभाषेतून आम्हाला आणण्याच्या वर्ड-ऑफ-माऊथच्या माध्यमातून पहिल्या आहे. आपल्याला आपल्याच्या इमिग्रेशनसारख्या विदेशातील करिअर्सची समज कोणतीही कंपनी आपल्याला नसते.</p>
            <button ref={itemsRef}>आमची सेवा</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>आमची सेवा</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>कॅनडा</h3>
            <ul>
                <li>आगंतुक वीझा</li>
                <li>शिक्षण वीझा आणि प्रवेश</li>
                <li>काम वीझा – FSTP</li>
                <li>व्यापारिक वीझा</li>
                <li>PR वीझा – एक्सप्रेस एंट्री</li>
                <li>PR वीझा – PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>ऑस्ट्रेलिया</h3>
            <ul>
                <li>आगंतुक वीझा</li>
                <li>शिक्षण वीझा आणि प्रवेश</li>
                <li>पोस्ट ग्रेजुएट काम वीझा</li>
                <li>सबक्लास १८९</li>
                <li>TSS वीझा</li>
                <li>व्यापारिक वीझा</li>
                <li>PR वीझा – कौशलिक माईग्रेशन</li>
            </ul>
            <button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>जर्मनी</h3>
            <ul>
                <li>आगंतुक वीझा</li>
                <li>शिक्षण वीझा आणि प्रवेश</li>
                <li>काम शोधक वीझा</li>
                <li>व्यापारिक वीझा</li>
            </ul>
            <button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>संयुक्त राज्य अमेरिका</h3>
            <ul>
                <li>आगंतुक वीझा</li>
                <li>शिक्षण वीझा आणि प्रवेश</li>
                <li>काम वीझा – FSTP</li>
                <li>व्यापारिक वीझा</li>
            </ul>
            <button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>संयुक्त अंगलेंड</h3>
            <ul>
                <li>आगंतुक वीझा</li>
                <li>शिक्षण वीझा – टियर ४</li>
                <li>काम वीझा – कुशल कर्मचारी</li>
                <li>व्यापारिक वीझा</li>
                <li>इनोवेटर वीझा</li>
                <li>HPI वीझा</li>
            </ul>
            <button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>संयुक्त अरब अमीरात</h3>
            <ul>
                <li>आगंतुक वीझा</li>
                <li>पर्यटन वीझा</li>
                <li>काम वीझा</li>
                <li>गोल्डन वीझा</li>
                <li>ग्रीन वीझा</li>
            </ul>
            <button onClick={scrollTocontactus}>आमच्याशी संपर्क साधा</button>
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

export default Ma;