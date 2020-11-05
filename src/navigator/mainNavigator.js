import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168286Navigator from '../features/UserProfile168286/navigator';
import Maps168267Navigator from '../features/Maps168267/navigator';
import Settings168245Navigator from '../features/Settings168245/navigator';
import Settings168230Navigator from '../features/Settings168230/navigator';
import NotificationList168229Navigator from '../features/NotificationList168229/navigator';
import Maps168228Navigator from '../features/Maps168228/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168286: { screen: UserProfile168286Navigator },
Maps168267: { screen: Maps168267Navigator },
Settings168245: { screen: Settings168245Navigator },
Settings168230: { screen: Settings168230Navigator },
NotificationList168229: { screen: NotificationList168229Navigator },
Maps168228: { screen: Maps168228Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
