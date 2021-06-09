import * as MaterialUiCore from '@material-ui/core';
import * as MaterialUiIcons from '@material-ui/icons';
import * as MaterialUiLab from '@material-ui/lab';
import * as MaterialUiStyles from '@material-ui/styles';
import * as ChartJs from 'chart.js';
import Clsx from 'clsx';
import * as Formik from 'formik';
import * as History from 'history';
import * as Lodash from 'lodash';
import * as Moment from 'moment';
import * as Nprogress from 'nprogress';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactChartjs2 from 'react-chartjs-2';
import * as ReactDOM from 'react-dom';
import * as ReactFeather from 'react-feather';
import * as ReactHelmet from 'react-helmet';
import * as ReactPerfectScrollbar from 'react-perfect-scrollbar';
import * as ReactRouter from 'react-router';
import * as ReactRouterDom from 'react-router-dom';
import * as Uuid from 'uuid';
import * as Yup from 'yup';
import * as ReactIntl from 'react-intl';
import * as MaterialUiDataGrid from '@material-ui/data-grid';
import gql from 'graphql-tag';
import * as Urql from 'urql';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const dependencies = {
  '@material-ui': {
    core: MaterialUiCore,
    icons: MaterialUiIcons,
    lab: MaterialUiLab,
    styles: MaterialUiStyles,
    'data-grid': MaterialUiDataGrid
  },
  'chart.js': ChartJs,
  clsx: Clsx,
  formik: Formik,
  history: History,
  lodash: Lodash,
  moment: Moment,
  nprogress: Nprogress,
  'prop-types': PropTypes,
  react: React,
  'react-chartjs-2': ReactChartjs2,
  'react-dom': ReactDOM,
  'react-feather': ReactFeather,
  'react-helmet': ReactHelmet,
  'react-perfect-scrollbar': ReactPerfectScrollbar,
  'react-router': ReactRouter,
  'react-router-dom': ReactRouterDom,
  uuid: Uuid,
  yup: Yup,
  'react-intl': ReactIntl,
  'graphql-tag': gql,
  urql: Urql
};

window.__deps = dependencies;

if (!window.__skip_render) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
