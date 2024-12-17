import React from 'react';
import styled from 'styled-components';

// Import your job data (replace with your actual path)
import jobs from '../data/jobs.json';

const darkerGreen = '#004b3d'; // Darker green for the Experience section

// Resume Section
const ResumeSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

// Experience Header Styling
const ExperienceHeader = styled.header`
  background-color: ${darkerGreen};
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

// Job Wrapper with alternating background colors
const JobWrapper = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: ${(props) => (props.isEven ? '#f0f0f0' : '#fff')}; /* Alternating background */
  border-bottom: 2px solid #ddd;
`;

const JobTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const JobDate = styled.p`
  font-size: 1rem;
  color: #555;
`;

const JobDesc = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const JobTools = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-style: italic;
`;

const ResumePage = () => {
  return (
    <div>
      {/* Experience Header */}
      <ExperienceHeader>
        Experience
      </ExperienceHeader>

      {/* Resume Section with Job Details */}
      <ResumeSection>
        {jobs.map((job, index) => (
          <JobWrapper key={index} isEven={index % 2 === 0} className={job.styling}>
            <JobTitle>{job.title}</JobTitle>
            <JobDate>{job.date}</JobDate>
            <JobDesc>{job.desc}</JobDesc>
            <JobTools>{job.tools}</JobTools>
          </JobWrapper>
        ))}
      </ResumeSection>
    </div>
  );
};

export default ResumePage;
