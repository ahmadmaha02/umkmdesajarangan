// OverlayText.tsx
import React from 'react';
import styled from 'styled-components';

interface OverlayTextProps {
  children: React.ReactNode;
}

const StyledOverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    
  }
`;

const OverlayText: React.FC<OverlayTextProps> = ({ children }) => {
  return <StyledOverlayText>{children}</StyledOverlayText>;
};

export default OverlayText;
