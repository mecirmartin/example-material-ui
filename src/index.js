import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
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
import * as ReactDom from 'react-dom';
import * as ReactFeather from 'react-feather';
import * as ReactHelmet from 'react-helmet';
import * as ReactPerfectScrollbar from 'react-perfect-scrollbar';
import * as ReactRouter from 'react-router';
import * as ReactRouterDom from 'react-router-dom';
import * as Uuid from 'uuid';
import * as Yup from 'yup';

const dependencies = {
  '@material-ui': {
    core: MaterialUiCore,
    icons: MaterialUiIcons,
    lab: MaterialUiLab,
    styles: MaterialUiStyles
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
  'react-dom': ReactDom,
  'react-feather': ReactFeather,
  'react-helmet': ReactHelmet,
  'react-perfect-scrollbar': ReactPerfectScrollbar,
  'react-router': ReactRouter,
  'react-router-dom': ReactRouterDom,
  uuid: Uuid,
  yup: Yup
};

window.__deps = dependencies;
window.__inject_application = true;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
