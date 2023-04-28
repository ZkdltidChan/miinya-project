import { } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { Table } from '../../components/Admin/Table/Table';

export default () => {
    const { fetchData, response, isLoading, error } = useAxios()
    useEffect(() => {
        fetchData('GET', '/api/v1/todos')
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
                        // width: '10%'
                    },
                    {
                        Header: 'title',
                        accessor: 'title',
                        key: 'title',
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                        key: 'description',
                    },
                    {
                        Header: 'Image',
                        accessor: 'image_url',
                        key: 'image_url',
                    },
                ]}
                pageSize={10}
                totalCount={20}
                isLoading={isLoading}
                currentPage={1}
                subUrl='todo'
            />
        </>
    )
}
