export type ColumnProps = {
    Header: string;
    accessor: string;
    key: string;
    width?: string;
}

export type TableProps = {
    isPagination?: boolean

    totalPages: string | number
    pageSize: string | number
    currentPage: string | number
    totalCount: string | number

    isLoading: boolean
    title?: string

    columns: ColumnProps[];
    hasCustomRow?: boolean

    dataSource: any

    subUrl: string

    hasNew?: boolean

    hasSort?: boolean
    sortTypes?: string[]

    hasChangeOrder?: boolean
    sortOrder?: string

    hasSearch?: boolean
    searchPlaceholder?: string

    hasDownload?: boolean
    downloadLoading?: boolean
    downloadTitle?: string
}
