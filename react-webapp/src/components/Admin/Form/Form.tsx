import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Heading, HStack, useToast } from '@chakra-ui/react';
import { FormItems } from './form_items';
import axios from 'axios';
import { FormProps, FormDataProps, FormTypeProps, FrmProps } from './types';
import { Link, useNavigate } from 'react-router-dom';

export const Form: React.FC<FormProps> = (props) => {
    const navigate = useNavigate();
    const toast = useToast()
    // default the props
    const {
        title = '',
        isNew = false,
        rules = {},
        formData = {},
        formType = [],
        subUrl = '',
        api = '',
        callbackUrl = null,
        hasSubmit = true,
        hasUpdate = false,
        hasPreview = false,
        hasDelete = false,
        hasToast = true,
        totastTitle = 'Create Success',
        totastDescription = '',
    } = props;

    const initForm = (formType: FormTypeProps[], formData: FormDataProps) => {
        // 如果有form data, 將form data 塞入form
        const frm: FrmProps = {};
        frm.id = formData.id;
        formType.forEach((h) => {
            frm[h.key] = formData[h.key];
        });
        return frm;
    }

    const [form, setForm] = useState(() => initForm(formType, formData));
    const [isLoading, setIsLoading] = useState(false);
    const frmRef = useRef(null);
    useEffect(() => {
        setForm(initForm(formType, formData));
    }, []);


    const onSubmit = async (e: any) => {
        setIsLoading(true);
        console.log(form)
        if (form.id && form.id > 0) {
            // DO UPDATE
            // const res = await axios.put(subUrl, form)
        } else {
            try {
                const response = await axios.post(api, form)
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        toast({
            title: totastTitle,
            position: 'top', 
            description: totastDescription,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        setIsLoading(false);
    }

    return (
        <Box p={5}>
            <form
                ref={frmRef}
            >
                {title && <Heading textAlign='center'>{title}</Heading>}
                {formType.map((frm) => (
                    <FormItems
                        key={frm.key}
                        col={5}
                        frm={frm}
                        formData={formData}
                        form={form}
                        setFormData={setForm}
                    // subUrl={subUrl}
                    // fileList={fileList}
                    // checked={checked}
                    // imageChanged={imageChanged}
                    // fileChanged={fileChanged}
                    />
                ))}
                <br />
                <HStack justify='center'>
                    <Button onClick={() => navigate(-1)}>Back</Button>
                    {
                            hasDelete && form['id'] && (
                                <Button colorScheme='red'> Delete </Button>
                        )
                    }
                    {
                        hasUpdate && (
                            <Button isLoading={isLoading} onClick={onSubmit}>
                                {form.id ? 'Update' : 'Create'}
                            </Button>
                        )
                    }
                    {
                        hasPreview && (
                            <Button> Preview </Button>
                        )
                    }
                </HStack>
            </form>
        </Box>
    );
};
