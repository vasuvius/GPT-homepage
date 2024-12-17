import React from 'react';
import styled from 'styled-components';
import cluedown from '../images/cluedown.jpeg';

const dartmouthGreen = '#006747';
const darkerGreen = '#004b3d'; // Darker green for the header background
const grayBackground = '#f9f9f9';

// Projects Section Styling
const ProjectsSection = styled.section`
  background-color: ${grayBackground};
`;

// Project Header Styling (similar to the Experience header)
const ProjectHeader = styled.header`
  background-color: ${darkerGreen};
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

// Project Card Styling
const ProjectCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

// Screenshot Styling
const ScreenshotWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  min-width: 250px;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Text Description Section
const ProjectText = styled.div`
  flex: 2;
  color: #333;
  h3 {
    font-size: 1.8rem;
    color: ${dartmouthGreen};
    margin-bottom: 15px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

// Link Button Styling
const ProjectLink = styled.a`
  font-size: 1.2rem;
  color: ${dartmouthGreen};
  text-decoration: none;
  font-weight: bold;
  padding: 12px 18px;
  background-color: #f5f5f5;
  border-radius: 6px;
  border: 2px solid ${dartmouthGreen};
  display: inline-block;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${dartmouthGreen};
    color: white;
  }
`;

const ProjectsPage = () => {
  return (
    <ProjectsSection>
      {/* Project Header */}
      <ProjectHeader>Projects</ProjectHeader>
      
      <ProjectCard>
        <ScreenshotWrapper>
          <img
            src={cluedown} // Placeholder image, replace with your ClueDown screenshot
            alt="ClueDown Screenshot"
          />
        </ScreenshotWrapper>
        
        <ProjectText>
          <h3>ClueDown</h3>
          <p>
            ClueDown is a platform that uses GenAI to generate crossword clues for past New York Times crossword puzzles. 
            It allows users to get the same answers as the original clues, making it easier to complete challenging puzzles.
          </p>
          <ProjectLink href="https://www.linkedin.com/posts/jack-vasu-b2145118a_hi-all-for-the-the-past-two-years-ive-activity-7189468785181949952-7dKV?utm_source=share&utm_medium=member_desktop" target="_blank">
            Check out ClueDown
          </ProjectLink>
        </ProjectText>
      </ProjectCard>
    </ProjectsSection>
  );
};

export default ProjectsPage;
