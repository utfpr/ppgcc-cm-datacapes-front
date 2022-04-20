import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';

import { FcGraduationCap } from 'react-icons/fc';

export function CardAuthor() {
    return (
        <Box
            maxW={'260px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            position={'relative'}
            p={6}
            textAlign={'center'}>

            <Avatar
                size={'2xl'}
                src={
                    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4761043E8'
                }
                mb={4}
                pos={'relative'}
            />
            <Heading fontSize={'20px'} fontFamily={'body'}>
                Ivanilton Polato
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
                <Link href={'#'} color={'blue.400'}>
                    ivanilton@utfpr.br
                </Link>
            </Text>
            <Text fontWeight={600} color={'gray.500'} mb={4} fontSize={"12px"}>
                <Flex flexDir={"row"} >
                    <span style={{ paddingRight: '5px', alignItems: 'center' }}>
                        <FcGraduationCap size="25px" spacing={"10px"} />
                    </span>

                    UNIVERSIDADE TECNOLOGICA FEDERAL DO PARANÁ - UTFPR
                </Flex>
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6} >
                <Badge
                    px={2}
                >

                </Badge>
                <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    ciência da computação
                </Badge>

            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>

                <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'2xl'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Lattes
                </Button>
            </Stack>
        </Box >
    );
}