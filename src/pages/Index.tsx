import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, Clock, Mail, ArrowRight } from 'lucide-react';
import classNames from 'classnames/bind';
import styles from './Index.module.css';
import animations from '../styles/animations.module.css';
import decorations from '../styles/decorations.module.css';

const cx = classNames.bind(styles);
const ax = classNames.bind(animations);
const dx = classNames.bind(decorations);

const Index = () => {
  return (
    <div className={cx('container')}>
      <div className={dx('glowOrb', 'topOrb')} />
      <div className={dx('glowOrb', 'bottomOrb')} />

      <div className={cx('top-section', dx('glassMorphism'))}>
        <div className={cx('info-container')}>
          <div className={cx('address-info', ax('floating'))}>
            <MapPin className={cx('icon')} />
            <div className={cx('info-content', dx('gradientBorder'))}>
              <h3 className={cx('info-title')}>Address</h3>
              <p className={cx('info-text')}>Street: 3840 Winifred Way, Marion,</p>
              <p className={cx('info-text')}>United States</p>
            </div>
          </div>

          <div className={cx('contact-info', ax('floating'))}>
            <Phone className={cx('icon')} />
            <div className={cx('info-content', dx('gradientBorder'))}>
              <h3 className={cx('info-title')}>Contact Us</h3>
              <p className={cx('info-text')}>(123) 23456 789 123 4578 954</p>
              <p className={cx('info-text')}>Open: 09:00 am - 01:00 pm</p>
            </div>
          </div>

          <div className={cx('extra-info', ax('floating'))}>
            <Mail className={cx('icon')} />
            <div className={cx('info-content', dx('gradientBorder'))}>
              <h3 className={cx('info-title')}>Email Us</h3>
              <p className={cx('info-text')}>info@earls.com</p>
              <p className={cx('info-text')}>support@earls.com</p>
            </div>
          </div>
        </div>
      </div>

      <nav className={cx('navigation')}>
        <Link to="/" className={cx('logo', ax('pulsing'))}>
          <Star className={cx('logo-icon', ax('rotating'))} />
          Earls
        </Link>
        
        <div className={cx('nav-links')}>
          <Link to="/" className={cx('nav-link', dx('gradientBorder'))}>
            HOME <ArrowRight size={16} />
          </Link>
          <Link to="/about" className={cx('nav-link', dx('gradientBorder'))}>
            ABOUT US <ArrowRight size={16} />
          </Link>
          <Link to="/blog" className={cx('nav-link', dx('gradientBorder'))}>
            BLOG <ArrowRight size={16} />
          </Link>
          <Link to="/portfolio" className={cx('nav-link', dx('gradientBorder'))}>
            PORTFOLIO <ArrowRight size={16} />
          </Link>
          <Link to="/shop" className={cx('nav-link', dx('gradientBorder'))}>
            SHOP <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className={cx('nav-link', dx('gradientBorder'))}>
            CONTACT <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <div className={cx('hero-section', dx('glassMorphism'))}>
        <div className={cx('hero-content', ax('floating'))}>
          <h1 className={cx('hero-title')}>Welcome to Earls</h1>
          <p className={cx('hero-text')}>Discover our exclusive collection and premium services</p>
          <button className={cx('cta-button', dx('gradientBorder'), ax('pulsing'))}>
            Explore Now <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;