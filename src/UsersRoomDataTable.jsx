import React from 'react';
import { ChakraProvider,Grid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const UsersRoomDataTable = ({  data }) => {
  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        {data?.user_room_data.map((item)=>{
          return (
            <Table isNumeric border={5} >
            <Thead>
            <Th colSpan={2}>
              User Room
            </Th>
           </Thead>
            <Tbody>
              <Tr>
                <Td>RID</Td>
                <Td>{item?.rid}</Td>
              </Tr>
              
              <Tr>
                <Td>UID</Td>
                <Td>{item?.uid}</Td>
              </Tr>
              <Tr>
                <Td>Desired Threshold</Td>
                <Td>{item?.desired_threshold}</Td>
              </Tr>
              <Tr>
                <Td>Distance</Td>
                <Td>{item?.distance}</Td>
              </Tr>
             
              <Tr>
                <Td>Threshold</Td>
                <Td>{item?.threshold}</Td>
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

export default UsersRoomDataTable;
