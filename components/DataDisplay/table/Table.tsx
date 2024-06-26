"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { MdDelete, MdEdit } from "react-icons/md";
import { BiRename } from 'react-icons/bi';
import { EnhancedTableToolbar } from './Toolbar';
import MenuPopupState from '../../Actions/MenuPopupState';
import { Head, HeadCell } from './Head';
import { stableSort, getComparator } from '@/utils/table'

export type Order = 'asc' | 'desc';

interface TableDataBase {
    id: number;
}

type TableData<Data> = Data & TableDataBase;

interface Props<Data> {
    onRowClick: (rowId: number) => void;
    rows: TableData<Data>[];
    headCells: readonly HeadCell<Data>[];
    orderByInitial?: keyof Data;
}

export default function EnhancedTable<Data>({ onRowClick, rows, headCells, orderByInitial }: Props<Data>) {
    const [order, setOrder] = React.useState<Order>('desc');
    const [orderBy, setOrderBy] = React.useState<keyof Data | undefined>(orderByInitial);
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows: TableData<Data>[] = React.useMemo(
        () =>
            // @ts-ignore
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ) as TableData<Data>[],
        [order, orderBy, page, rowsPerPage, rows],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'small'}
                    >
                        <Head<Data>
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                // @ts-ignore
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        // onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                                onClick={(event) => handleClick(event, row.id as number)}
                                            />
                                        </TableCell>
                                        {Object.entries(row)
                                            .filter(([key]) => key !== 'id' && key !== 'actions') // Filter out 'id' and 'actions'
                                            .map(([key, value], index) => (
                                                <TableCell
                                                    key={`${row.id}-${key}`}
                                                    onClick={() => onRowClick(row.id)}
                                                    align="left"
                                                    padding={index === 0 ? "none" : "normal"} // Apply 'padding="none"' only to the first element
                                                >
                                                    {value as React.ReactNode}
                                                </TableCell>
                                            ))}
                                        <TableCell align="left">
                                            <MenuPopupState menuItems={[
                                                {
                                                    onClick: () => onRowClick(row.id as number),
                                                    component: <div
                                                        key={`edit-${row.id}`}
                                                        className='flex items-center gap-2'>
                                                        <MdEdit /> Edit
                                                    </div>
                                                },
                                                { disabled: true, component: <div key={`rename-${row.id}`} className='flex items-center gap-2'><BiRename /> Rename</div> },
                                                { disabled: true, component: <div key={`delete-${row.id}`} className='flex items-center gap-2 text-red-600'><MdDelete /> Delete</div> }
                                            ]} />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 33 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box >
    );
}
