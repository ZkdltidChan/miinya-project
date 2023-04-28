import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading, Divider } from '@chakra-ui/react'
import { useState } from 'react';
import { Form } from '../../components/Admin/Form/Form';

export const Login = () => {
    return (
        <>
            <Container w={['xs','md']} shadow='xl' p={5} rounded='35px'>
                <Form
                    hasUpdate={true}
                    title="Login"
                    formType={[
                        {
                            label: 'User Name',
                            key: 'Username',
                            type: 'text',
                            placeholder: 'Enter your name',
                        },
                        {
                            label: 'User Password',
                            key: 'password',
                            type: 'password',
                            prop: 'password',
                            placeholder: 'Enter your password',
                        },
                    ]}
                    formData={{}}
                />
                <Divider/>
                <VStack p={5}>
                    <Button disabled={true}>Login with Kakao: TODO</Button>
                </VStack>
            </Container>
        </>
    )
}
