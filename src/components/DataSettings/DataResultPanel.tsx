import { Box, Heading, Text } from "@chakra-ui/react";
import { useDuration } from "../../contexts/durationContext"

const DataResultPanel = () => {
  const { duration } = useDuration();
  if(!duration) return null;

  return (
    <Box w="100%" pl={2} pb={2}>
        <Heading size={'md'}></Heading>
        <Text>
            {`Algorithm: ${duration?.algorithm}`}
        </Text>
        <Text>
            {`Passed: ${duration?.searchedRecords} records`}
        </Text>
        <Text>
            {`Duration: ${duration?.durationTime} milliseconds`}
        </Text>
    </Box>
  )
}

export default DataResultPanel
