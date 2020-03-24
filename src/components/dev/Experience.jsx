import React from 'react';
import {
  Company,
  DataText,
  ExperienceBox,
  TimeLineElement,
  Wrapper,
  IconWrapper,
  TechItem,
  SubInfo,
  Time,
  TechStack,
  Title,
} from './experience.styles';
import { FiUser } from 'react-icons/fi';

function Experience({ node }) {
  return (
    <Wrapper>
      <TimeLineElement />
      <ExperienceBox>
        <Title>
          <IconWrapper>
            <FiUser />
            <span>{node.frontmatter.title}</span>
          </IconWrapper>
        </Title>
        <SubInfo>
          <IconWrapper>
            <Company target=":_blank" href={`https://${node.frontmatter.website}`}>
              <span>{node.frontmatter.company}</span>
            </Company>
          </IconWrapper>
          <IconWrapper>
            <Time>{node.frontmatter.location}</Time>
          </IconWrapper>
          <IconWrapper>
            <Time>
              {node.frontmatter.startDate} - {node.frontmatter.endDate || 'present'}
            </Time>
          </IconWrapper>
        </SubInfo>
        <DataText dangerouslySetInnerHTML={{ __html: node.html }} />
        <TechStack>
          {node.frontmatter.techStack &&
            node.frontmatter.techStack.map((tech) => <TechItem>{tech}</TechItem>)}
        </TechStack>
      </ExperienceBox>
    </Wrapper>
  );
}

export default Experience;
