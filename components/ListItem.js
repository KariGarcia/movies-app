
import { Image, Box, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';


const ListItem = ({ id, title, image, popularity, releaseDate, type }) => {
  const navigation = useNavigation();
  const imageUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${image}`;

  const goToDetails = () => {
    navigation.navigate('Details', { title, id, type });
  }
  return <Box key={id} {...styles.container}>
    <Image source={{ uri: imageUrl }} alt={title} size="xl" />
    <Box width="60%">
      <Text fontWeight="bold">{title}</Text>
      <Text>Popularity: {popularity}</Text>
      <Text>Release Date: {releaseDate}</Text>
      <Button maxWidth="100%" onPress={goToDetails}>More Details</Button>
    </Box>
  </Box>
};

const styles = {
  container: {
    display: 'flex',
    gap: '16px',
    flexDirection: 'row',
    alignItems: 'center'
  },
};

export default ListItem;