import React from 'react';
import {Company, DataText, ExperienceBox, IconWrapper, SubInfo, Time, Title} from "./experience.styles";
import { FiHome, FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';



function Experience({ node }) {
  console.log(node);
  return (
    <ExperienceBox>
      <Title>
        <IconWrapper>
          <FiUser />
          <span>{node.frontmatter.title}</span>
        </IconWrapper>
      </Title>
      <SubInfo>
        
          <Company href={`https://${node.frontmatter.website}`}>
            <IconWrapper>
              <FiHome />
              <span>{node.frontmatter.company}</span>
            </IconWrapper>
          </Company>
        
        <IconWrapper>
          <FiMapPin />
          <Time>{node.frontmatter.location}</Time>
        </IconWrapper>
        <IconWrapper>
          <FiCalendar />
          <Time>{node.frontmatter.startDate} - {node.frontmatter.endDate || 'present'}</Time>
        </IconWrapper>
      </SubInfo>
      <DataText dangerouslySetInnerHTML={{ __html: node.html }} />
    </ExperienceBox>
  );
}

export default Experience;
