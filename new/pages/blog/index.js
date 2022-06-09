
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import { Blogs, HeaderText, InfoStarter, TextBlock, TextSection, Wrapper } from '../../styles/pages.sc';
import BlogPart from '../../components/blog/BlogPart';
import Newsletter from '../../components/newsletter/Newsletter';


export default function Blog({ preview, allPosts }) {
  return (
    <Layout>
      <Wrapper>
        <InfoStarter>
          <TextSection>
            <TextBlock>
              <HeaderText>Here are some of my recent ideas and thoughts:</HeaderText>
            </TextBlock>
          </TextSection>
          <TextSection>
            <Blogs>
              {allPosts.map((post) => (
                <BlogPart key={post.slug} post={post} />
              ))}
            </Blogs>
          </TextSection>
          <Newsletter />
        </InfoStarter>
      </Wrapper>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  console.log({ allPosts });
  return {
    props: { preview, allPosts },
  }
}
