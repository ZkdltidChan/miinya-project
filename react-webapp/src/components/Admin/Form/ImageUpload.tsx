import { Flex, Image, Progress, Button, Container, HStack, VStack, Input, Box, Spinner, } from "@chakra-ui/react";
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { ImageUploadProps } from "./types";

export const ImageUpload = ({ setImageURL, isRequired }: ImageUploadProps) => {
    const { fetchData, response, isLoading, error, uploadPercent } = useAxios()
    const [selectedFile, setSelectedFile] = useState<File | undefined>();
    const [preview, setPreview] = useState<string | undefined>()

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            const headers = {
                "Content-Type": "multipart/form-data"
            }
            const formData = new FormData();
            formData.append('file', event.target.files[0]);
            fetchData('POST', '/api/v1/upload', formData, headers);
        }
    };


    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        setImageURL(response?.data.uri)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile, response])

    return (
        <>
            <Container >
                <VStack>
                    <Flex as='label'
                        justify='center'
                        align='center'
                        cursor='pointer'
                        rounded='5px'
                        shadow='xl'
                        border='2px dashed #1475cf; '
                        height='180px'
                        width='180px'
                    >
                        <Input
                            isRequired={isRequired}
                            type='file'
                            accept='image/*'
                            hidden
                            onChange={handleFileSelection}
                        />
                        {preview ?
                            <>
                                <VStack position='relative'>
                                    {isLoading ?
                                        <>
                                            <Image src={preview} width='150px' height='150px' />
                                            <Box
                                                position='absolute'
                                                bottom='5px'
                                                w='80%'
                                                >
                                                {
                                                    <Progress
                                                        size='sm'
                                                        value={uploadPercent}
                                                    />
                                                }
                                            </Box>
                                        </>
                                        :
                                        <Image src={preview} width='150px' height='150px' />
                                    }
                                </VStack>
                            </>
                            :
                            <VStack>
                                <MdCloudUpload color='#1475cf' size={50} />
                                <p>Upload Image</p>
                            </VStack>
                        }
                    </Flex>
                </VStack>
            </Container>
        </>
    )
}
