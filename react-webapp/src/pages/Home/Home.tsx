import { Box } from '@chakra-ui/react'
import useGetProducts from '../../hooks/useGetExample'

export const Home = () => {
    // api requrst with hooks
    const { example, isLoading, error } = useGetProducts();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Box>
                {example?.data}
            </Box>
        </>
    )
}
