import React from 'react';
import {Company, DataText, ExperienceBox, SubInfo, Time, Title} from "./experience.styles";


function Experience({ node }) {
  return (
    <ExperienceBox>
      <Title>{node.frontmatter.title}</Title>
      <SubInfo>
        <Company href={node.frontmatter.website}>{node.frontmatter.company}</Company>
        <Time>{node.frontmatter.startDate} - {node.frontmatter.endDate || 'present'}</Time>
      </SubInfo>
      <DataText>{node.html} </DataText>
    </ExperienceBox>
  );
}

export default Experience;
