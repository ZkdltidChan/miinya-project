import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Heading, HStack, useToast } from '@chakra-ui/react';
import { FormItems } from './FormItems';
import axios from 'axios';
import { FormProps, FormDataProps, FormTypeProps, FrmProps } from './types';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
export const Form: React.FC<FormProps> = (props) => {
    const { fetchData, response, isLoading, error } = useAxios()

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
    const frmRef = useRef(null);
    useEffect(() => {
        setForm(initForm(formType, formData));
        console.log(form)
    }, []);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (form.id && form.id > 0) {
            // DO UPDATE
            // const res = await axios.put(subUrl, form)
        } else {
            fetchData('POST', api, form)
            if (response && !error) {
                toast({
                    title: totastTitle,
                    position: 'top',
                    description: totastDescription,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: 'Error!!',
                    position: 'top',
                    description: error,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }

    }

    return (
        <Box p={5}>
            <form
                ref={frmRef}
                onSubmit={handleSubmit}
            >
                {title && <Heading textAlign='center'>{title}</Heading>}
                {formType.map((frm) => (
                    <FormItems
                        key={frm.key}
                        col={5}
                        role={rules[frm.key]}
                        frm={frm}
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
                            <Button isLoading={isLoading} type="submit">
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
