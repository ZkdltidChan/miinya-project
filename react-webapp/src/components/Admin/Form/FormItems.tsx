import { Button, FormControl, FormLabel, Checkbox, HStack, Input, InputGroup, InputRightElement, NumberInput, Switch, Textarea, VStack, Container, Select } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { FormDataProps, FormItemsProps, FormValueProps } from "./types";
// import { ImageUpload } from "./ImageUpload";
import { MutipleImageUploader } from "./ImageUploader";


export const FormItemsContext = createContext<FormDataProps>({
    setImageIsUploading: (value: boolean) => { },
    setImageUrlList: (value: string[]) => { },
    imageUrlList: [] as string[],
    imgIsUploading: false,
    setFormData: (value: FormDataProps) => { },
    form: {},
    frm: {},
    role: {},
});


export const FormItems = ({
    form,
    frm,
    role,
    setFormData,

}: FormItemsProps) => {
    // Password
    const [passwordShow, setPasswordShow] = useState<boolean>(false)
    const handleShowPassword = () => setPasswordShow(!passwordShow)
    // Image Upload
    const [imgIsUploading, setImageIsUploading] = useState(false);
    const [imageUrlList, setImageUrlList] = useState<string[]>([]);
    // Checkbox

    const renderFormItem = () => {
        switch (frm.type) {
            case 'checkbox':
                return (
                    <>TODO</>
                )
            case 'password':
                return (
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            placeholder={frm.placeholder}
                            value={form[frm.key]}
                            onChange={(e) => {
                                setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: e.target.value }));
                            }}
                            type={passwordShow ? 'text' : 'password'}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                                {passwordShow ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                )
            case 'image':
                return (
                    <>
                        <MutipleImageUploader
                            maxCount={5}
                            isRequired={role?.required}
                        />
                    </>
                )
            case 'singleImage':
                return (
                    <>
                        <MutipleImageUploader
                            maxCount={1}
                            isRequired={role?.required}
                        />
                    </>
                )
            case 'switch':
                return (
                    // <FormControl prop={frm.prop}>
                    <Switch checked={form[frm.key]}
                        onChange={(value) => { setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: value })); }
                        } />
                );
            case 'text':
                return (
                    <Input
                        placeholder={frm.placeholder}
                        value={form[frm.key]}
                        onChange={(e) => {
                            setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: e.target.value }));
                        }}
                    />
                );
            case 'number':
                return (
                    <HStack>
                        <FormLabel>{frm.label}</FormLabel>
                        <NumberInput
                            w='70%'
                            placeholder={frm.placeholder}
                            value={form[frm.key]}
                            onChange={
                                (value) => {
                                    setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: value }));
                                }
                            }
                            min={frm.min} />
                    </HStack>
                );
            case 'editor':
                return (
                    <Textarea
                        placeholder={frm.placeholder}
                        value={form[frm.key]}
                        onChange={(e) => {
                            setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: e.target.value }));
                        }}
                    />
                )
            case 'options':
                return (
                    <Select
                        placeholder={frm.placeholder}
                        value={form[frm.key]}
                        onChange={(e) => {
                            setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: e.target.value }));
                        }}
                    >
                        {frm.values?.map((item: FormValueProps) => {
                            return (
                                <option value={item.value}>{item.text}</option>)
                        }
                        )}

                    </Select>
                )
        }
    }
    return (
        <FormItemsContext.Provider value={{
            setImageIsUploading: setImageIsUploading,
            setImageUrlList: setImageUrlList,
            imageUrlList: imageUrlList,
            imgIsUploading: imgIsUploading,
            form: form,
            frm: frm,
            role: role,
            setFormData: setFormData,
        }}>
            <FormControl p={1} isRequired={role?.required}>
                <FormLabel >{frm.label}</FormLabel>
                {renderFormItem()}
            </FormControl>
        </FormItemsContext.Provider>
    )
}
