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
const Deu = (props) => {

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

  const whatsappNumber = '9739839118'; // Ersetzen Sie dies durch Ihre gewünschte WhatsApp-Nummer
  const message = 'Hallo, dies ist eine Testnachricht!'; // Ersetzen Sie dies durch Ihre gewünschte Nachricht

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
            <h2 className="nameofweb">Uniqsolutions</h2>
            <ul>
              <li><button onClick={scrollToItems}>Unsere Dienstleistungen</button></li>
              <li><button onClick={scrollTocontactus}>Kontaktiere uns</button></li>
            </ul>
            <SimpleDropdown/><br/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">INDIENS NR. 1 EINWANDERUNGS- UND VISUMBERATER</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">Unsere Dienstleistungen</button>
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
              <h2>Beraten</h2>
              <p>Über 10 Millionen+</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>Experten</h2>
              <p>Seit 1999</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>Erfolge</h2>
              <p>1 Million</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>Kontaktiere uns</h2>
            <div className="blcokemail">
      <label>Name</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>E-Mail</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>Telefonnummer</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="Senden" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>Über uns</h1>
            <p>Uniqsolutions ist Indiens Nummer 1 Übersee-Karriereberatung und wahrscheinlich das weltweit größte B2C-Einwanderungsunternehmen. Gegründet im Jahr 1999, betreiben unsere über 50 unternehmenseigenen und -geführten Büros in Indien, Australien, den Vereinigten Arabischen Emiraten, dem Vereinigten Königreich und Kanada mit mehr als 1500 Mitarbeitern über 1 Million Kunden. Wir sind lizenzierte Rekrutierungsagenten in Indien und IATA-Reisebüros. Als Teil unserer Dienstleistungen bieten wir persönliche Einzelberatung für etwa 100.000 individuelle Anfragen jeden Monat für Migration, Studium und Arbeit an. Über 50% unserer Kunden kommen durch Mundpropaganda zu uns. Kein anderes Unternehmen versteht Überseekarrieren so gut wie wir.</p>
            <button ref={itemsRef}>Unsere Dienstleistungen</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>Unsere Dienstleistungen</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>Kanada</h3>
            <ul>
                <li>Besuchervisum</li>
                <li>Studentenvisum und Zulassung</li>
                <li>Arbeitsvisum - FSTP</li>
                <li>Geschäftsvisum</li>
                <li>PR-Visum - Express Entry</li>
                <li>PR-Visum - PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>Kontaktiere uns</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>Australien</h3>
            <ul>
                <li>Besuchervisum</li>
                <li>Studentenvisum und Zulassung</li>
                <li>Absolventen-Arbeitsvisum</li>
                <li>Subclass 189 Visum</li>
                <li>TSS Visum</li>
                <li>Geschäftsvisum</li>
                <li>PR-Visum - Skill Migration</li>
            </ul>
            <button onClick={scrollTocontactus}>Kontaktiere uns</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>Deutschland</h3>
            <ul>
                <li>Besuchervisum</li>
                <li>Studentenvisum und Zulassung</li>
                <li>Job-Suchender-Visum</li>
                <li>Geschäftsvisum</li>
            </ul>
            <button onClick={scrollTocontactus}>Kontaktiere uns</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>USA</h3>
            <ul>
                <li>Besuchervisum</li>
                <li>Studentenvisum und Zulassung</li>
                <li>Arbeitsvisum - FSTP</li>
                <li>Geschäftsvisum</li>
            </ul>
            <button onClick={scrollTocontactus}>Kontaktiere uns</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>Vereinigtes Königreich</h3>
            <ul>
                <li>Besuchervisum</li>
                <li>Studentenvisum - Tier 4</li>
                <li>Arbeitsvisum - Fachkraft</li>
                <li>Geschäftsvisum</li>
                <li>Innovator-Visum</li>
                <li>HPI-Visum</li>
            </ul>
            <button onClick={scrollTocontactus}>Kontaktiere uns</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>Vereinigte Arabische Emirate</h3>
            <ul>
                <li>Besuchervisum</li>
                <li>Touristenvisum</li>
                <li>Arbeitsvisum</li>
                <li>Golden Visa</li>
                <li>Grünes Visum</li>
            </ul>
            <button onClick={scrollTocontactus}>Kontaktiere uns</button>
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

export default Deu;
