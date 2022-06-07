import React, { useEffect, useContext, useRef, useCallback } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import {
  Company,
  ExperienceDataText,
  ExperienceBox,
  ExperienceTitle,
  Wrapper,
  IconWrapper,
  TechItem,
  SubInfo,
  Time,
  TechStack,
  Title,
  StackTitle,
} from './experience.styles';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

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
            <ExperienceTitle>{node.frontmatter.title}</ExperienceTitle>
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
