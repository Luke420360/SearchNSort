import { Box, Button, Card, CardBody, CardFooter, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useData } from "../contexts/dataContext"
import Data, { Column } from "../types/Data";
import { useState } from "react";
import axios from "axios";

type ApiResponse = {count: number, entries: Data[]}

const DataTable = () => {

    const { data, setData, filteredData, setFilteredData } = useData();
    const [loading, setLoading] = useState(false);
    let columnHeaders;
    if(data) columnHeaders = Object.keys(data[0]);

    const getNewData = async () => {
        try {
            setLoading(true);
            const newData = await axios.get<ApiResponse>("https://api.publicapis.org/entries",{
                responseType: 'json'
            });
            setData(newData.data.entries);
            setFilteredData(newData.data.entries);
            setLoading(false);
        } catch (error) {
            console.log("Failed Fetching data")
        }
    }

    return (
        <Card variant={'outline'}>
            <CardBody pb={0}>
                {filteredData?<TableContainer>
                    <Box maxHeight={450} overflow='auto'>
                        <Table size="xs" colorScheme="teal" overflow={"scroll"} width="100%">
                            <Thead>
                                <Tr>
                                    {columnHeaders!.map((header, index) => (
                                        <Th key={index}>{header}</Th>
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredData.map((row, index) => (
                                    <Tr key={index}>
                                        {Object.keys(row).map((col, index) => (
                                            <Td key={index} maxW="100px" overflow="hidden" whiteSpace="pre-wrap" textOverflow="ellipsis">{row[col as Column]}</Td>
                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </TableContainer>: "No fetched Data!"}
            </CardBody>
            <CardFooter>
                <Flex w={"100%"} align={'center'}>
                    <Text w={"50%"}>
                        {`${filteredData?.length || 0} records`}
                    </Text>
                    <Flex w={'50%'} justifyContent={"end"}>
                        <Button bg="teal" onClick={getNewData} isLoading={loading} color={'white'}>
                            {'Fetch'}
                        </Button>
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    );
};

export default DataTable;
