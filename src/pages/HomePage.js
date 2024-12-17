import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaMountain, FaChessKnight, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'; // Icons for achievements
import { TypeAnimation } from 'react-type-animation';

const dartmouthGreen = '#006747';

// Hero section with typewriter animation
const HeroSection = styled.section`
  background: linear-gradient(135deg, ${dartmouthGreen} 50%, #003d33);
  color: white;
  text-align: center;
  padding: 100px 20px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  color:white;
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    text-decoration: none;
    color: white;  /* Make the icons white */
    font-size: 2.5rem;  /* Increase size of icons */
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #ff6347;  /* Change color on hover */
      transform: scale(1.1);  /* Slight zoom effect */
    }

    svg {
      font-size: 2.5rem; /* Set size of the icons */
    }
  }
`;

const AboutSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #ffffff;
  color: #333;
`;

const SkillsSection = styled.section`
  background-color: #f0f0f0;
  padding: 50px 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`;

const SkillCard = styled.div`
  background: #fff;
  padding: 30px;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-bottom: 10px;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #006747;
  }
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <Heading>
          <TypeAnimation
            sequence={[
              "Hi! I'm Jack Vasu",
              2000,
              "Hi! I'm a Software Engineer",
              2000,
              "Hi! I'm a Tennis Enthusiast",
              2000,
              "Hi! I'm Jack Vasu",
              2000,
            ]}
            speed={30} // Speed of the typing effect
            wrapper="span" // Rendered as a <span>
            className="text-typing"
          />
        </Heading>
        <SocialLinks>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/jack-vasu-b2145118a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            
            {/* GitHub Icon */}
            <a href="https://github.com/vasuvius" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="mailto:jackvasu@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </SocialLinks>
      </HeroSection>

      <AboutSection>
        <h2>About Me</h2>
        <p>
          I majored in <strong>Computer Science</strong> with a minor in <strong>Environmental Studies</strong> at Dartmouth College. In my free time, I enjoy playing tennis, hiking, traveling, and losing chess matches. I am passionate about coding, building scalable systems, and leveraging open-source technologies like Kubernetes, Apache Kafka, and Apache Cassandra to create highly efficient, real-time applications.
        </p>
      </AboutSection>

      <SkillsSection>
        <SkillCard>
          <FaTrophy />
          <h3>Honors & Leadership</h3>
          <p>Club Tennis Co-Captain, DREAM Co-Chair, First Year Trips Leader</p>
        </SkillCard>

        <SkillCard>
          <FaMountain />
          <h3>Outdoor Enthusiast</h3>
          <p>I love hiking and exploring nature in and around San Francisco.</p>
        </SkillCard>

        <SkillCard>
          <FaChessKnight />
          <h3>Chess</h3>
          <p>I’m always up for a good game, even if I’m losing!</p>
        </SkillCard>
      </SkillsSection>
    </>
  );
};

export default HomePage;
