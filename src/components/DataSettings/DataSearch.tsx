import { Heading, Box, Select, Input, Checkbox, Button } from '@chakra-ui/react'
import SearchAlgorithm from '../../types/SearchAlgorithm';
import { useState } from 'react';
import { useData } from '../../contexts/dataContext';
import { Column } from '../../types/Data';
import searchData from '../../utils/searchAlgorithms';

const DataSearch = () => {
  const { data, setFilteredData } = useData();

  const possibleSearchAlgorithms: SearchAlgorithm[] = [
    'LinearSearch',
    'BinarySearch'
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    column: "" as Column,
    searchAlgorithm: "" as SearchAlgorithm,
    searchParam: "",
    strictMode: false
  });

  let possibleColumns = null;

  if (data) possibleColumns = Object.keys(data[0]);

  const onHandleSearch = () => {
    if (!data) alert("no Data fetched!")
    console.log(selectedOptions.searchParam)
    const result = searchData(data!, selectedOptions.column, selectedOptions.searchAlgorithm, selectedOptions.searchParam, selectedOptions.strictMode);
    setFilteredData(result!);
  }

  return (
    <Box p={2}>
      <Heading size={"sm"}>Searching Algorithms</Heading>
      <Select
        p={2}
        placeholder='Select a Search Algortihm'
        onChange={(e) => setSelectedOptions({ ...selectedOptions, searchAlgorithm: e.target.value as SearchAlgorithm })}
      >
        {possibleSearchAlgorithms.map((algorithm, index) => (
          <option key={index}>{algorithm}</option>
        ))}
      </Select>
      <Select
        p={2}
        placeholder='Select a Column'
        onChange={(e) => setSelectedOptions({ ...selectedOptions, column: e.target.value as Column })}
      >
        {possibleColumns?.map((column, index) => (
          <option key={index}>{column}</option>
        ))}
      </Select>
      <Input
        m={2}
        value={selectedOptions.searchParam}
        onChange={(e) => {
          setSelectedOptions({ ...selectedOptions, searchParam: e.target.value });
        }}
      />
      <Checkbox
        title='Strictmode'
        colorScheme='teal'
        pt={2}
        pb={2}
        w="100%"
        checked={selectedOptions.strictMode}
        onChange={(e) => setSelectedOptions({ ...selectedOptions, strictMode: e.target.checked })}
      >
        Strichtmode
      </Checkbox>
      <Button
        onClick={onHandleSearch}
      >
        Search
      </Button>
    </Box>
  )
}

export default DataSearch
