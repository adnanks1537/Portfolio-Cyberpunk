import React from 'react';
import styled from 'styled-components';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPowershell } from 'react-icons/si';

const SkillsContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ff00ff;
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Skill = styled.div`
  font-size: 2rem;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillName = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <Title>PROGRAMMING LANGUAGE</Title>
      <SkillsGrid>
        <Skill>
          <FaPython />
          <SkillName>Python</SkillName>
        </Skill>
        <Skill>
          <FaHtml5 />
          <SkillName>HTML</SkillName>
        </Skill>
        <Skill>
          <FaCss3Alt />
          <SkillName>CSS</SkillName>
        </Skill>
        <Skill>
          <FaJs />
          <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
          <FaReact />
          <SkillName>React</SkillName>
        </Skill>
        <Skill>
          <SiMongodb />
          <SkillName>MongoDB</SkillName>
        </Skill>
        <Skill>
          <SiMysql />
          <SkillName>MySQL</SkillName>
        </Skill>
        <Skill>
          <SiPowershell />
          <SkillName>PowerShell</SkillName>
        </Skill>
       
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
