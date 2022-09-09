import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";



export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20'></Icon>}
                        >
                            Criar novo usuário
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w='4'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink'></Checkbox>
                                </Td>
                                <Td>
                                    <Text fontWeight='bold'>Ricardo Temoteo</Text>
                                    <Text fontSize='sm' color='gray.300'>ricardo.ltemoteo@gmail.com</Text>
                                </Td>
                                <Td>
                                    <Text>04 de Abril 2021</Text>
                                </Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine}></Icon>}
                                    ></Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}