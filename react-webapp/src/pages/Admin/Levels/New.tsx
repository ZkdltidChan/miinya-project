import { Box, Button, Container, HStack, Image, Text, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Heading, Divider } from '@chakra-ui/react'
import { Form } from '../../../components/Admin/Form/Form';

export default () => {
    return (
        <>
            <Container w={['xs', 'md']} shadow='xl' p={5} rounded='35px'>
                <Form
                    callbackUrl='/admin/levels'
                    api='/api/v1/levels'
                    hasUpdate={true}
                    title="Levels New"
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
                    formData={{}}
                />
            </Container>
        </>
    )
}
