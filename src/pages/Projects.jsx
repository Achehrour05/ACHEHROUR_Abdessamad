import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import ProjectFilters from '../components/ProjectFilters';

const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'ai', label: 'AI & Vision' },
  { id: 'web', label: 'Web & Fullstack' },
  { id: 'ml', label: 'Machine Learning' },
];

const PROJECTS_DATA = [
  { name: "VISIONGUIDE AI", category: "ai", tech: "Computer Vision • Deep Learning • PyTorch" },
  { name: "FOOTBALL EQUIPMENT MAGAZINE", category: "web", tech: "React.js • Tailwind • Node.js" },
  { name: "MASKGUARD SYSTEM DETECTION", category: "ai", tech: "YOLOv8 • OpenCV • Python" },
  { name: "PYTHON CODE GENERATOR", category: "ai", tech: "LLMs • Transformers • LangChain" },
  { name: "MEDICAL DIALOGUE SOAP GENERATOR", category: "ml", tech: "NLP • HuggingFace • Fine-Tuning" },
  { name: "FPL SQUAD OPTIMIZER", category: "ml", tech: "Linear Programming • Python • Data Analytics" },
  { name: "MOVIECLUSTER K-MEANS RECOMMENDER", category: "ml", tech: "Unsupervised ML • Scikit-Learn" },
  { name: "ANIMAL DETECTION", category: "ai", tech: "Object Detection • PyTorch • MobileNet" }
];

function Projects() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = useMemo(() => {
        return PROJECTS_DATA.filter((p) => {
            const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
            const matchesSearch = !searchQuery.trim() || 
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tech.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <div className="no-scrollbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#0a0a0a',
            overflowY: 'auto',
            overflowX: 'hidden',
            zIndex: 1000
        }}>
            {/* Top Spacing & Project Filters */}
            <div style={{ paddingTop: '10vh' }}>
                <ProjectFilters
                    activeFilter={activeFilter}
                    onSelectFilter={setActiveFilter}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    categories={CATEGORIES}
                />
            </div>

            {/* Project List */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3.5rem',
                paddingTop: '2vh',
                paddingBottom: '15vh',
                width: '100%'
            }}>
                {filteredProjects.length === 0 ? (
                    <div style={{ color: '#888', fontSize: '1.2rem', textAlign: 'center', padding: '4rem 1rem' }}>
                        No projects match "{searchQuery}"
                    </div>
                ) : (
                    filteredProjects.map((project, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <h2
                                onClick={() => navigate(`/project/${encodeURIComponent(project.name)}`)}
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
                                {project.name}
                            </h2>
                            <p style={{
                                color: '#888',
                                fontSize: '0.85rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginTop: '0.5rem',
                                fontFamily: 'sans-serif'
                            }}>
                                {project.tech}
                            </p>
                        </div>
                    ))
                )}
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
