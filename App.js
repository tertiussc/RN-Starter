import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Components from './src/screens/ComponentsScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: Components
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
