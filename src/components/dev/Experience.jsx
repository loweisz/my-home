import React, {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { Company, DataText, ExperienceBox,TimeLineElement, Wrapper, IconWrapper, TechItem, SubInfo, Time, TechStack, Title, ShowMoreToggle, ToggleContainer } from './experience.styles';
import { FiUser } from 'react-icons/fi';

function Experience({ node }) {
  const [showMore, setShowMore] = useState(false);

  const toggle = () => {
    setShowMore(s => !s);
  }

  console.log(node.frontmatter)

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
          <ToggleContainer>
            <ShowMoreToggle onClick={toggle}>Show {showMore ? "less" : "more"}</ShowMoreToggle>
          </ToggleContainer>
        </SubInfo>
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              style={{ overflow: "hidden"}}
            >
              <DataText dangerouslySetInnerHTML={{ __html: node.html }} />
              <TechStack>
                {node.frontmatter.techStack && node.frontmatter.techStack.map(tech => (
                  <TechItem>{tech}</TechItem>
                ))}
              </TechStack>
            </motion.div>
          )}
        </AnimatePresence>
      </ExperienceBox>
    </Wrapper>
  );
}

export default Experience;
