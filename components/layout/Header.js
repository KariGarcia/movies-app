import { Box, Text } from "native-base";
import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';


const Header = () => {
  return <>
    <StatusBar style="auto" />
    <Box safeAreaTop {...styles.container}>
      <Text {...styles.text}>
        Movies App
      </Text>
    </Box>
  </>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    backgroundColor: '#2e3e51',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Header;