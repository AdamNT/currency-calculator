import { connect } from 'react-redux';
import { injectIntl } from 'gatsby-plugin-intl';

import CalculatorTab from './CalculatorTab.component';
import { convertCurrency } from '../../duck/actions/currencyAction';

const mapStateToProps = ({ currency }) => ({
  ...currency,
});

const mapDispatchToProps = {
  convertCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(CalculatorTab));
