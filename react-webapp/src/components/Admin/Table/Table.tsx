import { TableProps } from "./types"
import {
    Button,
    HStack,
    Select,
    Table as ChakraTable,
    Heading,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
} from "@chakra-ui/react";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export const Table: React.FC<TableProps> = (props) => {
    const {
        isPagination = true,
        totalPages = 0,
        pageSize = 30,
        currentPage = 1,
        totalCount = 0,
        isLoading = false,
        title = '',
        columns = [],
        hasCustomRow = false,
        dataSource = '',
        subUrl = '',
        hasNew = false,
        hasSort = false,
        sortTypes = [],
        sortOrder = '오름차순',

        hasChangeOrder = false,

        hasSearch = false,
        searchPlaceholder = '검색어를 입력하세요.',
        hasDownload = false,
        downloadLoading = false,
        downloadTitle = '',
    } = props;

    const {
        getTableProps,
        headerGroups,
        prepareRow,
        rows
    } = useTable({ columns, data: dataSource })

    return (
        <>
            {title && (<Heading>{title}</Heading>)}
            <Container w='md' className='for-header'>
                <HStack>
                    {
                        hasSort && sortTypes && (
                            <Select>
                                {
                                    sortTypes.map((sortType, index) => {
                                        return (
                                            <option key={index}>{sortType}</option>
                                        )
                                    })}
                            </Select>
                        )
                    }
                    {
                        hasSearch && (
                            <Button>
                                검색
                            </Button>
                        )
                    }
                    {
                        hasNew && (
                            <Button as={Link} to={'/' + subUrl + '/new'}>
                                NEW
                            </Button>
                        )
                    }
                </HStack>
            </Container>
            <TableContainer>
                <ChakraTable {...getTableProps()}>
                    <Thead>
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Td {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {

                                        return (
                                            <Td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </ChakraTable>
            </TableContainer>
            {
                isPagination && (
                    <Container size='md' p={5}>
                            <Pagination
                                rowsPerPage={0}
                                onPageChange={console.log}
                                count={totalCount}
                                page={currentPage}

                            />

                    </Container>
                )
            }
        </>
    )
}