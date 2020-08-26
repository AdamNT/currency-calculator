import { connect } from 'react-redux';
import { injectIntl } from 'gatsby-plugin-intl';

import HomePage from './HomePage.component';
import { getAllCurrencies } from '../../duck/actions/currencyAction';

const mapStateToProps = () => {};

const mapDispatchToProps = {
  getAllCurrencies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(HomePage));
