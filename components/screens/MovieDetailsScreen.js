import { Box, Text, Button, Image } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect } from 'react';
import { fetchDetail } from "../../api/moviesApi";
import { useState } from 'react';


const MovieDetailsScreen = ({ route }) => {
  const { id, type } = route.params;
  const [details, setDetails] = useState({});
  const { title, poster_path: image, overview, popularity, releaseDate } = details;
  const imageUrl = image ? `https://image.tmdb.org/t/p/w440_and_h660_face${image}` : '';

  const getMovie = async () => {
    const resp = await fetchDetail(id);
    setDetails(resp);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  

  return (
    <Box {...styles.container}>
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
      { imageUrl ? <Image source={{ uri: imageUrl }} alt={title} size="2xl" /> : ''}
      <Text>{overview}</Text>
      <Box>
        <Text>Popularity: {popularity} | Release Date: {releaseDate}</Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: '16px',
    paddingTop: '36px',
    gap: '36px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
  }
});

export default MovieDetailsScreen;