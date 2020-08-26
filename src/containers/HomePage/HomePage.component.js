import React, { useEffect } from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';

import { MainTabs } from 'components';

const useStyles = makeStyles({
  root: {
    '& .MuiFormControl-root': {
      marginBottom: '15px',
    },
  },
  paper: {
    margin: '48px 0',
  },
  bottomNavigation: {
    backgroundColor: '#f5f5f5',
  },
});

const HomePage = ({ getAllCurrencies }) => {
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      await getAllCurrencies();
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <MainTabs />
      </Paper>
    </Container>
  );
};

export default HomePage;
