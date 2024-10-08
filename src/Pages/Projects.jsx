import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Helmet } from 'react-helmet';

function Projects() {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Projects | TechFloww IT Services</title>
                </Helmet>
            </div>
            <NavBar />
            <ProjectShowcase />
            <Footer />
            <Background />
        </div>
    );
}

export default Projects;