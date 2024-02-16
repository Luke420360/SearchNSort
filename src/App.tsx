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
        <Flex bg={"Menu"} p={2} pb={8} h={"100vh"}>
          <DataContextProvider>
            <DurationContextProvider>
              <Box p={8} width="59%">
                <DataTable />
              </Box>
              <Spacer />
              <Box pr={8} pt={8} width="41%">
                <DataSettings />
              </Box>
            </DurationContextProvider>
          </DataContextProvider>
        </Flex>
      </>
  )
}

export default App