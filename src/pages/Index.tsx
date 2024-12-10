import styles from './Index.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('top-section')}>
        <div className={cx('info-container')}>
          <div className={cx('address-info')}>
            <MapPin className={cx('icon')} />
            <div className={cx('info-content')}>
              <h3 className={cx('info-title')}>Address</h3>
              <p className={cx('info-text')}>Street: 3840 Winifred Way, Marion,</p>
              <p className={cx('info-text')}>United States</p>
            </div>
          </div>

          <div className={cx('contact-info')}>
            <Phone className={cx('icon')} />
            <div className={cx('info-content')}>
              <h3 className={cx('info-title')}>Contact Us</h3>
              <p className={cx('info-text')}>(123) 23456 789 123 4578 954</p>
              <p className={cx('info-text')}>Open: 09:00 am - 01:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      <nav className={cx('navigation')}>
        <div className={cx('logo')}>Earls</div>
        <div className={cx('nav-links')}>
          <Link to="/" className={cx('nav-link')}>HOME</Link>
          <Link to="/about" className={cx('nav-link')}>ABOUT US</Link>
          <Link to="/blog" className={cx('nav-link')}>BLOG</Link>
          <Link to="/portfolio" className={cx('nav-link')}>PORTFOLIO</Link>
          <Link to="/shop" className={cx('nav-link')}>SHOP</Link>
          <Link to="/contact" className={cx('nav-link')}>CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Index;