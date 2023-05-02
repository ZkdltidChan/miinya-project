import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading, Divider } from '@chakra-ui/react'
import { useEffect } from 'react';
import { AI_CHARACTERS_URL } from '../../../api/config';
import { Form } from '../../../components/Admin/Form/Form';
import useAxios from '../../../hooks/useAxios';


export default () => {
    return (
        <>
            <Container w={['xs', 'md']} shadow='xl' p={5} rounded='35px'>
                <Form
                    callbackUrl='/admin/ai_characters'
                    api={AI_CHARACTERS_URL}
                    hasUpdate={true}
                    title="Ai Characters New"
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
                        {
                            label: 'Character profile',
                            key: 'profile_image',
                            type: 'singleImage',
                            prop: 'profile_image',
                        },
                    ]}
                    formData={{}}
                />
            </Container>
        </>
    )
}
