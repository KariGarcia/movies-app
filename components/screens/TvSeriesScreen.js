import { View, Text, Button, Box } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Dropdown from "../Dropdown";
import ListItem from "../ListItem";
import { fetchList } from '../../api/moviesApi';


const TvSeriesScreen = ({ navigation }) => {

  const filterOptions = [
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Airing today', value: 'airing_today' },
    { label: 'Popular', value: 'popular' },
    { label: 'On the air', value: 'on_the_air' },
  ]
  const [tvSeries, setTvSeries] = useState([]);
  const [category, setCategory] = useState(filterOptions[0]);

  const getTvSeries = async () => {
    const response = await fetchList(category.value, 'tv');
    setTvSeries(response.results);
  }

  useEffect(() => {
    getTvSeries();
  }, [category]);

  return (
    <Box {...styles.container}>
      <Dropdown options={filterOptions} value={category} onChange={(cat) => {
        setCategory(filterOptions.find(option => option.value === cat));
      }}/>
      {tvSeries.map(show => (
        <ListItem 
          type='movie'
          key={show.id}
          id={show.id} 
          title={show.title} 
          releaseDate={show.release_date} 
          popularity={show.popularity} 
          image={show.poster_path} />
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

export default TvSeriesScreen;