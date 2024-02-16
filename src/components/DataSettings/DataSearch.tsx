import { Heading, Box, Select, Input, Checkbox, Button, AccordionItem, AccordionButton, AccordionPanel, Flex } from '@chakra-ui/react'
import SearchAlgorithm from '../../types/SearchAlgorithm';
import { useState } from 'react';
import { useData } from '../../contexts/dataContext';
import { Column } from '../../types/Data';
import searchData from '../../utils/searchAlgorithms';
import { useDuration } from '../../contexts/durationContext';

const DataSearch = () => {
  const { data, setFilteredData } = useData();
  const { setDuration } = useDuration()

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
    const startTime = performance.now();
    const result = searchData(data!, selectedOptions.column, selectedOptions.searchAlgorithm, selectedOptions.searchParam, selectedOptions.strictMode);
    setFilteredData(result!);
    const endTime = performance.now();
    const duration = endTime - startTime;
    setDuration({algorithm: selectedOptions.searchAlgorithm, durationTime: duration, searchedRecords: data!.length})
  }

  return (
    <AccordionItem>
      <AccordionButton>
        <Box as='span'>
          <Heading size={"sm"}>Searching Algorithms</Heading>
        </Box>
      </AccordionButton>
      <AccordionPanel>
        <Box>
          <Flex>
            <Select
              size={"sm"}
              p={2}
              placeholder='Select a Search Algortihm'
              onChange={(e) => setSelectedOptions({ ...selectedOptions, searchAlgorithm: e.target.value as SearchAlgorithm })}
            >
              {possibleSearchAlgorithms.map((algorithm, index) => (
                <option key={index}>{algorithm}</option>
              ))}
            </Select>
            <Select
            size={"sm"}
              p={2}
              placeholder='Select a Column'
              onChange={(e) => setSelectedOptions({ ...selectedOptions, column: e.target.value as Column })}
            >
              {possibleColumns?.map((column, index) => (
                <option key={index}>{column}</option>
              ))}
            </Select>
          </Flex>
          <Flex w={"100%"}>
            <Input
              m={2}
              value={selectedOptions.searchParam}
              size={"sm"}
              w={"47%"}
              placeholder={"Search Param"}
              onChange={(e) => {
                setSelectedOptions({ ...selectedOptions, searchParam: e.target.value });
              }}
            />
            <Checkbox
              title='Strictmode'
              colorScheme='teal'
              ml={2}
              pt={2}
              pb={2}
              checked={selectedOptions.strictMode}
              onChange={(e) => setSelectedOptions({ ...selectedOptions, strictMode: e.target.checked })}
            >
              Strict-Search
            </Checkbox>
          </Flex>
          <Button
            ml={2}
            size={"sm"}
            onClick={onHandleSearch}
            >
            Search
          </Button>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default DataSearch
