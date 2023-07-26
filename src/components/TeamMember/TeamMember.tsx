import React from 'react';
import styled from 'styled-components';

const MemberCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const MemberInfo = styled.div`
  margin-left: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Role = styled.p`
  font-size: 14px;

`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <MemberCard>
      <MemberImage src={imageUrl} alt={`${name}'s profile`} />
      <MemberInfo>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </MemberInfo>
    </MemberCard>
  );
};

export default TeamMember;
