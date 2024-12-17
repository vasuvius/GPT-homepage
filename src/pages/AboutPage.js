import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutPage = () => {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        I’m a passionate full-stack developer with a love for building meaningful web applications. With expertise in front-end frameworks such as React and back-end technologies like Node.js, I enjoy working on diverse projects.
      </AboutText>
    </AboutSection>
  );
};

export default AboutPage;
