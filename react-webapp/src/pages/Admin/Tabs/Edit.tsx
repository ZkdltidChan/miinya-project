import { Box, Button, Container, HStack, VStack, Heading, Divider } from '@chakra-ui/react'
import { Form } from '../../../components/Admin/Form/Form';
import { useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import { useEffect, useState } from 'react';
import { TabsResponseProps, TABS_URL } from '../../../api/config';



export default () => {
    let { id } = useParams();
    const { fetchData, response, isLoading, error } = useAxios<TabsResponseProps>()

    useEffect(() => {
        fetchData('GET', `${TABS_URL}/${id}`)
    }, [])

    return (
        <>
            {isLoading ? <div>loading...</div> :
                <HStack>
                    <Container w={['xs', 'md']} shadow='xl' rounded='35px'>
                        <Form
                            callbackUrl='/admin/tabs'
                            api={`${TABS_URL}/${id}`}
                            hasUpdate={true}
                            title="Tabs Edit"
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
                            ]}
                            formData={
                                response?.data
                            }
                        />
                    </Container>
                </HStack>
            }
        </>

    )
}
