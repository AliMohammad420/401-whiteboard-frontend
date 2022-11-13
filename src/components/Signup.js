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
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'


function Signup () {
     const { handleSignUp, setSignup } = useAuth();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
   
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Flex
                direction={'column'}
                rounded={'lg'}
                bg={formBackground}
                boxShadow={'lg'}
                p={12}
            >
                <Heading textAlign={'center'} size={'lg'} fontWeight={'normal'}>
                    Sign up for an account
                </Heading>
                <form onSubmit={handleSignUp}>
                    <FormControl mt={6}>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            placeholder="username"
                            required
                        />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            placeholder="email"
                            required
                        />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                        />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            required
                        />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Role</FormLabel>
                        <Select name="role" placeholder="Select option">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </Select>
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
                        }}
                    >
                        Sign up
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
                     onClick={() => setSignup( false )} 
                >
                    Cancel
                </Button>
        
            </Flex>
        </Flex>
    );
};


export default Signup;