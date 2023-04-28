import { GridItemProps } from "@chakra-ui/react";
export type FrmProps = {
    [key: string]: any;
}

export type FormDataProps = {
    [key: string]: any;
}

export type FormItemsProps = {
    col: GridItemProps["colSpan"];
    form: any;
    formData: FormDataProps;
    frm: FrmProps;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export type FormTypeProps = {
    type: 'switch' | 'text' | 'number' | 'password' | 'editor' | 'date' | 'img';
    label?: string;
    key: string;
    placeholder?: string;
    prop?: any;
}

export type FormProps = {
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
}