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
const Gu = (props) => {

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

  const whatsappNumber = '9739839118'; // તમારો ક્રિયાના વોંટ્સએપ નંબરનો સ્થાનાંતરણ કરો
  const message = 'હલો, આ એક ટેસ્ટ સંદેશ છે!'; // તમારો મોકલ્યો મેસેજ સાથે બદલો

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
            <h2 className="nameofweb">યુનિકસોલ્યૂશન્સ</h2>
            <ul>
              <li><button onClick={scrollToItems}>આમાંની સેવા</button></li>
              <li><button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button></li>
            </ul>
            <SimpleDropdown/><br/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">ભારતનો નં. 1 ઇમિગ્રેશન અને વીઝા કન્સલ્ટન્ટ</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">આમાંની સેવા</button>
              </section>
            </div>
            <div className="temp1head1img">
              <section>
                <img src={banner1}/>
              </section>
            </div>
          </header>
        </div>
        <div className="keystemp1">
          <div className="key1temp1">
            <section>
              <img src={conu}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>કન્સલ્ટ કર્યો</h2>
              <p>10 મિલિયન+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>એક્સપર્ટ્સ</h2>
              <p>1999 થી</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>સફળતાઓ</h2>
              <p>1 મિલિયન</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>અમારા સંપર્ક કરો</h2>
            <div className="blcokemail">
      <label>નામ</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ઇમેઇલ</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>ફોન નંબર</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="મોકલો" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>અમારા વિશે</h1>
            <p>યુનિકસોલ્યૂશન્સ ભારતનો નં. 1 ઓવરસીઝ કેરિયર કન્સલ્ટન્ટ અને સંભાવના તરીકે વિશ્વનું મોટુ B2C ઇમિગ્રેશન કંપની છે. 1999 માં સ્થાપિત થયેલ, અમારા 50+ કંપની માલક અને મેનેજ ઑફિસ ભારત, ઑસ્ટ્રેલિયા, યુનાઇટેડ અરબ ઇમરેટ્સ, યુનાઇટેડ કિંગડમ અને કેનડા માં છે અને 1500+ કર્મચારીઓ 1 મિલિયન ગ્રાહકોને સેવા આપે છે. અમે ભારતમાં લાયસન્સ્ડ રિક્રૂટમેન્ટ એજન્ટ્સ અને IATA માંગે એજન્ટ્સ છીએ. અમારી સેવાઓના ભાગ તરીકે, અમે પ્રતિ મહિને લગભગ 1,00,000+ વ્યક્તિગત પ્રશ્નો માટે વ્યક્તિગત એકમ-એક પ્રમાણે પરામર્શ આપીએ છીએ, માઇગ્રેશન, અધ્યયન અને કામ વીઝા માટે. અમારા ગ્રાહકોમાં સુધી 50% મુકબર મોંહ માંથું આવ્યો છે. અન્ય કોઈ પણ કંપની અમની રીતે વિદેશની કરિયર સમજી શકે છે.</p>
            <button ref={itemsRef}>આમાંની સેવાઓ</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>આમાંની સેવાઓ</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>કેનડા</h3>
            <ul>
                <li>મુલાકાત વીઝા</li>
                <li>વિદ્યાર્થી વીઝા અને પ્રવેશ</li>
                <li>કામ વીઝા - FSTP</li>
                <li>વ્યાપારિક વીઝા</li>
                <li>PR વીઝા - એક્સપ્રેસ એન્ટ્રી</li>
                <li>PR વીઝા - PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>ઑસ્ટ્રેલિયા</h3>
            <ul>
                <li>મુલાકાત વીઝા</li>
                <li>વિદ્યાર્થી વીઝા અને પ્રવેશ</li>
                <li>ગ્રેજ્યુએટ વર્ક વીઝા</li>
                <li>Subclass 189 વીઝા</li>
                <li>TSS વીઝા</li>
                <li>વ્યાપારિક વીઝા</li>
                <li>PR વીઝા - સ્કિલ માઇગ્રેશન</li>
            </ul>
            <button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>જર્મની</h3>
            <ul>
                <li>મુલાકાત વીઝા</li>
                <li>વિદ્યાર્થી વીઝા અને પ્રવેશ</li>
                <li>જોબ શીકરો વીઝા</li>
                <li>વ્યાપારિક વીઝા</li>
            </ul>
            <button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>યુએએ</h3>
            <ul>
                <li>મુલાકાત વીઝા</li>
                <li>વિદ્યાર્થી વીઝા અને પ્રવેશ</li>
                <li>કામ વીઝા - FSTP</li>
                <li>વ્યાપારિક વીઝા</li>
            </ul>
            <button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>યુનાઇટેડ કિંગડમ</h3>
            <ul>
                <li>મુલાકાત વીઝા</li>
                <li>વિદ્યાર્થી વીઝા - ટિયર 4</li>
                <li>કામ વીઝા - સ્કિલ્ડ વર્કર</li>
                <li>વ્યાપારિક વીઝા</li>
                <li>ઇનોવેટર વીઝા</li>
                <li>HPI વીઝા</li>
            </ul>
            <button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>યુનાઇટેડ અરબ ઇમરેટ્સ</h3>
            <ul>
                <li>મુલાકાત વીઝા</li>
                <li>પર્યાટન વીઝા</li>
                <li>કામ વીઝા</li>
                <li>ગોલ્ડન વીઝા</li>
                <li>ગ્રીન વીઝા</li>
            </ul>
            <button onClick={scrollTocontactus}>અમારા સંપર્ક કરો</button>
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

export default Gu;