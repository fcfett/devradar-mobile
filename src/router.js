import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';
import { colors } from '../styles';

export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar'
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Perfil no Github'
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary
        }
      }
    }
  )
);
