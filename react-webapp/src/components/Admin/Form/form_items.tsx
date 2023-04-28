import { Button, FormControl, FormLabel, Checkbox, HStack, Input, InputGroup, InputRightElement, NumberInput, Switch, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FormDataProps, FormItemsProps } from "./types";


export const FormItems = ({
    col,
    form,
    formData,
    frm,
    setFormData,
}: FormItemsProps) => {
    // Password
    const [passwordShow, setPasswordShow] = useState(false)
    const handleShowPassword = () => setPasswordShow(!passwordShow)

    // Checkbox
    const [checkedItems, setCheckedItems] = useState([false, false])

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
            case 'img':
                return (
                    <img src={formData[frm.key]} />
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
        }
    }
    return (
        <FormControl p={1}>
            <FormLabel>{frm.label}</FormLabel>
            {renderFormItem()}
        </FormControl>
    )
}
