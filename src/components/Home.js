import React, { useState, useRef, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './Home.css';
import Gallery from './Gallery';
import emailjs from 'emailjs-com'; 
// import image1 from '../images/image1.jpeg';
// import image2 from '../images/image2.jpeg';
// import image3 from '../images/image4.jpg';
// import image4 from '../images/image5.jpg';
// import image5 from '../images/kid6.jpeg';
// import image6 from '../images/kid5.jpeg';
// import aboutImage from '../images/paint.jpg';
import toddler from '../images/preshool.jpg';
import preschool from '../images/background.jpg';
import programImage from '../images/program1.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Home = () => { 
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [contactMessage, setContactMessage] = useState("");
    const [user_name, setName] = useState(""); 
    const [user_email, setEmail] = useState(""); 
    const [user_phone, setPhone] = useState(""); 
    const [message, setMessage] = useState("");
    const formRef = useRef();

    // const galleryImages = [
    //     { img: image1 },
    //     { img: image2 },
    //     { img: image3 },
    //     { img: image4 },
    //     { img: image5 },
    //     { img: image6 },
    // ]
    

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm("service_j3nyl4v", "template_if9y1uc", formRef.current, "Su2Fj91t8uKmDnkig")
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setFormSubmitted(true);
          setContactMessage("We got your message. Thanks!");
          setTimeout(() => {
            setContactMessage("");
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setFormSubmitted(false);
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);

        }
      );
    };

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgroundImages = [
        programImage,
        toddler,
        preschool,
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); 

        return () => clearInterval(intervalId);
    }, [backgroundImages.length]);

    const titles = [
        "Our goal is to",
        "Quality Learning Center in Kent, WA",
        "Contact US",
    ];

    const subtitles = [
        "Enrich minds",
        "Exploration",
        "&Experience",
    ];

    const descriptions = [
        "We emphasize social, emotional, and intellectual development through",
        "Small family style childcare and preschool center",
        "All Kids welcome",
    ];

    return (
        <>
        {/* banner */}
        <div className="background-slider" style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}>
                <div className="banner-content">
                    <h6>{titles[backgroundIndex]}</h6>
                    <h2>{subtitles[backgroundIndex]}</h2>
                    <p>{descriptions[backgroundIndex]}</p>
                </div>
        </div>

        {/* about the daycare  */}
        <Link to='aboutSection' smooth={true} duration={1000}></Link>
        <Element name='aboutSection'>
            <section className="bigBox">
                <div className="aboutSection">
                    <div className="leftSide"> 
                        {/* <img src={aboutImage} alt='program' /> */}
                        <h1> Lovingcare Childcare </h1>

                        <p>Welcome to Rising Star Academy, a quality learning center located in Olathe, Kansas. We are a small family style childcare and preschool center in a cozy home environment. So, if you feel lost in those large 100-plus "super" centers, not knowing one teacher or child from the next, count on us!</p>
                        <p>Our Preschool program is design to develop knowledge and skill in the social, physical, emotional and cognitive areas. Our goal is to help children develop skills and strategies that will help them learn and establish a foundation for lifelong success in education.</p>
                        <p> We recognize that each child has unique talents, learning styles and personalities. We are committed to working within each child’s comfort zone to ensure optimal social, emotional and educational results.</p>
                        <p> We are dedicated to providing the best care for your child while encouraging an environment filled with fun and education. We offer child care for children ages 12 months and walking to school age. </p>

                        <h2><strong>Highlights/Quick Facts:</strong></h2>
                        <ul>
                            <li>All-Inclusive Tuition including Stretch-n Grow</li>
                            <li>Safe &amp; Secure</li>
                            <li>Developmentally Appropriate Curriculum</li>
                            <li>Nutritious Meals and Snacks</li>
                            <li>Qualified, Caring, and Experienced Staff</li>
                        </ul>

                        <p>Our vision is simple, to be the most nurturing environment for children and the most trusted by parents. Every day, we recommit ourselves to the future by focusing on the needs of our children through age-appropriate activities in a loving and safe setting. Please feel free to contact us to setup a time when you can come tour our facility and meet our staff. We look forward to meeting you and your children.</p>

                        <br className="line"></br>
                    </div>
                    
                    <div className="rightSide">
                        <h3>Latest News</h3>

                        <ul>
                            <li><a href="contact.html" previewlistener="true"><FontAwesomeIcon icon={faBullhorn} color='#11BDD0'/> Enrollment Open Now for 2023-2024. Inquire on the Contact page.</a></li>
                            <li><a href="enrollment.html" previewlistener="true"><FontAwesomeIcon icon={faBullhorn} color='#11BDD0'/> You can download enrollment forms on the Enrollment page.</a></li>
                        </ul>

                    </div>	
                    <br className="line"></br>
                    <div className="underline">&nbsp;</div>
                
                </div>
            </section>
        </Element>

        {/* gallary  */}
        <h1 className='gallery-title'> PHOTO GALLERY</h1>
        {/* <Gallery
            galleryImages={galleryImages}
         /> */}

        {/* programs  */}
        <Link to='servicesSection' smooth={true} duration={1000}></Link>
        <Element name='servicesSection'>
            <div className="programs">
                <div class="programParts"> 
                    <img src={programImage} alt='program' />
                    <div class="bottomText">
                        <h2>Curriculum</h2>
                        <p>Using exploration and discovery as a way of learning, our preschool curriculum enables children to develop confidence, creativity, and lifelong critical thinking skills.</p>
                        <a href="curriculum.html" previewlistener="true">more</a> 
                    </div>
                    <div class="overlayText">
                        <p>We believe that all children are unique and no two children learn in the same way. </p>
                        <h4>LEARNING THROUGH PLAY</h4>
                        <a href="curriculum.html" previewlistener="true">Learn More</a> 
                    </div>
                </div>

                <div class="programParts"> 
                    <img src={programImage} alt='program' />
                    <div class="bottomText">
                        <h2>Programs</h2>
                        <p>Using exploration and discovery as a way of learning, our preschool curriculum enables children to develop confidence, creativity, and lifelong critical thinking skills.</p>
                        <a href="curriculum.html" previewlistener="true">more</a> 
                    </div>
                    <div class="overlayText">
                        <p>We believe that all children are unique and no two children learn in the same way. </p>
                        <h4>LEARNING THROUGH PLAY</h4>
                        <a href="curriculum.html" previewlistener="true">Learn More</a> 
                    </div>
                </div>

                <div class="programParts"> 
                    <img src={programImage} alt='program' />
                    <div class="bottomText">
                        <h2>Enrollment</h2>
                        <p>Using exploration and discovery as a way of learning, our preschool curriculum enables children to develop confidence, creativity, and lifelong critical thinking skills.</p>
                        <a href="curriculum.html" previewlistener="true">more</a> 
                    </div>
                    <div class="overlayText">
                        <p>We believe that all children are unique and no two children learn in the same way. </p>
                        <h4>LEARNING THROUGH PLAY</h4>
                        <a href="curriculum.html" previewlistener="true">Learn More</a> 
                    </div>
                </div>

            </div>
        </Element>

        {/* qualified */}
        <section className='qualified'>
            {/* highliy qualified staff */}
        

        </section>

        {/* testimonials */}
        <section className='testimonials'>
        

        </section>

        {/* location map*/}
        <div class="mapSection">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.553892130882!2d-122.20117122362076!3d47.36210697116839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905ecd6b075e9f%3A0x83873fb6a715bfe6!2s26714%20106th%20Pl%20SE%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1713644343128!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>


        {/* contact us  */}
        <Link to='contactSection' smooth={true} duration={1000}></Link>
        <Element name='contactSection'>
            <section className='contactSection'>

                <div class="rightCBlock">
                    <div class="desc"> 
                        <h1>Get In Touch</h1>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    name='user_name' 
                                    value={user_name} 
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='tel'
                                    placeholder='Phone'
                                    name='user_phone' 
                                    value={user_phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='user_email' 
                                    value={user_email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                            <textarea
                                placeholder='Message'
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            </div>
                            <button className='submit'>Send</button>
                            {formSubmitted && (
                            <h6 className='thank-you-message'>
                                Successful! We'll reach out shortly. Thanks!
                            </h6>
                            )}
                        </form>
                    </div>
                </div>

            </section>
        </Element>
      
    </>
    );
   
}

export default Home;
