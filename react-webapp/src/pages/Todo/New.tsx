import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading, Divider } from '@chakra-ui/react'
import { Form } from '../../components/Admin/Form/Form';

export default () => {
    return (
        <>
            <Container w={['xs', 'md']} shadow='xl' p={5} rounded='35px'>
                <Form
                    api='/api/v1/todos'
                    hasUpdate={true}
                    title="Todo"
                    rules={
                        { title: { required: true, message: 'Please insert', trigger: 'onSubmit' }, }
                    }
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
                        {
                            label: 'Image',
                            key: 'image_url',
                            type: 'img',
                            prop: 'image_url',
                        },
                    ]}
                    formData={{}}
                />
            </Container>
        </>
    )
}
