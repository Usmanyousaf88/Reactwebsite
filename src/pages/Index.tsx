import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, Clock, Mail, ArrowRight, ChevronRight, Heart, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Index.module.css';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.scrollProgress}>
        <Progress value={scrollProgress} className="w-full h-1" />
      </div>

      <div className={styles.mouseCursor} style={{ 
        left: `${mousePosition.x}px`, 
        top: `${mousePosition.y}px` 
      }} />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.topSection}
      >
        <div className={styles.infoContainer}>
          <motion.div 
            className={styles.addressInfo}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <MapPin className={styles.icon} />
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Address</h3>
              <p className={styles.infoText}>3840 Winifred Way, Marion</p>
              <p className={styles.infoText}>United States</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.contactInfo}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <Phone className={styles.icon} />
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Contact Us</h3>
              <p className={styles.infoText}>(123) 23456 789</p>
              <p className={styles.infoText}>Open: 09:00 am - 01:00 pm</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.extraInfo}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <Mail className={styles.icon} />
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Email Us</h3>
              <p className={styles.infoText}>info@earls.com</p>
              <p className={styles.infoText}>support@earls.com</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.nav 
        className={styles.navigation}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link to="/" className={styles.logo}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className={styles.logoIcon} />
          </motion.div>
          Earls
        </Link>
        
        <div className={styles.navLinks}>
          {['HOME', 'ABOUT US', 'BLOG', 'PORTFOLIO', 'SHOP', 'CONTACT'].map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className={styles.navLink}>
                {link} <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Welcome to Earls
            <motion.span 
              className={styles.sparkle}
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className={styles.sparkleIcon} />
            </motion.span>
          </motion.h1>

          <motion.p 
            className={styles.heroText}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Discover our exclusive collection and premium services
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className={styles.ctaContainer}
          >
            <Button 
              className={styles.ctaButton}
              onClick={() => toast({
                title: "Welcome to Earls!",
                description: "Thank you for your interest. We'll be in touch soon!",
              })}
            >
              Explore Now <ArrowRight size={16} />
            </Button>

            <motion.div 
              className={styles.awards}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Award className={styles.awardIcon} />
              <Heart className={styles.heartIcon} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.decorativeElements}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className={styles.circle} />
          <div className={styles.square} />
          <div className={styles.triangle} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;