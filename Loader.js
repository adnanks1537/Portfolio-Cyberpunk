import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  flex-direction: column;
`;

const ProgressBar = styled.div`
  width: 80%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px 0;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(to right, #ff00ff, #00ffff);
  animation: ${load} 3s linear forwards;
`;

const ProgressText = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  animation: ${fadeIn} 3s forwards;
`;

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
        }
        return prev + 1;
      });
    }, 30); // Adjust timing as needed
  }, [onComplete]);

  return (
    <LoaderContainer>
      <ProgressText>Loading {progress}%</ProgressText>
      <ProgressBar>
        <Progress style={{ width: `${progress}%` }} />
      </ProgressBar>
    </LoaderContainer>
  );
};

export default Loader;
