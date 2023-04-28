import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading, Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Form } from '../../components/Admin/Form/Form';
import useGetAxios from '../../hooks/useGetAxios';

type Todos = {
    [key: string]: any;
}

export default () => {
    const { response, isLoading, error } = useGetAxios('/api/v1/todos')
    return (
        <>
            {response && response.data.map((item: Todos) => {
                return (
                    <HStack>
                        {Object.keys(item).map((key: string) => (
                            <Text key={key}>{key}: {item[key]}</Text>
                        ))}
                    </HStack>
                )
            })}
            <Container w={['xs', 'md']} shadow='xl' p={5} rounded='35px'>
                <Form
                    api='/api/v1/todos'
                    hasUpdate={true}
                    title="Todo"
                    formType={[
                        {
                            label: 'Title',
                            key: 'title',
                            type: 'text',
                            placeholder: 'Enter your title',
                        },
                        {
                            label: 'Description',
                            key: 'description',
                            type: 'text',
                            prop: 'description',
                            placeholder: 'Enter your description',
                        },
                    ]}
                    formData={{}}
                />
            </Container>
        </>
    )
}
