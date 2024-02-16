import { Box, Flex, Spacer } from "@chakra-ui/react"
import DataSettings from "./components/DataSettings/DataSettings"
import DataTable from "./components/DataTable"
import Navbar from "./components/Navbar"
import { DataContextProvider } from "./contexts/dataContext"
import { DurationContextProvider } from "./contexts/durationContext"

function App() {

  return (
      <>
        <Navbar />
        <Flex>
          <DataContextProvider>
            <DurationContextProvider>
              <Box p={8} width="59%">
                <DataTable />
              </Box>
              <Spacer />
              <Box pr={8} pt={8} width="50%">
                <DataSettings />
              </Box>
            </DurationContextProvider>
          </DataContextProvider>
        </Flex>
      </>
  )
}

export default App