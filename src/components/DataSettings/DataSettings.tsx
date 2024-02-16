import { Accordion, Box, Card, CardBody, Heading } from '@chakra-ui/react'
import DataSorter from './DataSorter';
import DataSearch from './DataSearch';
import DataResultPanel from './DataResultPanel';


const DataSettings = () => {
  return (
    <>
      <Card>
        <CardBody>
          <Box p={2}>
            <Heading size={"lg"} color={"teal"}>Settings</Heading>
          </Box>
          <DataResultPanel />
          <Accordion allowMultiple>
            <DataSorter />
            <DataSearch />
          </Accordion>
        </CardBody>
      </Card>
    </>
  )
}

export default DataSettings
