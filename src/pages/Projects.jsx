import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>NON-CONTACT HEART RATE MONITORING SYSTEM</h3>
          <p><em>Mar - Apr 2023</em></p>
          <p>
            A system to monitor heart rate without physical contact using advanced sensors and image processing techniques.
          </p>
          <p><strong>Technologies:</strong> React, Sensors, Image Processing</p>
        </div>

        <div className="project-card">
          <h3>Face Recognition</h3>
          <p><em>Feb - Apr 2022</em></p>
          <p>
            Developed a Python-based personal identification system using facial recognition technology. 
            Utilized CCTV cameras to capture facial data and identify individuals accurately.
          </p>
          <p><strong>Technologies:</strong> Python, OpenCV, Facial Recognition, CCTV Integration</p>
        </div>

        <div className="project-card">
          <h3>Hotel Management</h3>
          <p><em>Oct - Dec 2024</em></p>
          <p>
            A hotel reservation system allowing registered users to book rooms and select facilities. 
            Provides customer-focused services and allows users to update their details easily.
          </p>
          <p><strong>Technologies:</strong> ASP.NET MVC, SQL Server</p>
        </div>

        <div className="project-card">
          <h3>React Task Manager App</h3>
          <p><em>Jan - Apr 2025</em></p>
          <p>
            A dynamic and responsive task manager application built with React. Features include task creation, editing, deletion, and status updates. Implements state management with hooks, conditional rendering, and localStorage for persistence. Designed with clean UI and smooth user experience.
          </p>
          <p><strong>Technologies:</strong> React, Hooks, CSS, LocalStorage</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
