import { AccordionButton, AccordionItem, AccordionPanel, Box, Button, Heading, Select } from '@chakra-ui/react'
import SortAlgorithm from '../../types/SortAlgorithm'
import { useData } from '../../contexts/dataContext'
import { useState } from 'react';
import { Column } from '../../types/Data';
import sortData from '../../utils/sortAlgorithms';
import { useDuration } from '../../contexts/durationContext';

const DataSorter = () => {
    const { data, filteredData, setFilteredData } = useData();
    const { setDuration } = useDuration();

    const possibleSortAlgorithms: SortAlgorithm[] = [
        'BubbleSort',
        'SelectionSort',
        'InsertionSort',
        'QuickSort'
    ];

    const [selectedOptions, setSelectedOptions] = useState({
        column: "" as Column,
        sortAlgorithm: "" as SortAlgorithm
    });

    let possibleColumns = null;
    if(data) possibleColumns = Object.keys(data[0]);

    const onHandleSort = () => {
        if(!filteredData) alert("no Data fetched!")
        const startTime = performance.now();
        const result = sortData(selectedOptions.sortAlgorithm, filteredData!, selectedOptions.column);
        setFilteredData(result!);
        const endTime = performance.now();
        const duration = endTime - startTime;
        setDuration({algorithm: selectedOptions.sortAlgorithm, durationTime: duration, searchedRecords: filteredData!.length})
    }

  return (
    <AccordionItem>
      <AccordionButton>
        <Box as='span' flex={1} textAlign="left">
          <Heading size={"sm"}>Sort Algorithms</Heading>
        </Box>
      </AccordionButton>
      <AccordionPanel>
        <Box>
          <Select 
            p={2} 
            placeholder='Select a Column'
            onChange={(e) => setSelectedOptions({...selectedOptions, column: e.target.value as Column})}
            >
              {possibleColumns?.map((column, index) => (
                  <option key={index}>{column}</option>
              ))}
          </Select>

          <Select 
            p={2} 
            placeholder='Select a Sort Algortihm'
            onChange={(e) => setSelectedOptions({...selectedOptions, sortAlgorithm: e.target.value as SortAlgorithm})}
            >
              {possibleSortAlgorithms.map((algorithm, index) => (
                  <option key={index}>{algorithm}</option>
              ))}
          </Select>

          <Button 
            onClick={onHandleSort}
            >
              Sort
          </Button>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default DataSorter
