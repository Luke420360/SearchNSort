import { Card, CardBody, Heading } from '@chakra-ui/react'
import DataSorter from './DataSorter';
import DataSearch from './DataSearch';


const DataSettings = () => {
  return (
    <>
      <Card>
        <CardBody>
          <Heading size={"md"} color={"teal"}>Settings</Heading>
          <DataSorter />
          <DataSearch />
        </CardBody>
      </Card>
    </>
  )
}

export default DataSettings
