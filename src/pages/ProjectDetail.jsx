import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react'; // Added for logging
import blackImage from '../assets/black_image.jpg';
import movieImage from '../assets/movie.PNG';
import combinedImage from '../assets/VISIONGUIDE.png';
import soapImage from '../assets/soap.PNG';
import masksImage from '../assets/masks.png';
import webImage from '../assets/web2.png';
import fplImage from '../assets/fpl.PNG';

function ProjectDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Debug logging
    useEffect(() => {
        console.log("ProjectDetail Mounted");
        console.log("Raw ID param:", id);
    }, [id]);

    let normalizedId = "DEFAULT";
    try {
        normalizedId = decodeURIComponent(id || "default").trim().toUpperCase();
        console.log("Normalized ID:", normalizedId);
    } catch (e) {
        console.error("Failed to decode ID:", e);
    }

    const projectContent = {
        "MASKGUARD SYSTEM DETECTION": {
            role: "AI ENGINEER & DEVELOPER",
            image: masksImage,
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        An AI-powered face mask detection system using YOLOv8 for real-time monitoring of mask compliance. The system accurately identifies whether individuals are wearing masks correctly, incorrectly, or not at all.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        Built with deep learning and computer vision, it processes live camera feeds with high accuracy and speed, making it ideal for public spaces, offices, and healthcare facilities.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "Python",
                "YOLOv8",
                "OpenCV",
                "PyTorch",
                "Deep Learning",
                "Real-time Analytics"
            ]
        },
        "VISIONGUIDE AI": {
            role: "AI ENGINEER",
            image: combinedImage, // Use specific image
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        An AI-powered scene analysis system designed to assist visually impaired individuals by providing comprehensive environmental understanding through audio narration.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        The system integrates three state-of-the-art deep learning models: YOLOS for object detection (identifying 80+ common objects), BLIP for natural language scene descriptions, and Depth Anything V2 for spatial distance estimation.
                    </p>
                    <p>
                        It processes images to detect objects with confidence scores, generates contextual scene descriptions, calculates distances to detected objects in meters, and converts all this information into prioritized audio guidance using text-to-speech technology, helping users safely navigate and understand their surroundings.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "YOLOS",
                "BLIP Model",
                "Depth Anything V2",
                "Python",
                "Text-to-Speech",
                "Deep Learning"
            ]
        },
        "FOOTBALL EQUIPMENT MAGAZINE": {
            role: "FULL STACK DEVELOPER",
            image: webImage,
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        Football Equipment Magazine is a full-stack e-commerce platform built with React and PHP, dedicated to selling high-quality football gear including official jerseys from the five top European leagues, football boots, jackets, and balls.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        The website features a modern, responsive interface with dynamic product browsing, category filtering, detailed product pages, and an optimized cart and checkout flow.
                    </p>
                    <p>
                        Designed with a clean football-inspired UI, the project showcases strong front-end performance, secure backend integration, and a smooth shopping experience highlighting the capacity to build real-world, scalable online stores.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "React",
                "PHP",
                "MySQL",
                "E-commerce",
                "Rest API",
                "Tailwind CSS"
            ]
        },
        "PYTHON CODE GENERATOR": {
            role: "AI ENGINEER & LLM SPECIALIST",
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        Python-Code-Generator-LLM is a fine-tuned CodeLlama-7B model specialized for generating Python code from natural language instructions. Built on 10,000 carefully selected examples from the python-codes-25k dataset, this model transforms everyday programming requests into working Python code.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        The project leverages Unsloth for accelerated training, LoRA (Low-Rank Adaptation) for parameter-efficient fine-tuning, and 4-bit quantization to optimize memory usage.
                    </p>
                    <p>
                        Whether you need functions for data processing, algorithms, web scraping, or automation scripts, this model understands your intent and generates clean, functional Python code that's ready to use.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "CodeLlama-7B",
                "Unsloth",
                "LoRA / PEFT",
                "PyTorch",
                "Hugging Face",
                "4-bit Quantization"
            ]
        },
        "MEDICAL DIALOGUE SOAP GENERATOR": {
            role: "AI ENGINEER",
            image: soapImage,
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        Medical-Dialogue-SOAP-Generator is an AI-powered tool that automatically converts doctor-patient conversations into structured SOAP (Subjective, Objective, Assessment, Plan) medical notes. Built on a fine-tuned Llama 3.2 1B model using LoRA adapters, it processes clinical dialogues and generates comprehensive medical summaries following standard healthcare documentation formats.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        The model was trained on the omi-health medical dialogue dataset to understand clinical conversations and extract key information into the four SOAP components: patient-reported symptoms (Subjective), clinical findings and test results (Objective), medical diagnosis and clinical reasoning (Assessment), and treatment plans and follow-up actions (Plan).
                    </p>
                    <p>
                        This lightweight solution runs efficiently on consumer GPUs and helps healthcare professionals save time on documentation, reduce administrative burden, and maintain consistent, high-quality medical records while allowing them to focus more attention on patient care.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "Llama 3.2 1B",
                "LoRA Adapters",
                "NLP / LLMs",
                "Python",
                "SOAP Format",
                "Hugging Face"
            ]
        },
        "FPL SQUAD OPTIMIZER": {
            role: "DATA SCIENTIST & AI ENGINEER",
            image: fplImage,
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        FPL Squad Optimizer is a machine learning-powered tool that predicts Fantasy Premier League player performance and builds optimal 15-player squads for Gameweek 1.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        It trains a LightGBM model on historical match data (2024-2025 season) combined with preseason performance, incorporating over 150 advanced features including per-90 statistics, fixture difficulty, team strength metrics, consistency scores, injury risk, and FPL-specific indicators like bonus point potential and captaincy scores.
                    </p>
                    <p>
                        The system uses linear programming to construct the best possible squad within the £100m budget constraint while respecting position requirements (2 GKP, 5 DEF, 5 MID, 3 FWD) and the 3-player-per-team limit, maximizing predicted points based on upcoming fixtures and player form.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "LightGBM",
                "Python",
                "Linear Programming",
                "Pandas / NumPy",
                "Feature Engineering",
                "Optimization Algorithms"
            ]
        },
        "MOVIECLUSTER K-MEANS RECOMMENDER": {
            role: "DATA SCIENTIST & ML ENGINEER",
            image: movieImage, // Use specific image
            imageStyle: { objectPosition: '70% center' }, // Shift image a bit to the right
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        This project implements a movie recommendation system using K-means clustering on the MovieLens dataset (100K+ ratings across 9,700+ movies from 610 users). The system creates user profiles based on genre preferences, clusters similar users together using unsupervised machine learning, and generates personalized movie recommendations by identifying what other users in the same cluster enjoyed.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        It includes both a training module that analyzes user behavior patterns and preference clusters, and an interactive CLI tool that lets you explore recommendations, view rating histories, and understand cluster characteristics for any user in the dataset.
                    </p>
                </>
            ),
            sidebarTitle: "Tech Stack",
            sidebarItems: [
                "K-Means Clustering",
                "Python",
                "Scikit-learn",
                "Pandas",
                "Collaborative Filtering",
                "MovieLens Dataset"
            ]
        },
        "default": {
            role: "CREATIVE DIRECTOR",
            description: (
                <>
                    <p style={{ marginBottom: '2rem' }}>
                        For the 2025 edition of Made by Google, we helped reimagine the brand's annual hardware launch, turning the traditional keynote into a lively, late-night-style show in New York City hosted by Jimmy Fallon.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        My role focused on the overall guest experience and spatial design, shaping a seamless journey from arrival to stage. The environment drew from an on-set aesthetic, blending backstage utility with Google's brand language.
                    </p>
                </>
            ),
            sidebarTitle: "Press",
            sidebarItems: [
                "Youtube Keynote",
                "Jimmy Fallon",
                "The Verge",
                "Forbes",
                "Engadget",
                "9 to 5 Google"
            ]
        }
    };

    // Robust Lookup
    let currentProject = projectContent[normalizedId];

    // If not found directly, try to find a key that includes the ID or is "default"
    if (!currentProject) {
        console.warn("Direct match failed for", normalizedId);
        // Fallback to default
        currentProject = projectContent["default"];
    }

    if (!currentProject) {
        return <div style={{ color: 'white', padding: '5rem' }}>Error loading project content.</div>;
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#000', // Pure black
            overflowY: 'auto',
            overflowX: 'hidden',
            zIndex: 9999
        }}>
            {/* Hero Section - Split Screen */}
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                position: 'relative'
            }}>
                {/* Left Panel - 35% */}
                <div style={{
                    width: '35%',
                    height: '100%',
                    backgroundColor: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '3rem',
                    boxSizing: 'border-box',
                    position: 'relative',
                    zIndex: 2
                }}>
                    {/* Year at top */}
                    <div style={{
                        position: 'absolute',
                        top: '3rem',
                        left: '3rem',
                        color: '#fff',
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '1rem',
                        letterSpacing: '0.05em'
                    }}>
                        2025
                    </div>

                    {/* Main Title */}
                    <h1 style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: 'clamp(2.5rem, 4.5vw, 5rem)',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        maxWidth: '100%',
                        overflowWrap: 'break-word'
                    }}>
                        {id ? decodeURIComponent(id) : "Project"}
                    </h1>
                </div>

                {/* Right Panel - 65% - Image */}
                <div style={{
                    width: '65%',
                    height: '100%',
                    backgroundColor: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        borderRadius: '0',
                        overflow: 'hidden',
                        boxShadow: 'none',
                        background: 'transparent'
                    }}>
                        <img
                            src={currentProject.image || blackImage}
                            alt="Project visualization"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center',
                                ...currentProject.imageStyle
                            }}
                        />
                        {/* Subtle overlay gradient */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)',
                            pointerEvents: 'none'
                        }} />
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div style={{
                backgroundColor: '#000',
                padding: '8rem 4rem',
                color: '#fff',
                fontFamily: 'sans-serif'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(200px, 1fr) 2fr 1fr',
                    gap: '4rem'
                }}>
                    {/* Column 1: Role */}
                    <div>
                        <h3 style={{
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            color: '#888',
                            textTransform: 'uppercase'
                        }}>
                            Experience
                        </h3>
                        <p style={{
                            fontSize: '0.9rem',
                            fontWeight: '400',
                            letterSpacing: '0.02em'
                        }}>
                            ● {currentProject.role}
                        </p>
                    </div>

                    {/* Column 2: Description */}
                    <div style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#ccc'
                    }}>
                        {currentProject.description}
                    </div>

                    {/* Column 3: Dynamic Sidebar (Press or Tech Stack) */}
                    <div>
                        <h3 style={{
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            color: '#888',
                            textTransform: 'uppercase'
                        }}>
                            {currentProject.sidebarTitle}
                        </h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            fontFamily: '"Playfair Display", serif',
                            fontStyle: 'italic',
                            fontSize: '1.1rem',
                            lineHeight: '1.8'
                        }}>
                            {currentProject.sidebarItems && currentProject.sidebarItems.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', cursor: 'pointer', color: '#ccc' }}>
                                    &gt; {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <button
                onClick={() => navigate('/projects')}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '2rem',
                    border: 'none',
                    background: 'transparent',
                    color: '#fff',
                    fontSize: '1rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    cursor: 'pointer',
                    zIndex: 100,
                    outline: 'none',
                    opacity: 0.7,
                    mixBlendMode: 'difference'
                }}
            >
                ← back to projects
            </button>
        </div>
    );
}

export default ProjectDetail;
