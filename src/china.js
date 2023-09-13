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
const China = (props) => {

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

  const whatsappNumber = '9739839118'; // 请替换为您的 WhatsApp 号码
  const message = '你好，这是一条测试消息！'; // 请替换为您的消息

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
              <li><button onClick={scrollToItems}>我们的服务</button></li>
              <li><button onClick={scrollTocontactus}>联系我们</button></li>
            </ul>
            <SimpleDropdown/><br/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">印度第一移民和签证咨询顾问</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">我们的服务</button>
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
              <h2>咨询</h2>
              <p>超过1000万</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>专家</h2>
              <p>自1999年以来</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>成功案例</h2>
              <p>超过100万</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>联系我们</h2>
            <div className="blcokemail">
      <label>姓名</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>电子邮件</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>电话号码</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="发送" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>关于我们</h1>
            <p>Uniqsolutions 是印度的第一海外职业顾问公司，也可能是全球最大的B2C移民公司。成立于1999年，我们在印度、澳大利亚、阿联酋、英国和加拿大拥有50多家自营和管理的公司办事处，拥有1500多名员工，为100多万名客户提供服务。我们是印度的持牌招聘代理和IATA旅行代理。作为我们服务的一部分，我们每月为超过10万个个人咨询提供个人一对一咨询，涵盖移民、学习和工作签证。超过50%的客户通过口口相传来找到我们。没有其他公司像我们一样了解海外职业。</p>
            <button ref={itemsRef}>我们的服务</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner2}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>我们的服务</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>加拿大</h3>
            <ul>
                <li>访客签证</li>
                <li>学生签证和入学</li>
                <li>工作签证 - FSTP</li>
                <li>商务签证</li>
                <li>永久居民签证 - 快速通道</li>
                <li>永久居民签证 - PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>联系我们</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>澳大利亚</h3>
            <ul>
                <li>访客签证</li>
                <li>学生签证和入学</li>
                <li>研究生工作签证</li>
                <li>Subclass 189签证</li>
                <li>TSS签证</li>
                <li>商务签证</li>
                <li>永久居民签证 - 技术移民</li>
            </ul>
            <button onClick={scrollTocontactus}>联系我们</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>德国</h3>
            <ul>
                <li>访客签证</li>
                <li>学生签证和入学</li>
                <li>求职者签证</li>
                <li>商务签证</li>
            </ul>
            <button onClick={scrollTocontactus}>联系我们</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>美国</h3>
            <ul>
                <li>访客签证</li>
                <li>学生签证和入学</li>
                <li>工作签证 - FSTP</li>
                <li>商务签证</li>
            </ul>
            <button onClick={scrollTocontactus}>联系我们</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>英国</h3>
            <ul>
                <li>访客签证</li>
                <li>学生签证 - Tier 4</li>
                <li>工作签证 - 技术工人</li>
                <li>商务签证</li>
                <li>创新家签证</li>
                <li>HPI签证</li>
            </ul>
            <button onClick={scrollTocontactus}>联系我们</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>阿联酋</h3>
            <ul>
                <li>访客签证</li>
                <li>旅游签证</li>
                <li>工作签证</li>
                <li>黄金签证</li>
                <li>绿色签证</li>
            </ul>
            <button onClick={scrollTocontactus}>联系我们</button>
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

export default China;