import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { Table } from '../../../components/Admin/Table/Table';
import { useNavigate } from 'react-router-dom'
import { TabsResponseProps, TABS_URL } from '../../../api/config';
export default () => {

    const navigate =  useNavigate()
    const { fetchData, response, isLoading, error } = useAxios<TabsResponseProps>()
    useEffect(() => {
        fetchData('GET', TABS_URL)
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
                        Header: 'Name',
                        accessor: 'name',
                        key: 'name',
                    },
                    {
                        Header: 'Edit',
                        accessor: 'edit',
                        key: 'edit',
                        Cell: ({row}) => (
                            <Button onClick={()=>{navigate(`/admin/tabs/edit/${row.original.id}`)} }>Edit</Button>
                        ),
                    },
                ]}
                pageSize={10}
                totalCount={20}
                isLoading={isLoading}
                currentPage={1}
                subUrl='admin/tabs'
            />
        </>
    )
}
