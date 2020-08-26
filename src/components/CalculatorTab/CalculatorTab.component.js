import React, { useRef, useEffect } from 'react';
import {
  IconButton,
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import { Autorenew as AutorenewIcon } from '@material-ui/icons';
import * as Yup from 'yup';

import { SEO } from 'components';

const ReverseButton = () => {
  const {
    values: { currencyFrom, currencyTo },
    setFieldValue,
  } = useFormikContext();

  const switchCurrencies = () => {
    setFieldValue('currencyFrom', currencyTo);
    setFieldValue('currencyTo', currencyFrom);
  };

  return (
    <IconButton aria-label="reverse" onClick={switchCurrencies}>
      <AutorenewIcon />
    </IconButton>
  );
};

const CurrencySelect = ({
  name,
  label,
  emptyOptionMessage,
  currencies,
  errors,
  touched,
}) => {
  console.log(errors[name] && touched[name]);
  return (
    <FormControl fullWidth error={errors[name] && touched[name]}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Field component={Select} type="text" name={name}>
        <MenuItem value="">{emptyOptionMessage}</MenuItem>
        {currencies.map((currency, index) => (
          <MenuItem key={index} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {msg => <FormHelperText>{msg}</FormHelperText>}
      </ErrorMessage>
    </FormControl>
  );
};

const CalculatorTab = ({ intl, currencies, countTarget, convertCurrency }) => {
  const formikRef = useRef();

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue('countTarget', countTarget);
    }
  }, [countTarget]);

  const requiredTranslate = intl.formatMessage({ id: 'error.required' });
  return (
    <>
      <SEO title={intl.formatMessage({ id: 'calculator' })} />
      <Formik
        innerRef={formikRef}
        initialValues={{
          countBase: '',
          countTarget: '',
          currencyFrom: '',
          currencyTo: '',
        }}
        validationSchema={Yup.object({
          countBase: Yup.string().required(requiredTranslate),
          currencyFrom: Yup.string().required(requiredTranslate),
          currencyTo: Yup.string().required(requiredTranslate),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const { countBase, currencyFrom, currencyTo } = values;

          convertCurrency({ countBase, currencyFrom, currencyTo });
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <CurrencySelect
                  name="currencyFrom"
                  label={intl.formatMessage({ id: 'currencyHave' })}
                  emptyOptionMessage={intl.formatMessage({ id: 'select' })}
                  currencies={currencies}
                  errors={errors}
                  touched={touched}
                />
                <FormControl fullWidth>
                  <Field
                    component={TextField}
                    name="countBase"
                    type="number"
                    step="any"
                    label={intl.formatMessage({ id: 'amount' })}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2} container justify="center" alignItems="center">
                <ReverseButton />
              </Grid>
              <Grid item xs={5}>
                <CurrencySelect
                  name="currencyTo"
                  label={intl.formatMessage({ id: 'currencyNeed' })}
                  emptyOptionMessage={intl.formatMessage({ id: 'select' })}
                  currencies={currencies}
                  errors={errors}
                  touched={touched}
                />
                <FormControl fullWidth>
                  <Field
                    component={TextField}
                    name="countTarget"
                    type="number"
                    step="any"
                    disabled
                    label={intl.formatMessage({ id: 'amount' })}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                >
                  {intl.formatMessage({ id: 'convert' })}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CalculatorTab;
