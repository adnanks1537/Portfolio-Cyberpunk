import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #ff00ff;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <IconLink href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
    </SocialContainer>
  );
};

export default SocialLinks;
