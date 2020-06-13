import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Components from './src/screens/ComponentsScreen'
import Excersize1 from './src/screens/Excersize1'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: Components,
    Excersize1: Excersize1

  },
  {
    initialRouteName: "Excersize1",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
