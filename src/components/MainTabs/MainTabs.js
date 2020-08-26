import React, { useState } from 'react';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import {
  AttachMoney as AttachMoneyIcon,
  History as HistoryIcon,
  ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import { injectIntl } from 'gatsby-plugin-intl';

import { TabPanel, CalculatorTab, HistoryTab } from 'components';

const useStyles = makeStyles({
  bottomNavigation: {
    backgroundColor: '#f5f5f5',
  },
});

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const MainTabs = ({ intl }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabPanel value={value} index={0}>
        <CalculatorTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HistoryTab />
      </TabPanel>

      <Tabs
        value={value}
        onChange={handleChange}
        calssName={classes.bottomNavigation}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label={intl.formatMessage({ id: 'calculator' })}
          icon={<AttachMoneyIcon />}
          {...a11yProps(0)}
        />
        <Tab
          label={intl.formatMessage({ id: 'history' })}
          icon={<HistoryIcon />}
          {...a11yProps(1)}
        />
        <Tab
          label={intl.formatMessage({ id: 'chart' })}
          disabled
          icon={<ShowChartIcon />}
          {...a11yProps(2)}
        />
      </Tabs>
    </>
  );
};

export default injectIntl(MainTabs);
