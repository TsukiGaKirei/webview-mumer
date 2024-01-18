import React from 'react';
import { ChakraProvider,Grid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const LogMqttDataTable = ({  data }) => {
 

  return (
    <ChakraProvider>
       {console.log(data?.mqtt_log)}
            <Table  border={5} >
            <Thead>
              
              <Th>ID</Th>
              <Th>Topic</Th>
              <Th>Message</Th>
              <Th>Published At</Th>


           </Thead>
            <Tbody>
              {data?.mqtt_log?.map((item)=>{
                return (
                  <Tr>
                    <Td>{item?.id}</Td>
                    <Td>{item?.topic}</Td>
                    <Td>{item?.message}</Td>
                    <Td>{item?.published_at}</Td>
                  </Tr>
                )
              })}

            </Tbody>
          </Table>
         
     
    </ChakraProvider>
    
  );
};

export default LogMqttDataTable;
