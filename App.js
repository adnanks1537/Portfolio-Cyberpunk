import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';
import Navbar from './Navbar';
import Contact from './Contact';
import Skills from './Skills';

const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding-top: 80px; /* To avoid overlap with the navbar */
  font-family: 'Orbitron', sans-serif;
  min-height: 100vh;
  padding: 20px; /* Added padding for responsiveness */
`;

const Section = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff00ff;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background: #ff00ff;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    background: #00ffff;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const SectionContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <Router>
      {loading ? (
        <Loader onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={
                <Section>
                  <ProfileImage src="your-profile-image-url.jpg" alt="Adnan KS" />
                  <Title>Adnan KS</Title>
                  <Text>
                    Highly motivated Certified Penetration Tester and Security Researcher with a proven track record in ethical hacking. Extensive experience in identifying and exploiting vulnerabilities, penetration testing, security consulting, and training others in ethical hacking methodologies.
                  </Text>
                  
                  <SectionContainer>
                    <Title>Professional Experience</Title>
                    <Text>
                      <strong>Freelance | 2022 - Present</strong><br />
                      TNEMIS: Identified and reported various vulnerabilities including IDOR, Authentication Bypass, OTP Bypass, Database vulnerabilities, and Broken Authentication.<br />
                      Keltron Pvt Ltd.: Discovered a sensitive information disclosure vulnerability.<br />
                      Hindusthan Food Products: Uncovered a weak password policy compromising their surveillance system.<br />
                      Nilgiri College: Identified critical Remote Code Execution (RCE) vulnerability and potential sensitive data exposure.<br />
                      Badmintonsouq: Identified potential account takeover vulnerability through Broken Logic Authentication (BOLA).
                    </Text>
                  </SectionContainer>

                  <SectionContainer>
                    <Title>Education</Title>
                    <Text>
                      <strong>Bachelor of Science in Computer Science</strong><br />
                      Nilgiri College of Arts and Science | 2022 - 2025<br />
                      Certified Penetration Tester V3 | Red Team Hacker Academy | 2024
                    </Text>
                  </SectionContainer>

                  <Skills />

                  <SectionContainer>
                    <Title>Certifications</Title>
                    <Text>
                      Certified Penetration Tester V3 | Red Team Hacker Academy<br />
                      Certified Ethical Hacking Associate<br />
                      Certified Ethical Hacker Jr<br />
                      Bug Bounty Hunting & Web Security Testing | ZSecurity<br />
                      Ethical Hacking using the Cloud | Udemy<br />
                      Android Hacking | Udemy<br />
                      Mastering SSRF, SQL Injection, Authentication Vulnerabilities | Udemy
                    </Text>
                  </SectionContainer>

                  <SectionContainer>
                    <Title>Achievements</Title>
                    <Text>
                      College Excellence Award: Awarded the Green Card by the College MD for outstanding performance.<br />
                      CS Department Recognition: Awarded 2 Green Cards and 10+ Blue Cards by the HOD.<br />
                      CTF Competition Champion: Won first place in the CTF competition organized by IG WMO College in both 2022 and 2024.<br />
                      Paper Presentation: Presented "AI and Cybersecurity" at Don Bosco College.<br />
                      Conference Presentation: Presented "CCTV Hacking and Prevention" at the International Conference on LIST 2023.
                    </Text>
                  </SectionContainer>

                  <SectionContainer>
                    <Title>Tools</Title>
                    <Text>
                      Burpsuite<br />
                      Postman<br />
                      Nmap<br />
                      Metasploit<br />
                      Aircrack-ng<br />
                      OWASP ZAP
                    </Text>
                  </SectionContainer>

                  <DownloadButton href="/resume.pdf" download="Adnan_KS_Resume.pdf">
                    Download Resume
                  </DownloadButton>
                </Section>
              } />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </>
      )}
    </Router>
  );
};

export default App;
