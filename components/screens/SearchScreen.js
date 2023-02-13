import { View, Text, Button, Box, FormControl, Input, Stack, WarningOutlineIcon, HStack } from "native-base";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import ListItem from "../ListItem";
import { search } from '../../api/moviesApi';


const SearchScreen = ({ navigation }) => {

  const filterOptions = [
    { label: 'Movie', value: 'movie' },
    { label: 'Multi', value: 'multi' },
    { label: 'Tv', value: 'tv' },
  ]
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(null);

  const getResults = async () => {
    console.info(query, category)
    if (query && category) {
      const response = await search(query, category.value);
      setMovies(response.results);
    }
  }

  return (
    <Box {...styles.container}>
      <FormControl isRequired>
          <Stack mx="3" width="90%" justifyContent="center">
            <FormControl.Label>Search Movie/ Tv Show Name</FormControl.Label>
            <Input type="text" placeholder="ie. James Bond, CSI" onChange={(event) => setQuery(event.target.value)} />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Type a Movie/ Tv Show Name
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <FormControl isRequired>
          <Stack mx="3" width="90%">
            {/* <Input type="password" defaultValue="12345" placeholder="password" /> */}
            <FormControl.Label>Choose Search Type</FormControl.Label>
            <Stack mx={"2"} space="3" direction="row">
              <Stack mx={"2"} space="3">
                <Dropdown options={filterOptions} value={category || ''} onChange={(cat) => {
                  setCategory(filterOptions.find(option => option.value === cat));
                }}/>
              </Stack>
              <Button onPress={getResults}>Search</Button>
            </Stack>
            { !category && (
              <FormControl.HelperText>
                Please select a search type
              </FormControl.HelperText>
            )}
          </Stack>
        </FormControl>
      {movies.map(movie => (
        <ListItem 
        key={movie.id}
        id={movie.id} 
        title={movie.title} 
        releaseDate={movie.release_date} 
        popularity={movie.popularity} 
        overview={movie.overview} 
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

export default SearchScreen;