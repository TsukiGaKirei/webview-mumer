import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,Heading
  
} from '@chakra-ui/react';
import {TimeIcon} from '@chakra-ui/icons';  
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import RoomDataTable from './RoomDataTable'; // Create separate components for each tab
import UsersDataTable from './UsersDataTable';
import UsersRoomDataTable from './UsersRoomDataTable';
import LogMqttDataTable from './LogMqttDataTable';
import axios from 'axios';
// ... (previous imports)

function App() {
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-smart-room-2itxykb6ra-et.a.run.app/api/auth/webview/get');
      setData(response.data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Initial data fetch
    fetchData();

    // Refresh data every 10 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = () => {
    // Manually trigger data refresh
    fetchData();

  };

  return (
    <ChakraProvider theme={theme}>
            <Text textAlign="right" fontSize="sm">Last updated: {lastUpdated?.toLocaleString()}</Text>
            <ColorModeSwitcher textAlign="right" marginLeft="0"/>
            <Button onClick={()=>handleRefresh()}><TimeIcon/></Button>
      <Box textAlign="center" fontSize="xl">
        <Heading>Skripsi M0519041 Gemilang Cahyaning Adi MuMeR Smart Room </Heading>
        <Grid minH="100vh" p={3} >
          <VStack spacing={8}>
          <Tabs h={5}>
  <TabList>
    <Tab>
      Users Data
    </Tab>
    <Tab>User Room Data</Tab>
    <Tab>Room Data</Tab>
    <Tab>MQTT LOG</Tab>

  </TabList>

  <TabPanels position="center">
  <TabPanel>
      <UsersDataTable data={data}/>
    </TabPanel>
    <TabPanel>
      <UsersRoomDataTable data={data}/>
    </TabPanel>
    <TabPanel>
    <RoomDataTable data={data}/>
    </TabPanel>
    <TabPanel>
    <LogMqttDataTable data={data}/>
    </TabPanel>
  </TabPanels>
</Tabs>
          </VStack>
          {/* Repeat VStack for other tabs */}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
