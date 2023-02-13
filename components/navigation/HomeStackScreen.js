import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';



const HomeStackScreen = (route) => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{  headerShown: false }}  />
      <HomeStack.Screen name="Details" component={MovieDetailsScreen} options={({ route }) => ({
          title: route.params?.title,
          headerBackTitle: 'Back to List',
      })}/>
    </HomeStack.Navigator>
  );
}


export default HomeStackScreen;