import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading } from '@chakra-ui/react'
import { useState } from 'react';
import { ImageList, DataProp } from '../../components/ImageList/ImageList';
import useGetProducts from '../../hooks/useGetExample'


type TabProp = {
    title: string,
    data_list: DataProp[]
}

const fakeDatas: DataProp[] = [
    { src: "https://i.imgur.com/h9JrUlI.jpeg", title: "hihi", description: "test" },
    { src: "https://i.imgur.com/fDg3GNj.jpeg", title: "hihi", description: "test" },
    { src: "https://i.imgur.com/z63Notu.jpeg", },
    { src: "https://i.imgur.com/Q61pFn3.jpeg", },
    { src: "https://i.imgur.com/JXuTixc.jpeg" },
    { src: "https://i.imgur.com/MeS5OtI.jpeg" },
]

const fakeTabDatas: TabProp[] = [
    {
        title: "실시간 순위",
        data_list: [
            {
                src: "https://i.imgur.com/h9JrUlI.jpeg",
                title: "1.실시간 순위 예시 타이틀",
                description: "test test test"
            },
            {
                src: "",
                title: "2.실시간 순위 예시 타이틀",
                description: "test test test"
            },
            {
                src: "",
                title: "3.실시간 순위 예시 타이틀",
                description: "test test test"
            },
        ]
    },
    {
        title: "이번 주 신작",
        data_list: [
            {
                src: "https://i.imgur.com/h9JrUlI.jpeg",
                title: "1.이번 주 신작 예시 타이틀",
                description: "description1"
            },
            {
                src: "https://i.imgur.com/h9JrUlI.jpeg",
                title: "2.이번 주 신작 예시 타이틀",
                description: "description1"
            },
            {
                src: "",
                title: "3.이번 주 신작 예시 타이틀",
                description: "description1"
            },
            {
                src: "",
                title: "4.이번 주 신작 예시 타이틀",
                description: "description1"
            },
        ]
    },
    {
        title: "카테고리 추천",
        data_list: [
            {
                src: "",
                title: "1.카테고리 추천 예시 타이틀",
                description: "description1"
            },
            {
                src: "",
                title: "2.카테고리 추천 예시 타이틀",
                description: "description1"
            },
            {
                src: "",
                title: "3.카테고리 추천 예시 타이틀",
                description: "description1"
            },
            {
                src: "",
                title: "4.카테고리 추천 예시 타이틀",
                description: "description1"
            },
        ]
    },
    {
        title: "내가보던",
        data_list: [
            {
                src: "",
                title: "title1",
                description: "description1"
            },
            {
                src: "",
                title: "title1",
                description: "description1"
            },
            {
                src: "",
                title: "title1",
                description: "description1"
            },
        ]
    },
]


export const Home = () => {
    const tabs = ["실시간 순위", "이번 주 신작", "카테고리 추천", "내가보던"]

    // api requrst with hooks
    const { example, isLoading, error } = useGetProducts();
    console.log(process.env.REACT_APP_API_HOST);

    const [tabIndex, setTabIndex] = useState<number>(0);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Box>
                <VStack spacing="18px">
                    {example?.data}
                    <ImageList display='one' size="300px" data_list={fakeDatas} />
                    <VStack pt="20px" w="100%" px="10px">
                        <Button w="100%"> 상단 띠배너 영역 </Button>
                        <Button bg="blue.500" rounded={"5px"} w="100%"> Admob </Button>
                    </VStack>
                    <Tabs
                        px="10px"
                        variant='enclosed'
                        index={tabIndex}
                        onChange={(index) => setTabIndex(index)}
                    >
                        <TabList>
                            {fakeTabDatas.map((tab, index) => {
                                return (
                                    <Tab
                                        key={index}
                                        bg={tabIndex == index ? "gray.500" : ""}
                                        color={tabIndex == index ? "white" : "gray.500"}
                                    >
                                        {tab.title}
                                    </Tab>
                                )
                            })
                            }
                        </TabList>
                        <TabPanels>

                            {fakeTabDatas.map((tab, index) => {
                                return (
                                    <TabPanel key={index} px={0}>
                                        {tab.data_list.map((data, index) => {
                                            return (
                                                <HStack key={index} w="100%">
                                                    <Image boxSize="80px" src={data.src} fallbackSrc='https://via.placeholder.com/80'></Image>
                                                    <VStack align="start" p={5} w="300px">
                                                        <Heading overflow="revert">{data.title}</Heading>
                                                        <Text>{data.description}</Text>
                                                    </VStack>
                                                </HStack>
                                            )
                                        })}
                                    </TabPanel>
                                )
                            })
                            }
                        </TabPanels>
                    </Tabs>
                    <ImageList display='column' size="100px" data_list={fakeDatas} title="너가 좋아 할 것 같아서 모아봤어" />
                    <ImageList display='column' size="100px" data_list={fakeDatas} title="너가 좋아 할 것 같아서 모아봤어2" />
                    <ImageList display='column' size="100px" data_list={fakeDatas} title="너가 좋아 할 것 같아서 모아봤어3" />
                </VStack>
            </Box>
        </>
    )
}
