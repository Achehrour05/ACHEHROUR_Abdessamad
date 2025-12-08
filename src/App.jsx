import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Plasma from './components/Plasma'

function App() {
  const navigate = useNavigate()

  // Disable scrolling on mount
  useEffect(() => {
    // Store original scroll position
    const scrollY = window.scrollY;
    
    // Prevent all scroll events
    const preventDefault = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const preventScroll = (e) => {
      if (e.type === 'wheel') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      if (e.type === 'touchmove') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Prevent wheel scrolling
    window.addEventListener('wheel', preventScroll, { passive: false, capture: true });
    // Prevent touch scrolling
    window.addEventListener('touchmove', preventScroll, { passive: false, capture: true });
    // Prevent scroll event
    window.addEventListener('scroll', preventDefault, { passive: false, capture: true });
    // Prevent keyboard scrolling
    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { passive: false });

    // Force no scroll on html and body
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.documentElement.style.position = 'fixed';
    document.documentElement.style.width = '100%';
    document.documentElement.style.top = '0';
    document.documentElement.style.left = '0';
    
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Force scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return () => {
      // Remove event listeners
      window.removeEventListener('wheel', preventScroll, { capture: true });
      window.removeEventListener('touchmove', preventScroll, { capture: true });
      window.removeEventListener('scroll', preventDefault, { capture: true });
      
      // Restore styles
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.top = '';
      document.documentElement.style.left = '';
      
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div style={{ 
      height: '100vh', 
      overflow: 'hidden', 
      width: '100%', 
      position: 'relative',
      maxHeight: '100vh'
    }}>
      {/* Fixed Plasma Background for entire page */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: '#000'
      }}>
        <Plasma
          color="#B19EEF"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Certifications Button - Top Left Corner */}
      <button
        onClick={() => navigate('/certifications')}
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          border: 'none',
          background: 'transparent',
          color: '#fff',
          fontSize: '1.2rem',
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          cursor: 'pointer',
          zIndex: 100,
          outline: 'none',
          transition: 'opacity 0.3s ease',
          opacity: 0.8
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.8}
      >
        certifications
      </button>

      {/* Info Button - Top Right Corner */}
      <button
        onClick={() => navigate('/info')}
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          width: '40px',
          height: '40px',
          border: 'none',
          background: 'transparent',
          color: '#fff',
          fontSize: '1.2rem',
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          cursor: 'pointer',
          zIndex: 100,
          outline: 'none',
          transition: 'opacity 0.3s ease',
          opacity: 0.8
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.8}
      >
        info
      </button>

      {/* Profile Button - Bottom Right Corner */}
      <button
        onClick={() => navigate('/profile')}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          border: 'none',
          background: 'transparent',
          color: '#fff',
          fontSize: '1.2rem',
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          cursor: 'pointer',
          zIndex: 100,
          outline: 'none',
          transition: 'opacity 0.3s ease',
          opacity: 0.8
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.8}
      >
        profile
      </button>

      {/* Projects Button - Bottom Left Corner */}
      <button
        onClick={() => navigate('/projects')}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          border: 'none',
          background: 'transparent',
          color: '#fff',
          fontSize: '1.2rem',
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          cursor: 'pointer',
          zIndex: 100,
          outline: 'none',
          transition: 'opacity 0.3s ease',
          opacity: 0.8
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.8}
      >
        projects
      </button>

      {/* Content Wrapper */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        height: '100vh',
        overflow: 'hidden',
        width: '100%'
      }}>
        {/* Hero Section */}
        <section style={{
          width: '100%',
          height: '100vh',
          maxHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '1rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
          margin: 0
        }}>
          {/* Professional Header Badge */}
          <div style={{
            fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)',
            fontWeight: '400',
            letterSpacing: '0.2em',
            color: 'rgba(255, 255, 255, 0.4)',
            textTransform: 'uppercase',
            fontFamily: '"Playfair Display", serif',
            marginBottom: '1rem',
            position: 'relative'
          }}>
            <span style={{
              display: 'inline-block',
              width: '30px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              marginRight: '0.8rem',
              verticalAlign: 'middle'
            }} />
            Engineering Student
            <span style={{
              display: 'inline-block',
              width: '30px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              marginLeft: '0.8rem',
              verticalAlign: 'middle'
            }} />
          </div>

          {/* Main Name */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 8vw, 4.5rem)',
            fontWeight: '400',
            letterSpacing: '-0.04em',
            margin: '0',
            color: '#fff',
            fontFamily: '"Playfair Display", serif',
            textShadow: '0 4px 24px rgba(0,0,0,0.7)',
            lineHeight: '1.05',
            marginBottom: '0.3rem'
          }}>
            ACHEHROUR Abdessamad
          </h1>

          {/* Professional Title */}
          <div style={{
            fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)',
            fontWeight: '300',
            letterSpacing: '0.15em',
            color: 'rgba(255, 255, 255, 0.7)',
            textTransform: 'uppercase',
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            marginBottom: '1.2rem',
            marginTop: '0.3rem'
          }}>
            Software Engineer
          </div>

          {/* Professional Divider */}
          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            margin: '0 auto 1.2rem',
            transition: 'width 0.3s ease'
          }} />
          
          {/* Professional Summary - Compact */}
          <div style={{
            maxWidth: '680px',
            marginBottom: '1.5rem'
          }}>
            <p style={{
              fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
              fontWeight: '300',
              letterSpacing: '0.03em',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: '"Playfair Display", serif',
              lineHeight: '1.6',
              margin: '0'
            }}>
              Networks & Information Systems Engineering student specializing in{' '}
              <strong style={{ fontWeight: '400', color: 'rgba(255, 255, 255, 0.95)' }}>AI</strong>,{' '}
              <strong style={{ fontWeight: '400', color: 'rgba(255, 255, 255, 0.95)' }}>Machine Learning</strong>, and{' '}
              <strong style={{ fontWeight: '400', color: 'rgba(255, 255, 255, 0.95)' }}>Full-Stack Development</strong>.
            </p>
          </div>

          {/* Professional Metrics/Stats - Compact */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            maxWidth: '550px',
            marginBottom: '1.5rem',
            width: '100%'
          }}>
            {[
              { label: 'Projects', value: '8+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Certifications', value: '17+' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '0.8rem 0'
              }}>
                <div style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: '400',
                  color: '#fff',
                  fontFamily: '"Playfair Display", serif',
                  marginBottom: '0.3rem',
                  lineHeight: '1'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)',
                  fontWeight: '300',
                  letterSpacing: '0.12em',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Key Expertise Tags - Compact */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            maxWidth: '750px',
            marginTop: '0'
          }}>
            {['AI & Machine Learning', 'Full-Stack Development', 'Deep Learning', 'Web Technologies'].map((tag, index) => (
              <span
                key={index}
                style={{
                  fontSize: 'clamp(0.65rem, 0.85vw, 0.75rem)',
                  padding: '0.5rem 1.2rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '0',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  fontWeight: '300',
                  letterSpacing: '0.1em',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.color = 'rgba(255, 255, 255, 0.95)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>


      </div>
    </div>
  )
}

export default App
