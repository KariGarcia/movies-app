import { View, Text, Button, Box } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Dropdown from "../Dropdown";
import ListItem from "../ListItem";
import { fetchList } from '../../api/moviesApi';


const HomeScreen = ({ navigation }) => {

  const filterOptions = [
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Upcoming', value: 'upcoming' },
  ]
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(filterOptions[0]);

  const getMovies = async () => {
    const response = await fetchList(category.value);
    setMovies(response.results);
  }

  useEffect(() => {
    getMovies();
  }, [category]);

  return (
    <Box {...styles.container}>
      <Dropdown options={filterOptions} value={category} onChange={(cat) => {
        setCategory(filterOptions.find(option => option.value === cat));
      }}/>
      {movies.map(movie => (
        <ListItem 
          type='movie'
          key={movie.id}
          id={movie.id} 
          title={movie.title} 
          releaseDate={movie.release_date} 
          popularity={movie.popularity} 
          image={movie.poster_path} />
      ))}
    </Box>
  );
}

const styles = {
  container: {
    padding: '16px',
    display: 'flex',
    gap: '16px',
  },
};

export default HomeScreen;