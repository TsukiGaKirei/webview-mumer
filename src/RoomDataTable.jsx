import React from 'react';
import { ChakraProvider,Grid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const RoomDataTable = ({  data }) => {
 

  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        {data?.rooms_data.map((item)=>{
          return (
            <Table isNumeric border={5} >
            <Thead>
            <Th colSpan="2" >
            {item?.name}
             
            </Th>
           </Thead>
            <Tbody>
              <Tr>
                <Td>RID</Td>
                <Td>{item?.rid}</Td>
              </Tr>
              <Tr>
                <Td>AC Status</Td>
                <Td>{item?.ac?"On":"Off"}</Td>
              </Tr>
              <Tr>
                <Td>AC Temp</Td>
                <Td>{item?.ac_temp}</Td>
              </Tr>
              <Tr>
                <Td>Door Status</Td>
                <Td>{item?.door?"Unlocked":"Locked"}</Td>
              </Tr>
              <Tr>
                <Td>Lamp Status</Td>
                <Td>{item?.lamp?"On":"Off "}</Td>
              </Tr>
              <Tr>
                <Td>Last Updated</Td>
                <Td>{item?.last_updated}</Td>
              </Tr>
              <Tr>
                <Td>Last Updated By</Td>
                <Td>{item?.last_updated_by===0?"":item?.last_updated_by}</Td>
              </Tr>            
            </Tbody>
          </Table>
          )
        })}
     
      </Grid>
    </ChakraProvider>
    
  );
};

export default RoomDataTable;
