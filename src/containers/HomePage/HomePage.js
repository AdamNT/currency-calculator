import { connect } from 'react-redux';
import { injectIntl } from 'gatsby-plugin-intl';

import HomePage from './HomePage.component';

const mapStateToProps = () => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage));
