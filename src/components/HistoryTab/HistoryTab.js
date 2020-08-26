import { connect } from 'react-redux';
import { injectIntl } from 'gatsby-plugin-intl';

import HistoryTab from './HistoryTab.component';

const mapStateToProps = ({ currency: { history } }) => ({
  history,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(HistoryTab));
