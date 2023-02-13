
import React from 'react';
import { Box, Center, Select, CheckIcon } from 'native-base';

const Dropdown = ({value, options, onChange}) => {
  return <Center>
      <Box maxW="300">
        <Select selectedValue={value.value} minWidth="200" accessibilityLabel="" placeholder="" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => onChange(itemValue)}>
          {options.map(option => <Select.Item key={option.value} label={option.label} value={option.value} />)}
        </Select>
      </Box>
    </Center>;
};

export default Dropdown;