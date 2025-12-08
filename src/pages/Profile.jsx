import { useNavigate } from 'react-router-dom';
import blackImage from '../assets/black_image.jpg';

function Profile() {
    const navigate = useNavigate();

    const technicalSkills = {
        "Programming": ["C/C++/C#", "Java", "Python"],
        "Web Development": ["React.js", "Node.js", "HTML/CSS", "JavaScript", "PHP / Laravel"],
        "Databases": ["SQL / NoSQL", "PostgreSQL", "MongoDB", "Oracle Database"],
        "Software & Tools": ["StarUML", "Cisco Packet Tracer", "Docker", "GitHub"],
        "Languages": ["French", "English", "Arabic"],
        "Personal Skills": ["Oral Communication", "Adaptability", "Problem Solving"]
    };

    const education = [
        {
            degree: "Engineering Cycle – Networks and Information Systems",
            institution: "Faculty of Sciences and Techniques of Marrakech",
            period: "2024 - in progress"
        },
        {
            degree: "DEUST – Mathematics, Computer Science, Physics, Chemistry",
            institution: "Faculty of Sciences and Techniques of Marrakech",
            period: "2022 - 2024"
        },
        {
            degree: "Baccalaureate – Physical Sciences, French Option",
            institution: "Lycée ARGANE",
            period: "2020 - 2021"
        }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#0a0a0a',
            overflowX: 'hidden',
            overflowY: 'auto',
            zIndex: 1000
        }}>
            {/* Hero Section with PROFILE text */}
            <section style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {/* Background PROFILE text - repeated */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: 0,
                    padding: 0,
                    pointerEvents: 'none'
                }}>
                    {/* Top PROFILE - solid white */}
                    <h1 style={{
                        fontSize: 'clamp(4rem, 15vw, 12rem)',
                        fontFamily: '"Times New Roman", Times, serif',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        color: '#fff',
                        margin: 0,
                        marginLeft: '-2rem',
                        lineHeight: 1
                    }}>
                        PROFILE
                    </h1>

                    {/* Middle PROFILE texts - outlined */}
                    {[1, 2, 3].map((i) => (
                        <h1 key={i} style={{
                            fontSize: 'clamp(4rem, 15vw, 12rem)',
                            fontFamily: '"Times New Roman", Times, serif',
                            fontWeight: '400',
                            fontStyle: 'italic',
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
                            margin: 0,
                            marginTop: '-3rem',
                            marginLeft: '-2rem',
                            lineHeight: 1
                        }}>
                            PROFILE
                        </h1>
                    ))}
                </div>

                {/* Center content - Photo and name */}
                <div style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    {/* Rotated photo container */}
                    <div style={{
                        width: 'clamp(250px, 40vw, 400px)',
                        height: 'clamp(350px, 50vw, 500px)',
                        backgroundColor: '#1a1a1a',
                        transform: 'rotate(-8deg)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={blackImage}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Signature name */}
                    <h2 style={{
                        fontFamily: '"Brush Script MT", cursive',
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        color: '#fff',
                        margin: 0,
                        marginTop: '-2rem',
                        transform: 'rotate(-3deg)',
                        zIndex: 20
                    }}>
                        Abdessamad
                    </h2>
                </div>
            </section>

            {/* About Section */}
            <section style={{
                padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 10vw, 8rem)',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Bio */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontFamily: '"Times New Roman", Times, serif',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        color: '#fff',
                        marginBottom: '1.5rem'
                    }}>
                        Profile
                    </h3>
                    <p style={{
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '1.5rem'
                    }}>
                        Engineering student in networks and information systems, passionate about technological innovation. Curious and with strong analytical skills, I design high-performance and adapted solutions, with solid technical skills and good organizational sense.
                    </p>
                    <p style={{
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                        Motivated, I work effectively both in teams and independently, and I wish to contribute to concrete projects while continuing my learning.
                    </p>
                </div>

                {/* Technical Skills */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontFamily: '"Times New Roman", Times, serif',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        color: '#fff',
                        marginBottom: '2rem'
                    }}>
                        Technical Skills
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '3rem'
                    }}>
                        {Object.entries(technicalSkills).map(([category, items]) => (
                            <div key={category}>
                                <h4 style={{
                                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontWeight: '400',
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    marginBottom: '1rem',
                                    paddingBottom: '0.5rem',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                                }}>
                                    {category}
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {items.map((item, index) => (
                                        <li key={index} style={{
                                            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontFamily: '"Times New Roman", Times, serif',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        color: '#fff',
                        marginBottom: '2rem'
                    }}>
                        Education
                    </h3>
                    {education.map((edu, index) => (
                        <div key={index} style={{
                            marginBottom: '2rem',
                            paddingBottom: '2rem',
                            borderBottom: index < education.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                        }}>
                            <h4 style={{
                                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                                fontFamily: '"Times New Roman", Times, serif',
                                fontWeight: '400',
                                fontStyle: 'italic',
                                color: '#fff',
                                marginBottom: '0.5rem'
                            }}>
                                {edu.degree}
                            </h4>
                            <p style={{
                                fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                                color: 'rgba(255, 255, 255, 0.7)',
                                marginBottom: '0.25rem'
                            }}>
                                {edu.institution}
                            </p>
                            <p style={{
                                fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontStyle: 'italic'
                            }}>
                                {edu.period}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

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

export default Profile;
