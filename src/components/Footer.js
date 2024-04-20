import './Footer.css';
import logo from "../images/almaas-transparent.png"


const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <div className='logo-div'>
            <a href='/'> 
            <img
              src={logo}
              width='200px'
              height='auto'
              max-width='100%'
              max-height='100%'
              alt='Logo'
            />
          </a>            </div>

            <div className='footer-container'>
                {/* <h1 className='footer-title'> Almaas Family Home Childcare</h1> */}
                <p className='footer-description'><a href='https://www.google.com/maps/place/Almaas+Family+Childcare/@47.3690973,-122.1280788,15z/data=!4m2!3m1!1s0x0:0xf4355668dfba3d39?sa=X&ved=2ahUKEwj9s5P5puiCAxWVODQIHfqNAUMQ_BJ6BAhIEAA'>25921 161st CT SE Covington, WA 98042 United States </a></p>
                <p className='footer-description'> <a href='mailto:haymuunchildcare22@gmail.com'> <b>haymuunchildcare22@gmail.com</b></a></p>
                <p className='footer-description'> <a href='tel:+12068833462'><b>(206)934-9581</b></a></p>
            </div>
            <div className="copyright">
                <p>Made by <a href="https://qualitydesigns.site/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontWeight: 'bold'}}>Quality Designs</a> || ©{new Date().getFullYear()} Almaas Childcare</p>
            </div>
        </footer>
    
        </>
    );
}

export default Footer;