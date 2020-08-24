import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import { SEO } from 'components';
import { Container } from './HomePage.styled';

const HomePage = ({ intl }) => (
  <Container>
    <SEO title={intl.formatMessage({ id: 'title' })} />

    <Link to="/about/">{intl.formatMessage({ id: 'go_page2' })}</Link>
  </Container>
);

export default HomePage;
