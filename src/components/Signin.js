import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';



function Signin () {
    const { handleSignIn, setSignup } = useAuth();
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');

   

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Flex
                direction={'column'}
                rounded={'lg'}
                bg={formBackground}
                boxShadow={'lg'}
                p={12}>
                <Heading textAlign={'center'} fontSize={'4xl'}>
                    Sign in
                </Heading>
                <form onSubmit={handleSignIn}>
                    <FormControl mt={6}>
                        <FormLabel>Username</FormLabel>
                        <Input name="username" placeholder="username" />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" placeholder="password" />
                    </FormControl>
                    <Button
                        type="submit"
                        mt={4}
                        w={'full'}
                        bgGradient="linear(to-r, green.500,blue.500)"
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(to-r, green.500,blue.500)',
                            boxShadow: 'xl',
                        }}>
                        Sign in
                    </Button>
                </form>
                <Button
                    mt={4}
                    w={'full'}
                    bgGradient="linear(to-r, green.500,blue.500)"
                    color={'white'}
                    _hover={{
                        bgGradient: 'linear(to-r, green.500,blue.500)',
                        boxShadow: 'xl',
                    }}
                    onClick={() => setSignup(true)}>
                    Sign up
                </Button>
                
            </Flex>
        </Flex>
    );

}


    
export default Signin;