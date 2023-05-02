import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Heading, HStack, useToast } from '@chakra-ui/react';
import { FormItems } from './FormItems';
import axios from 'axios';
import { FormProps, FormDataProps, FormTypeProps, FrmProps } from './types';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';

export const FormContext = React.createContext({
    setImageIsUploading: (value: boolean) => { },
    setImageUrlList: (value: string[]) => { },
    imageUrlList: [] as string[],
    imgIsUploading: false,
});
export const Form = <T,>({...props}: FormProps<T>) => {
// export const Form: React.FC<FormProps<T>> = <T,>(props) => {
    const {
        title = '',
        isNew = false,
        rules = {},
        formData = {},
        formType = [],
        api = '',
        callbackUrl = null,
        hasUpdate = false,
        hasPreview = false,
        hasDelete = false,

        hasToast = true,
        totastTitle = 'Create Success',
        totastDescription = '',

        submitButtonTitle = 'Submit',
        updateButtonTitle = 'Update',
        deleteButtonTitle = 'Delete',
    } = props;

    const { fetchData, response, isLoading, error } = useAxios<T>()
    const [imgIsUploading, setImageIsUploading] = useState(false);
    const [imageUrlList, setImageUrlList] = useState<string[]>([]);

    const navigate = useNavigate();
    const toast = useToast()
    // default the props

    const initForm = (formType: FormTypeProps[], formData: FormDataProps) => {
        // 如果有form data, 將form data 塞入form

        const frm: FrmProps = {};
        if (formData.id) {
            frm.id = formData.id;
        }
        formType.forEach((h) => {
            frm[h.key] = formData[h.key];
        });
        console.log(frm)
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
        console.log(form)
        console.log(api)
        if (form.id && form.id > 0) {
            await fetchData('PATCH', api, form)
        } else {
            await fetchData('POST', api, form)
        }
        if (hasToast) {
            if (!error) {
                toast({
                    title: totastTitle,
                    position: 'top',
                    description: totastDescription,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                if (callbackUrl) {
                    navigate(callbackUrl);
                }
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

    // useEffect(() => {
    //     console.log('imageUrlList', imageUrlList)
    //     console.log('imgIsUploading', imgIsUploading)
    // }, [imageUrlList, imgIsUploading])

    return (
        <FormContext.Provider value={{
            setImageIsUploading: setImageIsUploading,
            setImageUrlList: setImageUrlList,
            imageUrlList: imageUrlList,
            imgIsUploading: imgIsUploading,
        }}>
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
                        />
                    ))}
                    <br />
                    <HStack justify='center'>
                        <Button onClick={() => navigate(-1)}>Back</Button>
                        {
                            hasDelete && form['id'] && (
                                <Button colorScheme='red'> {deleteButtonTitle} </Button>
                            )
                        }
                        {
                            hasUpdate && (
                                <Button isLoading={isLoading} type="submit">
                                    {form.id ? updateButtonTitle : submitButtonTitle}
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
        </FormContext.Provider>
    );
};
