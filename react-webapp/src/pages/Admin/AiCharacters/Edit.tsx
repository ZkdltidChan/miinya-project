import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading, Divider } from '@chakra-ui/react'
import { Form } from '../../../components/Admin/Form/Form';
import { useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { useEffect, useState } from 'react';

type AiCharactersProps = {
    data: {
        id: number,
        name: string,
        description: string,
        profile_image: string,
        images: string[],
    }[]
}

type LevelsProps = {
    data: {
        id: number,
        name: string,
    }[]
}




export default () => {
    let { id } = useParams();
    const { fetchData, response, isLoading, error } = useAxios<AiCharactersProps>()
    const { fetchData: fetchLevels, response: levelsResponse, isLoading: levelsIsLoading, error: levelsError } = useAxios<LevelsProps>()
    const [tabIndex, setTabIndex] = useState<number>(0);
    useEffect(() => {
        fetchLevels('GET', '/api/v1/ai_characters')
    }, [])

    useEffect(() => {
        fetchData('GET', `/api/v1/ai_characters/${id}`)
    }, [])

    return (
        <>
            {isLoading ? <div>loading...</div> :
                <HStack>
                    <Container w={['xs', 'md']} shadow='xl' rounded='35px'>
                        <Tabs
                            px="10px"
                            variant='enclosed'
                            index={tabIndex}
                            onChange={(index) => setTabIndex(index)}
                        >
                            <TabList>
                                <Tab>
                                    Edit
                                </Tab>
                                <Tab>
                                    Image Add
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Form
                                        callbackUrl='/admin/ai_characters'
                                        api={`/api/v1/ai_characters/${id}`}
                                        hasUpdate={true}
                                        title="Ai Character Edit"
                                        rules={
                                            { name: { required: true, message: 'Please insert', trigger: 'onSubmit' }, }
                                        }
                                        formType={[
                                            {
                                                label: 'Name',
                                                key: 'name',
                                                type: 'text',
                                                placeholder: 'Enter the characters name',
                                            },
                                            {
                                                label: 'Description',
                                                key: 'description',
                                                type: 'text',
                                                prop: 'description',
                                                placeholder: 'Enter your description',
                                            },
                                        ]}
                                        formData={
                                            response?.data
                                        }
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Form
                                        api='/api/v1/ai_characters/images'
                                        hasUpdate={true}
                                        title="Images Uploader"
                                        rules={
                                            { image_url: { required: true, message: 'Please insert', trigger: 'onSubmit' }, }
                                        }
                                        formType={[
                                            {
                                                label: 'Levels',
                                                key: 'levels_id',
                                                type: 'options',
                                                values: levelsResponse?.data?.map((item) => ({
                                                    text: item.name,
                                                    value: item.id,
                                                }))
                                            },
                                            {
                                                label: 'Image',
                                                key: 'images',
                                                type: 'image',
                                                placeholder: 'Enter the characters name',
                                            },
                                        ]}
                                        formData={
                                            response?.data
                                        }
                                    />

                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Container>

                </HStack>
            }
        </>

    )
}
