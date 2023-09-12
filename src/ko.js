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

const Ko = (props) => {

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
  const message = '안녕하세요, 이것은 테스트 메시지입니다!'; // Replace with your desired message

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
              <li><button onClick={scrollToItems}>우리의 서비스</button></li>
              <li><button onClick={scrollToaboutus}>회사 소개</button></li>
              <li><button onClick={scrollTocontactus}>문의하기</button></li>
            </ul>
            <SimpleDropdown/>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">인도 최고의 이민 및 비자 컨설턴트</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">우리의 서비스</button>
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
              <h2>상담</h2>
              <p>1000만 명 이상</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>전문가</h2>
              <p>1999년 이후</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>성과</h2>
              <p>100만 명 이상</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>문의하기</h2>
            <div className="blcokemail">
      <label>이름</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>이메일</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>전화번호</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="보내기" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>회사 소개</h1>
            <p>Uniqsolutions은 인도 최고의 해외 이민 컨설턴트이자 아마도 세계에서 가장 큰 B2C 이민 회사입니다. 1999년 설립된 이후 인도, 호주, 아랍 에미리트, 영국, 캐나다에 50개 이상의 회사 소유 및 운영 사무실과 1500명 이상의 직원이 100만 명 이상의 고객에게 서비스를 제공하고 있습니다. 우리는 인도에서 라이센스를 받은 채용 에이전트이자 IATA 여행 에이전트입니다. 우리의 서비스 일환으로 매월 이민, 학업 및 근로 비자에 대한 약 10만 건의 개별 문의에 대한 개인 상담을 제공합니다. 우리 고객의 50% 이상은 워드 오브 마우스를 통해 찾아옵니다. 우리와 같이 외국에서의 경력을 이해하는 다른 회사가 없습니다.</p>
            <button ref={itemsRef}>우리의 서비스</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>우리의 서비스</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>캐나다</h3>
            <ul>
                <li>방문자 비자</li>
                <li>학생 비자 및 입학</li>
                <li>근로 비자 – FSTP</li>
                <li>비즈니스 비자</li>
                <li>영주권 비자 – 익스프레스 엔트리</li>
                <li>영주권 비자 – PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>문의하기</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>호주</h3>
            <ul>
                <li>방문자 비자</li>
                <li>학생 비자 및 입학</li>
                <li>대학원 연구 비자</li>
                <li>서브클래스 189</li>
                <li>TSS 비자</li>
                <li>비즈니스 비자</li>
                <li>영주권 비자 – 스킬 이민</li>
            </ul>
            <button onClick={scrollTocontactus}>문의하기</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>독일</h3>
            <ul>
                <li>방문자 비자</li>
                <li>학생 비자 및 입학</li>
                <li>직업 구직자 비자</li>
                <li>비즈니스 비자</li>
            </ul>
            <button onClick={scrollTocontactus}>문의하기</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>미국</h3>
            <ul>
                <li>방문자 비자</li>
                <li>학생 비자 및 입학</li>
                <li>근로 비자 – FSTP</li>
                <li>비즈니스 비자</li>
            </ul>
            <button onClick={scrollTocontactus}>문의하기</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>영국</h3>
            <ul>
                <li>방문자 비자</li>
                <li>학생 비자 – 티어 4</li>
                <li>근로 비자 – 스킬드 워커</li>
                <li>비즈니스 비자</li>
                <li>이노베이터 비자</li>
                <li>HPI 비자</li>
            </ul>
            <button onClick={scrollTocontactus}>문의하기</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>아랍 에미리트</h3>
            <ul>
                <li>방문자 비자</li>
                <li>관광 비자</li>
                <li>근로 비자</li>
                <li>골든 비자</li>
                <li>그린 비자</li>
            </ul>
            <button onClick={scrollTocontactus}>문의하기</button>
          </div>
          </section>
          </section>
        </div>
        <div className="contactustemp1">
          <footer>
            <h2>문의하기</h2>
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

export default Ko;