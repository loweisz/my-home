import React from 'react';
import Layout from '../components/layout';

import * as SC from '../styles/pages.sc';

const IndexPage = () => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.InfoStarter>
          <SC.TextSection>
            <SC.TextBlock>
              <SC.HeaderText>Hi, my name is lorenz</SC.HeaderText>
              <span>
                This issue has gone quiet. Spooky quiet. 👻 We get a lot of issues, so we currently close
                issues after 30 days of inactivity. It’s been at least 20 days since the last update here. If
                we missed this issue or if you want to keep it open, please reply here. You can also add the
                label "not stale" to keep this issue open! As a friendly reminder: the best way to see this
                issue, or any other, fixed is to open a Pull Request. Check out gatsby.dev/contributefor more
                information about opening PRs, triaging issues, and contributing! Thanks for being a part of
                the Gatsby community! 💪💜
              </span>
            </SC.TextBlock>
          </SC.TextSection>
        </SC.InfoStarter>
      </SC.Wrapper>
    </Layout>
  );
};

export default IndexPage;
