import * as React from 'react'

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { _Table, Container, Header, TableContainer, TableHeader, TD, TH, TR } from './style'

interface TableProps<T> {
    data: T[],
    columns: ColumnDef<T, any>[],
    leftComponent?: React.ReactNode,
}

export function Table<T>({ data, columns, leftComponent }: TableProps<T>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Container>
            <Header
                style={{ ...(leftComponent && { paddingBottom: '1rem' }) }}
            >
                {leftComponent}
            </Header>
            <TableContainer>
                <_Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TH key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TH>
                                ))}
                            </tr>
                        ))}
                    </TableHeader>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <TR key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TD key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TD>
                                ))}
                            </TR>
                        ))}
                    </tbody>
                </_Table>
            </TableContainer>
        </Container >
    )
}

export default Table