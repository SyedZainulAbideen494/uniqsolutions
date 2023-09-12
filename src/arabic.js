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

const Arabic = (props) => {

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
  const message = 'مرحبًا، هذه رسالة اختبار!'; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };


  return (
    <Fragment>
      <div className="maindivtemp1">
        <div className="temp1head2">
          <header>
            <h2 className="nameofweb">حلول فريدة</h2>
            <ul>
              <li><button onClick={scrollToItems}>خدماتنا</button></li>
              <li><button onClick={scrollToaboutus}>عنا</button></li>
              <li><button onClick={scrollTocontactus}>اتصل بنا</button></li>
            </ul>
          </header>
        </div>
        <div className="header2temp1">
          <header>
            <div className="temp1headtextsection">
              <section>
              <h1 className="slaestexttemp1">أفضل مستشار للهجرة والتأشيرات في الهند</h1>
              <button onClick={scrollToItems} className="btnb2bc2p">خدماتنا</button>
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
              <h2>تم توجيه</h2>
              <p>أكثر من 10 ملايين شخص</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={ex}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>خبراء</h2>
              <p>منذ عام 1999</p>
            </section>
          </div>
          <div className="key1temp1">
            <section>
              <img src={succ}/>
            </section>
            <section className="textsectiontemp1key1">
              <h2>نجاحات</h2>
              <p>أكثر من مليون نجاح</p>
            </section>
          </div>
        </div>
        <div className="contactfrom" ref={contactusRef}>
        <form ref={form} onSubmit={sendEmail}>
            <h2>اتصل بنا</h2>
            <div className="blcokemail">
      <label>الاسم</label><br/>
      <input type="text" name="from_name" className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>البريد الإلكتروني</label><br/>
      <input type="email" name="to_name"  className="norminp"/><br/>
      </div>
      <div className="blcokemail">
      <label>رقم الهاتف</label><br/>
      <input name="message" className="norminp"/><br/>
      </div>
      <input type="submit" value="إرسال" className="btninpemail"/><br/>
      <button onClick={handleWhatsAppClick} className="whatsappbtn">WhatsApp</button>
    </form>
        </div>
        <div className="ourcomapnytypetemp1">
          <section className="ourcompanytypetexttemp1head">
            <h1>عنا</h1>
            <p>حلول فريدة هي أحد أكبر شركات الهجرة والتأشيرات B2C في الهند وربما أكبر شركة في العالم. تأسست في عام 1999، وتخدم أكثر من مليون عميل من خلال أكثر من 50 مكتبًا تملكها وتديرها الشركة في جميع أنحاء الهند، أستراليا، الإمارات العربية المتحدة، المملكة المتحدة، وكندا، بالإضافة إلى أكثر من 1500 موظف. نحن وكلاء توظيف مرخصون في الهند ووكلاء سفر IATA. كجزء من خدماتنا، نقدم استشارات فردية واحدة إلى حوالي 100,000+ استفسار فردي شهريًا بخصوص الهجرة، الدراسة، وتأشيرات العمل. أكثر من 50% من عملائنا يأتون من خلال النصيحة الشفهية. لا توجد شركة أخرى تفهم مسارات الهجرة الخارجية مثلنا.</p>
            <button ref={itemsRef}>خدماتنا</button>
          </section>
          <section className="imgtypecomplaytemp1">
            <img src={banner}/>
          </section>
        </div>
        <div className="ourservicestemp1" ref={itemsRef}>
          <h1>خدماتنا</h1>
          <section className="allserv">
          <section className="servsec1">
          <div className="sevices1">
            <img src={canada}/>
            <h3>كندا</h3>
            <ul>
                <li>تأشيرة زائر</li>
                <li>تأشيرة الطالب والقبول</li>
                <li>تأشيرة العمل – FSTP</li>
                <li>تأشيرة الأعمال</li>
                <li>تأشيرة الإقامة الدائمة – Express Entry</li>
                <li>تأشيرة الإقامة الدائمة – PNP</li>
            </ul>
            <button onClick={scrollTocontactus}>اتصل بنا</button>
          </div>
          <div className="sevices1">
            <img src={Aus}/>
            <h3>أستراليا</h3>
            <ul>
                <li>تأشيرة زائر</li>
                <li>تأشيرة الطالب والقبول</li>
                <li>تأشيرة العمل للخريجين</li>
                <li>تأشيرة الإقامة الدائمة - Subclass 189</li>
                <li>تأشيرة TSS</li>
                <li>تأشيرة الأعمال</li>
                <li>تأشيرة الإقامة الدائمة - هجرة المهارات</li>
            </ul>
            <button onClick={scrollTocontactus}>اتصل بنا</button>
          </div>
          <div className="sevices1">
            <img src={germ}/>
            <h3>ألمانيا</h3>
            <ul>
                <li>تأشيرة زائر</li>
                <li>تأشيرة الطالب والقبول</li>
                <li>تأشيرة الباحث عن عمل</li>
                <li>تأشيرة الأعمال</li>
            </ul>
            <button onClick={scrollTocontactus}>اتصل بنا</button>
          </div>
          </section>
          <section className="sersec2">
          <div className="sevices1">
            <img src={USA}/>
            <h3>الولايات المتحدة</h3>
            <ul>
                <li>تأشيرة زائر</li>
                <li>تأشيرة الطالب والقبول</li>
                <li>تأشيرة العمل – FSTP</li>
                <li>تأشيرة الأعمال</li>
            </ul>
            <button onClick={scrollTocontactus}>اتصل بنا</button>
          </div>
          <div className="sevices1">
            <img src={uk}/>
            <h3>المملكة المتحدة</h3>
            <ul>
                <li>تأشيرة زائر</li>
                <li>تأشيرة الطالب – الطبقة 4</li>
                <li>تأشيرة العمل – العامل المهرة</li>
                <li>تأشيرة الأعمال</li>
                <li>تأشيرة المبتكر</li>
                <li>تأشيرة HPI</li>
            </ul>
            <button onClick={scrollTocontactus}>اتصل بنا</button>
          </div>
          <div className="sevices1">
            <img src={uae}/>
            <h3>الإمارات</h3>
            <ul>
                <li>تأشيرة زائر</li>
                <li>تأشيرة سياحية</li>
                <li>تأشيرة العمل</li>
                <li>تأشيرة ذهبية</li>
                <li>تأشيرة خضراء</li>
            </ul>
            <button onClick={scrollTocontactus}>اتصل بنا</button>
          </div>
          </section>
          </section>
        </div>
        <div className="contactustemp1">
          <footer>
            <h2>اتصل بنا</h2>
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

export default Arabic;