import React, { useEffect } from 'react';
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
import { useRef } from 'react';
import { useCallback } from 'react';

function Experience({ node, observer }) {
  const el = useRef();

  useEffect(
    () => {
      observeIntersection();
    },
    [observeIntersection, observer],
  );

  const observeIntersection = useCallback(
    () => {
      if (!observer) return;
      if (observer === 'not_available') {
        el.current.classList.add('shown');
        return;
      }
      observer.observe(el.current);
    },
    [observer],
  );

  return (
    <Wrapper>
      <TimeLineElement />
      <ExperienceBox ref={el}>
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
