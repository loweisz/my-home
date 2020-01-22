import React from 'react';
import { Company, DataText, ExperienceBox, IconWrapper, SubInfo, Time, Title } from './experience.styles';
import { FiHome, FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';

function Experience({ node }) {
  return (
    <ExperienceBox>
      <Title>
        <IconWrapper>
          <FiUser />
          <span>{node.frontmatter.title}</span>
        </IconWrapper>
      </Title>
      <SubInfo>
        <IconWrapper>
          <FiHome />
          <Company target=":_blank" href={`https://${node.frontmatter.website}`}>
            <span>{node.frontmatter.company}</span>
          </Company>
        </IconWrapper>
        <IconWrapper>
          <FiMapPin />
          <Time>{node.frontmatter.location}</Time>
        </IconWrapper>
        <IconWrapper>
          <FiCalendar />
          <Time>
            {node.frontmatter.startDate} - {node.frontmatter.endDate || 'present'}
          </Time>
        </IconWrapper>
      </SubInfo>
      <DataText dangerouslySetInnerHTML={{ __html: node.html }} />
    </ExperienceBox>
  );
}

export default Experience;
