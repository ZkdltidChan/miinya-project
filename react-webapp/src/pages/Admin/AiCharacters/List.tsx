import { Button, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { Table } from '../../../components/Admin/Table/Table';
import { useNavigate } from 'react-router-dom'
import { AI_CHARACTERS_URL, AiCharacterResponseProps } from '../../../api/config';
export default () => {
    const navigate = useNavigate()
    const { fetchData, response, isLoading, error } = useAxios<AiCharacterResponseProps>()
    useEffect(() => {
        fetchData('GET', AI_CHARACTERS_URL)
    }, [])

    return (
        <>
            <Table
                hasNew={true}
                hasSort={true}
                sortTypes={['asc', 'desc']}

                // 必須
                totalPages={response && response.data ? response.data.length : 0}
                dataSource={response?.data || []}
                columns={[
                    {
                        Header: 'ID',
                        accessor: 'id',
                        key: 'id',
                    },
                    {
                        Header: 'Name',
                        accessor: 'name',
                        key: 'name',
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                        key: 'description',
                    },
                    {
                        Header: 'Profile',
                        accessor: 'profile_image',
                        key: 'profile_image',
                        Cell: ({ row }) => {
                            console.log(row)
                            return (
                                <Image w='50px' h='50px' src={row.original.profile_image} />
                            )
                        }
                    },
            {
                Header: 'Edit',
            accessor: 'edit',
            key: 'edit',
            Cell: ({row}) => (
            <Button onClick={() => { navigate(`/admin/ai_characters/edit/${row.original.id}`) }}>Edit</Button>
            ),
                    },
                ]}
            pageSize={10}
            totalCount={20}
            isLoading={isLoading}
            currentPage={1}
            subUrl='admin/ai_characters'
            />
        </>
    )
}
