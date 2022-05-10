import { Flex, Input, Icon } from '@chakra-ui/react'
import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {

    const searchInputRef = useRef<HTMLInputElement>(null)


    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxW={800}
            alignSelf="center"
            color="gray.200"
            position="relative"
            marginRight={"5"}
            bg="gray.200"
            borderRadius="full"
        >
            <Input
                color="dark.grey"
                variant="unstyled"
                placeholder="Buscar"
                _placeholder={{ color: "gray.400" }}
                ref={searchInputRef}
            />

            <Icon as={RiSearchLine} fontSize="20" color="dark.grey" />
        </Flex>
    )
}