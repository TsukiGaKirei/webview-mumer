import React from 'react';
import { ChakraProvider,Grid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const UsersDataTable = ({  data }) => {
 

  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {data?.user_data.map((item)=>{
          return (
            <Table isNumeric border={5} >
            <Thead>
            <Th colSpan="2">
            {item?.name}
            </Th>
           </Thead>
            <Tbody>
              <Tr>
                <Td>UID</Td>
                <Td>{item?.uid}</Td>
              </Tr>
              <Tr>
                <Td>Desired Radius</Td>
                <Td>{item?.desired_radius}</Td>
              </Tr>
              <Tr>
                <Td>Desired Temp</Td>
                <Td>{item?.desired_temp}</Td>
              </Tr>
              <Tr>
                <Td>Desired Threshold</Td>
                <Td>{item?.desired_threshold}</Td>
              </Tr>
              <Tr>
                <Td>Smart Room Automation</Td>
                <Td>{item?.smart_room_automation?"Active":"Inactive"}</Td>
              </Tr>
              <Tr>
                <Td>Last Updated</Td>
                <Td>{item?.last_updated}</Td>
              </Tr>

            </Tbody>
          </Table>
          )
        })}
     
      </Grid>
    </ChakraProvider>
    
  );
};

export default UsersDataTable;
