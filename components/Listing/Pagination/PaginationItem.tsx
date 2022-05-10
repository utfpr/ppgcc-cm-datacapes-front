import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void
}

export function PaginationItem({
    isCurrent = false,
    number,
    onPageChange
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                w='4'
                disabled
                _disabled={{
                    bgColor: 'yellow.orange',
                    cursor: 'default'
                }}
                _hover={{
                    bgColor: 'yellow.dark',
                }}
            >
                {number}
            </Button>
        )
    }
    return (
        <Button
            size='sm'
            fontSize='xs'
            w='4'
            bg='yellow.light'
            _hover={{
                bg: 'yellow.skin'
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}