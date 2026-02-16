import { useNavigate } from 'react-router-dom';
import SkillsMatrix from '../components/SkillsMatrix';
import CareerTimeline from '../components/CareerTimeline';
import { TIMELINE_EXPERIENCE } from '../data/experience';

function Info() {
    const navigate = useNavigate();

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#000',
            color: '#e0e0e0',
            fontFamily: '"Playfair Display", serif',
            overflowY: 'auto',
            padding: '4rem',
            boxSizing: 'border-box',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto 1fr auto',
            gap: '2rem',
            animation: 'fadeIn 1s ease-out'
        }}>
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>

            {/* Header / Name */}
            <div style={{
                gridColumn: '1 / span 12',
                fontSize: '0.9rem',
                color: '#D4AF37', // More sophisticated metallic gold
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '4rem',
                alignSelf: 'start'
            }}>
                Achehrour Abdessamad
            </div>

            {/* Main Bio Content */}
            <div style={{
                gridColumn: '1 / span 9',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                lineHeight: '1.4',
                fontWeight: '400',
                color: '#fff',
                alignSelf: 'center'
            }}>
                <p style={{ marginBottom: '2.5rem', opacity: 0, animation: 'fadeIn 1s ease-out 0.2s forwards' }}>
                    Engineering student in Networks and Computer Systems at the Faculty of Sciences and Techniques of Marrakech, passionate about technological innovation and artificial intelligence.
                </p>
                <p style={{ marginBottom: '2.5rem', opacity: 0, animation: 'fadeIn 1s ease-out 0.4s forwards' }}>
                    Specialized in Machine Learning, Deep Learning, and full-stack development, I design high-performance solutions combining data analysis, neural networks, and modern web applications.
                </p>
                <p style={{ opacity: 0, animation: 'fadeIn 1s ease-out 0.6s forwards' }}>
                    From network architecture design to intelligent application development, I transform complex ideas into concrete solutions with strong analytical skills and a collaborative approach.
                </p>
            </div>

            {/* Footer / Contact */}
            <div style={{
                gridColumn: '1 / span 12',
                marginTop: '6rem',
                alignSelf: 'end',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                opacity: 0,
                animation: 'fadeIn 1s ease-out 0.8s forwards'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'sans-serif' }}>
                        Academic Journey & Milestones
                    </div>
                    <CareerTimeline items={TIMELINE_EXPERIENCE} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'sans-serif' }}>
                        Technical Proficiency & Arsenal
                    </div>
                    <SkillsMatrix />
                </div>

                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    fontFamily: 'sans-serif',
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    <a href="https://linkedin.com/in/abdessamad-achehrour" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#888'}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/abdessamad-achehrour" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#888'}>
                        GitHub
                    </a>
                    <a href="mailto:achehrour.abdessamad@gmail.com" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#888'}>
                        Email
                    </a>
                </div>
            </div>

            {/* Back Button - Minimalist */}
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'fixed',
                    top: '2.5rem',
                    right: '3rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    background: 'transparent',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 100,
                    outline: 'none',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                    e.target.style.borderColor = '#fff';
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'scale(1)';
                }}
            >
                ✕
            </button>
        </div>
    );
}

export default Info;
