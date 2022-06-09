import React from 'react';
import Layout from '../components/layout';
import { FiCalendar, FiClock } from 'react-icons/fi';
import {getPostBySlug} from '../lib/api'
import { DataText } from '../components/dev/experience.styles';
import { InfoStarter } from '../styles/pages.sc';
import {
  Title,
  SubTitle,
  BlogPostBox,
  HeroImage,
  BlogHeader,
  PostTextSection,
  Info,
  InfoBlock
} from '../styles/blog-post.sc';
import ShareWidget from '../components/shareWidget/ShareWidget';


import BlogFooter from '../components/blogFooter/BlogFooter';
import Newsletter from '../components/newsletter/Newsletter';
import HitCounter from '../components/hitCounter/HitCounter';
import ContinueReading from '../components/continueReading/ContinueReading';

const BlogPostTemplate = ({ post }) => {
  // const posts = post.html.split("NEWSLETTER");

  return (
    <Layout fixed={false}>
      <InfoStarter>
        {/*<SEO*/}
        {/*  title={post.frontmatter.title}*/}
        {/*  blogTitle={post.frontmatter.title}*/}
        {/*  description={post.frontmatter.abstract}*/}
        {/*  pathname={post.fields.slug}*/}
        {/*  image={image}*/}
        {/*/>*/}
        <PostTextSection>
          <BlogPostBox className="shown">
            {/*<ShareWidget location={props.location} post={post} />*/}
            <article>
              <BlogHeader>
                <HitCounter slug={post.slug} />
                <Title>{post.title}</Title>
                <SubTitle>{post.abstract}</SubTitle>
                <InfoBlock>
                  <Info>
                    <div>
                      <FiCalendar /> <span>{post.date}</span>
                    </div>
                    <div>
                      {/*<FiClock /> <span>{post.timeToRead}min</span>*/}
                    </div>

                  </Info>
                </InfoBlock>
              </BlogHeader>
              {post.coverImage && (
                <HeroImage>
                  <img
                    title="Avatar image"
                    alt="Avatar Image"
                    src={post.coverImage.url}
                  />
                </HeroImage>
              )}
              {/*<DataText dangerouslySetInnerHTML={{ __html: posts[0] }} />*/}
              {/*<Newsletter />*/}
              {/*{posts[1] && <DataText dangerouslySetInnerHTML={{ __html: posts[1] }} />}*/}
              {/*<BlogFooter location={props.location} post={post} />*/}
              {/*<hr />*/}
              {/*<hr />*/}
              {/*<ContinueReading />*/}
            </article>
          </BlogPostBox>
        </PostTextSection>
      </InfoStarter>
    </Layout>
  );
};

export default BlogPostTemplate;

export async function getStaticPaths() {
  return {
    paths: [
      '/five-common-mistakes-writing-react-components-with-hooks-in-2020',
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log({ context });
  const post = (await getPostBySlug(context.params.slug)) ?? []
  console.log({ post });
  return {
    props: { post },
  }
}



