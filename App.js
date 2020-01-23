import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Router from './src/router';
import { colors } from './styles';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

export default () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    <Router />
  </>
);
