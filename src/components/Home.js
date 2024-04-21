import React, { useState, useRef, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './Home.css';
import emailjs from 'emailjs-com'; 
import certifiedImage from '../images/statecertified.png';
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
        "Our Mission",
        "Creative Learning Environment",
        "Whole-Child Approach",
    ];

    const subtitles = [
        "Enrichment",
        "Discovery",
        "Experience",
    ];

    const descriptions = [
        "At our daycare, we focus on nurturing children's growth and development in a supportive and caring environment.",
        "We provide a creative learning environment where children can explore, imagine, and create.",
        "We take a holistic approach to early learning, supporting children's social, emotional, and physical development.",
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

                        <p>Welcome to Lovingcare Childcare, a nurturing and supportive learning environment for children in Kent, WA. We pride ourselves on providing high-quality childcare and preschool services in a warm and inviting atmosphere.</p>
                        <p>At Lovingcare Childcare, we believe in fostering a love for learning through play-based activities and hands-on experiences. Our dedicated team of educators focuses on nurturing each child's individual interests, talents, and learning styles.</p>
                        <p>We are committed to promoting social, emotional, and cognitive development in children, helping them build confidence and independence. With our comprehensive curriculum and engaging learning opportunities, we strive to prepare children for success in school and in life.</p>
                        <p>Come join us at Lovingcare Childcare, where every child is valued, supported, and encouraged to reach their full potential.</p>
                        <h2><strong>Highlights/Quick Facts:</strong></h2>
                        <ul>
                            <li>Comprehensive and Affordable Tuition</li>
                            <li>Safe &amp; Secure</li>
                            <li>Engaging and Developmentally Appropriate Curriculum</li>
                            <li>Healthy and Nutritious Meals and Snacks Provided Daily</li>
                            <li>Qualified, Caring, and Experienced Staff</li>
                        </ul>

                        <p>At Lovingcare Childcare, our vision is clear: to create the most nurturing environment for children, earning the trust of parents each day. We are dedicated to meeting the individual needs of every child through age-appropriate activities in a loving and secure setting. We invite you to schedule a tour of our facility to meet our staff and experience our welcoming atmosphere firsthand. We can't wait to welcome you and your children!</p>

                        <br className="line"></br>
                    </div>
                    
                    <div className="rightSide">
                        <h3>Latest News</h3>

                        <ul>
                            <li><a href="contact.html" previewlistener="true"><FontAwesomeIcon icon={faBullhorn} color='#11BDD0'/> Enrollment Open Now for 2023-2024. Contact us Now!!</a></li>
                            <li><a href="enrollment.html" previewlistener="true"><FontAwesomeIcon icon={faBullhorn} color='#11BDD0'/> You can now download enrollment forms on our page.</a></li>
                        </ul>

                    </div>	
                    <br className="line"></br>
                    <div className="underline">&nbsp;</div>
                
                </div>
            </section>
        </Element>


        {/* qualified */}
        <section className='qualified'>
            <div className="container">
                <div className="parts">
                    <p class="black_text"><span>State</span>  <img src={certifiedImage} alt='program' /></p>
                    <h3>Licensed &amp;</h3>
                    <h5>Certified</h5>
                    <p class="left-text">Experience top-quality education in a nurturing <br/>
                        environment for your child, providing both <br/>
                        peace of mind and confidence for parents.</p>
                </div>
                <div className="parts">
                    <h4>Why are we the best place <br/>
                    to learn?
                    </h4>
                    <p> Age-appropriate curriculum</p>
                    <p> Flexible hours and enrollment plans</p>
                    <p> Strict safety policies and CPR/First Aid Certified Staff</p>
                    <p> Affordable Tuition with Convenient Payment Options</p>
                    <p> Healthy Meals and Snacks Provided Daily</p>
                    <p> <a href="about.html" previewlistener="true">Learn more about us</a></p>
                </div>
            </div>
        
        </section>
        
        {/* programs  */}
        <Link to='servicesSection' smooth={true} duration={1000}></Link>
        <Element name='servicesSection'>
            <section className="programs">
                <div class="programParts"> 
                    <img src={programImage} alt='program' />
                    <div class="bottomText">
                        <h2>Curriculum</h2>
                        <p>Our dynamic curriculum encourages exploration and fosters a love for learning, guiding children on a journey of discovery and growth.</p>                        
                        <a href="curriculum.html" previewlistener="true">Learn more</a> 
                    </div>
                    <div class="overlayText">
                        <p>We believe in nurturing the individual strengths and interests of every child, providing them with a solid foundation for future success.</p>
                        <h4>LEARNING THROUGH PLAY</h4>
                        <a href="curriculum.html" previewlistener="true">Learn More</a> 
                    </div>
                </div>

                <div class="programParts"> 
                    <img src={programImage} alt='program' />
                    <div class="bottomText">
                        <h2>Programs</h2>
                        <p>Our programs are designed to inspire curiosity and creativity, offering enriching experiences that spark imagination and discovery.</p>                        
                        <a href="curriculum.html" previewlistener="true">Learn more</a> 
                    </div>
                    <div class="overlayText">
                        <p>Offering Programs for Toddlers, Preschool, and School-Age, .</p>
                        <h4>Discover Now!</h4>
                        <a href="curriculum.html" previewlistener="true">Learn More</a> 
                    </div>
                </div>

                <div class="programParts"> 
                    <img src={programImage} alt='program' />
                    <div class="bottomText">
                        <h2>Enrollment</h2>
                        <p>Our enrollment process is seamless and personalized, ensuring that families feel welcomed and supported as they join our Lovingcare Childcare community.</p>
                        <a href="curriculum.html" previewlistener="true">Learn more</a> 
                    </div>
                    <div class="overlayText">
                        <p>We are now accepting enrollment applications for all ages.</p>
                        <h4>Enroll Now!</h4>
                        <a href="curriculum.html" previewlistener="true">Enroll Now</a> 
                    </div>
                </div>

            </section>
        </Element>

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
