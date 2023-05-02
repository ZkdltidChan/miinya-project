import { GridItemProps } from "@chakra-ui/react";
export type RoleProps = {
    // [key: string]: any;
    required: boolean;
    message: string;
}

export type FrmProps = {
    [key: string]: any;
}

export type FormDataProps = {
    [key: string]: any;
}


export type FormValueProps = {
    text: string;
    value: number;
}

export type ImageUploadProps = {
    isRequired: boolean | undefined;
    maxCount: number;
}

export type FormItemsProps = {
    col: GridItemProps["colSpan"];
    form: any;
    role?: RoleProps;
    frm: FrmProps;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export type FormTypeProps = {
    type: 'switch' | 'text' | 'number' | 'password' | 'editor' | 'date' | 'image' | 'singleImage' |'options';
    label?: string;
    key: string;
    placeholder?: string;
    prop?: any;
    values?: FormValueProps[];
}

export interface FormProps<T> {
    title?: string;
    isNew?: boolean;
    rules?: any;
    formData?: FormDataProps;
    formType?: FormTypeProps[];
    subUrl?: string;
    api?: string;
    callbackUrl?: string;
    hasSubmit?: boolean;
    hasUpdate?: boolean;
    hasPreview?: boolean;
    hasDelete?: boolean;
    hasToast?: boolean;
    totastTitle?: string;
    totastDescription?: string;
    submitButtonTitle?: string,
    updateButtonTitle?: string,
    deleteButtonTitle?: string,
}