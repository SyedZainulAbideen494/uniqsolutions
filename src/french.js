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
const French = (props) => {

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
  const message = 'Bonjour, ceci est un message de test !'; // Replace with your desired message

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
              <li><button onClick={scrollToItems}>Nos services</button></li>
              <li><button onClick={scrollTocontactus}>Contactez-nous</button></li>
            </ul>
            <SimpleDropdown/><br/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">LE N°1 EN CONSULTATION EN IMMIGRATION ET VISA EN INDE</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">Nos services</button>
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
              <h2>CONSEILLÉ</h2>
              <p>PLUS DE 10 MILLIONS</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>EXPERTS</h2>
              <p>DEPUIS 1999</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>RÉUSSITES</h2>
              <p>PLUS D'1 MILLION</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>Contactez-nous</h2>
            <div className="blcokemail">
      <label>Nom</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>Email</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>Numéro de téléphone</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="Envoyer" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>À propos de nous</h1>
            <p>Uniqsolutions est le numéro un en Inde en tant que consultant en carrière à l'étranger et probablement la plus grande entreprise de migration B2C au monde. Fondée en 1999, nos 50+ bureaux appartenant à l'entreprise et gérés à travers l'Inde, l'Australie, les Émirats arabes unis, le Royaume-Uni et le Canada avec plus de 1500 employés servent plus d'1 million de clients. Nous sommes des agents de recrutement agréés en Inde et des agents de voyage IATA. Dans le cadre de nos services, nous offrons des conseils personnalisés à plus de 100 000 demandes individuelles chaque mois pour la migration, l'étude et les visas de travail. Plus de 50% de nos clients viennent grâce au bouche-à-oreille. Aucune autre entreprise ne comprend les carrières à l'étranger comme nous le faisons.</p>
            <button ref={itemsRef}>Nos services</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>Nos services</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>Canada</h3>
            <ul>
                <li>Visa de visiteur</li>
                <li>Visa d'étudiant et admission</li>
                <li>Visa de travail - FSTP</li>
                <li>Visa d'affaires</li>
                <li>Visa de résident permanent - Entrée express</li>
                <li>Visa de résident permanent - PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>Contactez-nous</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>Australie</h3>
            <ul>
                <li>Visa de visiteur</li>
                <li>Visa d'étudiant et admission</li>
                <li>Visa de travail pour les diplômés</li>
                <li>Visa Subclass 189</li>
                <li>Visa TSS</li>
                <li>Visa d'affaires</li>
                <li>Visa de résident permanent - Migration des compétences</li>
            </ul>
            <button onClick={scrollTocontactus}>Contactez-nous</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>Allemagne</h3>
            <ul>
                <li>Visa de visiteur</li>
                <li>Visa d'étudiant et admission</li>
                <li>Visa de chercheur d'emploi</li>
                <li>Visa d'affaires</li>
            </ul>
            <button onClick={scrollTocontactus}>Contactez-nous</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>États-Unis</h3>
            <ul>
                <li>Visa de visiteur</li>
                <li>Visa d'étudiant et admission</li>
                <li>Visa de travail - FSTP</li>
                <li>Visa d'affaires</li>
            </ul>
            <button onClick={scrollTocontactus}>Contactez-nous</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>Royaume-Uni</h3>
            <ul>
                <li>Visa de visiteur</li>
                <li>Visa d'étudiant - Tier 4</li>
                <li>Visa de travail - Travailleur qualifié</li>
                <li>Visa d'affaires</li>
                <li>Visa d'innovateur</li>
                <li>Visa HPI</li>
            </ul>
            <button onClick={scrollTocontactus}>Contactez-nous</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>Émirats arabes unis</h3>
            <ul>
                <li>Visa de visiteur</li>
                <li>Visa touristique</li>
                <li>Visa de travail</li>
                <li>Visa doré</li>
                <li>Visa vert</li>
            </ul>
            <button onClick={scrollTocontactus}>Contactez-nous</button>
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

export default French;