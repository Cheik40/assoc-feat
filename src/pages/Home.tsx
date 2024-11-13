// src/pages/Home.tsx
import React from "react";
import "../styles/Home.css";
// import AfricaMap from "../assets/structured.webp"; // Exemple de chemin pour l'image

const Home: React.FC = () => {
    return (
        <div className='home'>
            {/* Section principale */}
            <main className='main-content'>
                <h1 className='title'>L'association F.E.A.T</h1>
                <p className='description'>
                    Contribuer à l'accueil et à l'amélioration des conditions
                    d'accueil des étudiant-e-s afin de faciliter leur
                    intégration dans la ville rose.
                </p>

                <p className='subtext'>
                    L'intégration académique peut se traduire par
                    l'accompagnement des démarches d'inscription à l'université,
                    les procédures administratives, et plus encore.
                </p>

                {/* Boutons de valeurs */}
                <div className='values'>
                    <button className='value-btn'>Partage</button>
                    <button className='value-btn'>Joie</button>
                    <button className='value-btn'>Apprendre</button>
                    <button className='value-btn'>Confiance</button>
                </div>

                {/* Section avec la carte de l'Afrique */}
                <div className='map-section'>
                    <div className='map-image'>
                        {/* Placeholder pour l'image de la carte de l'Afrique */}
                    </div>
                    <div className='info-box'>
                        <p>
                            Depuis 2017, la F.E.A.T fédère les étudiant-e-s de
                            l'ensemble du continent africain pour réaliser des
                            projets et des actions communs.
                        </p>
                    </div>
                    <div className='info-box'>
                        <p>
                            Fédération des étudiants africains de Toulouse
                            (F.E.A.T) oeuvre à faciliter la vie et la réussite à
                            l'université des étudiants dans la ville rose.
                        </p>
                    </div>
                    <div className='info-box'>
                        <p>
                            Développer une démarche inclusive adaptée et
                            appropriée.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
