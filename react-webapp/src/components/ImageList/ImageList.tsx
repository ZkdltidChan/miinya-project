import { AddIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import {
    Box,
    Button,
    HStack,
    VStack,
    Image,
    Flex,
    Text,
    Heading,
} from "@chakra-ui/react"
import { FC, useState } from "react"

export type DataProp = {
    src: string,
    title?: string,
    description?: string,
}

export type ImageListProps = {
    display: "column" | "row" | "one",
    size: string,
    data_list: DataProp[],
    title?: string,
    maxList?: number,
}

const ImageListOne: FC<ImageListProps> = ({ size, data_list }) => {
    const [imageIndex, setImageIndex] = useState<number>(0)
    return (
        <Box pos="relative">
            <Flex justifyContent="center">
                <HStack pos="absolute" bottom="5" >
                    {data_list.map((data, index) => {
                        return (
                            <Button p={0} rounded="full" bg={imageIndex == index ? "gray.100" : "gray.300"} minW="0px" w="12px" h="12px" key={index} onClick={() => setImageIndex(index)} />
                        )
                    })
                    }
                </HStack>
            </Flex>
            <Image
                boxSize={size}
                src={data_list[imageIndex].src}
            />
        </Box>
    )
}

const ImageListCol: FC<ImageListProps> = ({ title, size, data_list }) => {
    return (
        <Box p={5}>
            <VStack align="start">{title && <Text  color="black">{title}</Text>}
                <HStack textAlign="left">
                    {data_list.map((data, index) => {
                        return (
                            <VStack key={index} spacing="5px">
                                <Image
                                    backgroundSize="contain"
                                    src={data.src}
                                    boxSize={size} />
                                <Box w="100%" h="55px">
                                    {data.title && <Text>{data.title}</Text>}
                                    {data.description && <Text>{data.description}</Text>}
                                </Box>
                            </VStack>
                        )
                    })}
                </HStack>
            </VStack>
        </Box>
    )
}

const ImageListRow: FC<ImageListProps> = ({ data_list }) => {
    return (
        <></>
    )
}

export const ImageList: FC<ImageListProps> = ({ title, size, display, data_list, }) => {
    if (display === "one") {
        return <ImageListOne size={size} display={display} data_list={data_list} />
    } else if (display === "column") {
        return <ImageListCol title={title} size={size} display={display} data_list={data_list} />
    } else {
        return <></>
    }

}

