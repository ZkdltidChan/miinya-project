import { Flex, Image, Progress, Button, Container, HStack, VStack, Input, Box, Spinner, IconButton, } from "@chakra-ui/react";
import { MdClose, MdSearch, MdFileUpload } from 'react-icons/md'
import { useContext, useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { FormDataProps, ImageUploadProps } from "./types";
import { FormItemsContext } from "./FormItems";
import { ImageUploadResponseProps, IMAGE_UPLOAD_URL } from "../../../api/config";


export const MutipleImageUploader = ({ isRequired, maxCount }: ImageUploadProps) => {
    const {
        setImageIsUploading,
        // setImageUrlList,
        imgIsUploading,
        setFormData,
        form,
        frm,
        role,

    } = useContext(FormItemsContext);


    const { multipleFetchData, responseList } = useAxios<ImageUploadResponseProps>()
    const [uploadImages, setUploadImages] = useState<File[] | []>([]);
    const [fileLimit, setFileLimit] = useState<boolean>(false);
    const [previews, setPreviews] = useState<string[] | []>([])

    const handleDeleteFile = (index: number) => {
        const newUploaded = [...uploadImages.slice(0, index), ...uploadImages.slice(index + 1)];
        setUploadImages(newUploaded);
        if (newUploaded.length < maxCount) { setFileLimit(false); }
    }

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            // event.target.file
            let limitExceeded = false;
            const chosenFiles = Array.prototype.slice.call(event.target.files)
            const uploaded = [...uploadImages]
            if (uploaded.length < maxCount) {
                chosenFiles.some((file: File) => {
                    {
                        if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                            uploaded.push(file);
                            if (uploaded.length === maxCount) { setFileLimit(true); }
                            if (uploaded.length > maxCount) {
                                alert(`You can only upload ${maxCount} images.`);
                                setFileLimit(false);
                                limitExceeded = true;
                                return true;
                            }
                        }
                    }
                })
            }
            if (!limitExceeded) { setUploadImages(uploaded); }
        }
    };

    const handleUpload = async () => {
        setImageIsUploading(true);
        try {
            const headers = { "Content-Type": "multipart/form-data" };
            const datas = uploadImages.map((file) => {
                const formData = new FormData();
                formData.append("file", file);
                return formData
            })
            await multipleFetchData("POST", IMAGE_UPLOAD_URL, datas, headers);

        } catch (err) {
            // setAllError('err');
        } finally {
            setImageIsUploading(false);
        }
    }


    useEffect(() => {
        // const p = [...previews]
        previews.forEach((preview) => {
            URL.revokeObjectURL(preview)
        })
        const p: string[] = []
        if (!uploadImages) {
            setPreviews([])
            return
        } else {
            uploadImages.map((file: File, index: number) => {
                const objectUrl = URL.createObjectURL(file)
                p.push(objectUrl)
            })
        }
        if (p) { setPreviews(p) }

    }, [uploadImages])

    useEffect(() => {
        console.log(responseList)
        const imageList = responseList.map(
            (response) =>
                response.data.uri
        )
        // setImageUrlList(imageList);
        if (maxCount == 1) {
            console.log('imageList[0]', imageList[0])
            setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: imageList[0] }))
        } else {
            setFormData((prev: FormDataProps) => ({ ...prev, [frm.key]: imageList }))
        }
    }, [responseList])


    return (
        <>
            <Container >
                <VStack>
                    <HStack>
                        {previews.map((preview, index) => {
                            return (
                                <Box
                                    // justify='center'
                                    // align='center'
                                    // cursor='pointer'
                                    rounded='5px'
                                    shadow='xl'
                                    key={index}
                                >
                                    <Flex pos='relative' align='center' justify='center'>
                                        <HStack pos='absolute'>
                                            <IconButton size='30px' rounded='full' icon={<MdSearch size='20px' />} aria-label='preview' />
                                            <IconButton size='30px' rounded='full' icon={<MdClose size='20px' />} aria-label='closed' onClick={() => handleDeleteFile(index)} />
                                        </HStack>
                                        {/* {imgIsUploading &&
                                            <Progress pos='absolute' bottom='0px' w='65px' h='2px' isIndeterminate />
                                        } */}
                                        {/* {uploadPercentList[index] != 0 &&
                                            <Progress pos='absolute' bottom='0px' w='65px' h='2px' value={uploadPercentList[index]} />
                                        } */}
                                        <Image src={preview} width='65px' height='65px' />
                                    </Flex>
                                    {/* TODO filename help => xx...xx.png */}
                                    {/* <p>{uploadImages[index].name}</p> */}
                                </Box>
                            )
                        })}
                    </HStack>
                    <Flex as='label'
                        justify='center'
                        align='center'
                        cursor='pointer'
                        rounded='5px'
                        border='2px dashed #1475cf; '
                        p={1}
                    // height='70px'
                    // width='70px'
                    >
                        <Input
                            isRequired={isRequired}
                            type='file'
                            accept='image/*'
                            multiple
                            hidden
                            onChange={handleFileSelection}
                            disabled={fileLimit}
                        />
                        <HStack>
                            <MdFileUpload color='#1475cf' size='28px' />

                            {/* <p>{!fileLimit ? 'Image Upload' : 'Max Upload'}</p> */}
                        </HStack>
                    </Flex>
                    <Button isLoading={imgIsUploading} onClick={() => handleUpload()}>Upload</Button>
                </VStack>
            </Container>
        </>
    )
}
