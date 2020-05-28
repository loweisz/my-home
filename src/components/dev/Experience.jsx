import React, { useEffect, useContext } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import {
  Company,
  ExperienceDataText,
  ExperienceBox,
  TimeLineElement,
  Wrapper,
  IconWrapper,
  TechItem,
  SubInfo,
  Time,
  TechStack,
  Title,
  StackTitle,
} from './experience.styles';
import { FiUser } from 'react-icons/fi';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useRef } from 'react';
import { useCallback } from 'react';

function Experience({ node, observer }) {
  const el = useRef();

  const observeIntersection = useCallback(() => {
    if (!observer) return;
    if (observer === 'not_available') {
      el.current.classList.add('shown');
      return;
    }
    observer.observe(el.current);
  }, [observer]);

  const { isDark } = useContext(ThemeManagerContext);

  useEffect(() => {
    observeIntersection();
  }, [observeIntersection, observer, isDark]);

  return (
    <Wrapper>
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
              <FiExternalLink />
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
        <ExperienceDataText dangerouslySetInnerHTML={{ __html: node.html }} />
        <StackTitle>Technologies:</StackTitle>
        <TechStack>
          {node.frontmatter.techStack && (
            <>
              {node.frontmatter.techStack.map((tech) => (
                <TechItem>{tech}</TechItem>
              ))}
            </>
          )}
        </TechStack>
      </ExperienceBox>
    </Wrapper>
  );
}

export default Experience;
