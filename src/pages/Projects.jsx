import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    const projects = [
        "VISIONGUIDE AI",
        "FOOTBALL EQUIPMENT MAGAZINE",
        "MASKGUARD SYSTEM DETECTION",
        "PYTHON CODE GENERATOR",
        "MEDICAL DIALOGUE SOAP GENERATOR",
        "FPL SQUAD OPTIMIZER",
        "MOVIECLUSTER K-MEANS RECOMMENDER",
        "ANIMAL DETECTION"
    ];

    return (
        <div className="no-scrollbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#0a0a0a',
            overflowY: 'auto', // Enable vertical scrolling
            overflowX: 'hidden',
            zIndex: 1000
        }}>
            {/* Project List */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4rem', // Increased gap for better scrolling rhythm
                paddingTop: '15vh', // Start below the info button
                paddingBottom: '15vh', // Space at bottom
                width: '100%'
            }}>
                {projects.map((project, index) => (
                    <h2 key={index}
                        onClick={() => navigate(`/project/${encodeURIComponent(project)}`)}
                        style={{
                            fontFamily: '"Playfair Display", "Times New Roman", serif',
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: '400',
                            color: '#fff',
                            margin: 0,
                            letterSpacing: '-0.02em',
                            cursor: 'pointer',
                            transition: 'opacity 0.3s ease',
                            textAlign: 'center'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = 0.7}
                        onMouseLeave={(e) => e.target.style.opacity = 1}
                    >
                        {project}
                    </h2>
                ))}
            </div>

            {/* Back button - Top Left */}
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    left: '2rem',
                    border: 'none',
                    background: 'transparent',
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    cursor: 'pointer',
                    zIndex: 100,
                    outline: 'none'
                }}
            >
                ← back
            </button>

            {/* Info button - Top Right */}
            <button
                onClick={() => navigate('/info')}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    border: 'none',
                    background: 'transparent',
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    cursor: 'pointer',
                    zIndex: 100,
                    outline: 'none'
                }}
            >
                info
            </button>
        </div>
    );
}

export default Projects;
