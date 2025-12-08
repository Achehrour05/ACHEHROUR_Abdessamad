import { useNavigate } from 'react-router-dom';

function Certifications() {
    const navigate = useNavigate();

    const certifications = [
        // Top Tier: AI & Generative AI
        { name: "Generative AI with Large Language Models", url: "https://www.coursera.org/account/accomplishments/verify/R8OARPXWGM4U" },
        { name: "Spécialisation Machine Learning", url: "https://www.coursera.org/account/accomplishments/specialization/MPJPJGCG7TDZ" },

        // High Impact: Deep Learning Chain
        { name: "Réseaux de Neurones et Deep Learning", url: "https://www.coursera.org/account/accomplishments/verify/MH2F0VW1TO7B" },
        { name: "Réseaux de Neurones Convolutifs (CNN)", url: "https://www.coursera.org/account/accomplishments/verify/2LEMDK7UOKDB" },
        { name: "Amélioration des Réseaux de Neurones Profonds : Ajustement des Hyperparamètres", url: "https://www.coursera.org/account/accomplishments/verify/Y44J91PEL20G" },

        // Advanced Web & Cloud
        { name: "React Avancé", url: "https://www.coursera.org/account/accomplishments/verify/10G09ZX4KKF1" },
        { name: "Applications Back-End avec Node.js et Express", url: "https://www.coursera.org/account/accomplishments/verify/A3QKW0NLRJSL" },
        { name: "Notions Essentielles du Cloud AWS", url: "https://www.coursera.org/account/accomplishments/verify/GWRJM2QN2XPX" },
        { name: "Introduction à DevOps", url: "https://www.coursera.org/account/accomplishments/verify/NRBUL3BP0PKA" },

        // Machine Learning specifics
        { name: "Apprentissage Supervisé : Régression et Classification", url: "https://www.coursera.org/account/accomplishments/verify/G08IF8NN3DG1" },

        // Math & Foundations
        { name: "Mathématiques pour le Machine Learning : Algèbre Linéaire", url: "https://www.coursera.org/account/accomplishments/verify/WOMYX6EOPTEB" },
        { name: "Mathématiques pour le Machine Learning : Calcul Multivarié", url: "https://www.coursera.org/account/accomplishments/verify/0RSAL02DO2D5" },
        { name: "Probabilités et statistiques pour l’apprentissage automatique et la science des données", url: "https://www.coursera.org/account/accomplishments/verify/ZKAEFCKZXAFG" },
        { name: "NumPy, Matplotlib et Pandas – Prérequis Data Science", url: "https://www.coursera.org/account/accomplishments/verify/L26VWLRU68ER" },

        // General / Introductory
        { name: "Création d’Applications Web en PHP", url: "https://www.coursera.org/account/accomplishments/verify/QO3ZOE01XWBY" },
        { name: "L’Intelligence Artificielle pour Tous", url: "https://www.coursera.org/account/accomplishments/verify/HUB4W4AMDILH" },
        { name: "Introduction au Développement Front-End", url: "https://www.coursera.org/account/accomplishments/verify/0Y7JXRYS4ARV" },
        { name: "Introduction au Développement Agile et à Scrum", url: "https://www.coursera.org/account/accomplishments/verify/2TEF3QIJCALJ" }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: '"Playfair Display", serif',
            overflowY: 'auto', // Allow scrolling
            padding: '4rem',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                marginBottom: '4rem',
                color: '#D4AF37', // Gold accent
                textAlign: 'center',
                fontWeight: '400',
                fontStyle: 'italic',
                marginTop: '4rem'
            }}>
                Certifications
            </h1>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem', // Spacing between items
                alignItems: 'center',
                width: '100%',
                paddingBottom: '4rem'
            }}>
                {certifications.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                            textAlign: 'center',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            paddingBottom: '1rem',
                            width: '100%',
                            maxWidth: '900px', // Wider container
                            textDecoration: 'none',
                            color: '#fff',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={e => {
                            e.target.style.color = '#D4AF37';
                            e.target.style.paddingLeft = '10px'; // Subtle shift
                        }}
                        onMouseLeave={e => {
                            e.target.style.color = '#fff';
                            e.target.style.paddingLeft = '0px';
                        }}
                    >
                        {cert.name}
                    </a>
                ))}
            </div>

            {/* Back Button */}
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

export default Certifications;
