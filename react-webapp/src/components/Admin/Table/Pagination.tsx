import React from 'react'

import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'


type PaginationProps = {
    count: any;
    page: any;
    rowsPerPage: any;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    const { count, page, rowsPerPage, onPageChange } = props
    return (
        <div>
            <IconButton
                onClick={(e) => onPageChange(e, 0)}
                disabled={page === 0}
                aria-label="first page"
            >
                <ArrowLeftIcon />
            </IconButton>
            <IconButton
                onClick={(e)=>onPageChange(e, page - 1)}
                disabled={page === 0}
                aria-label="previous page"
            >
                <ChevronLeftIcon />
            </IconButton>

            {
                // TODO: Pages 
                //  <<,<, **TODO**  >,>>
            }
            
            <IconButton
                onClick={(e)=>onPageChange(e, page + 1)}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                <ChevronRightIcon/>
            </IconButton>
            <IconButton
                onClick={(e)=>onPageChange(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1))}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                <ArrowRightIcon />
            </IconButton>
        </div>
    )
}

export default Pagination