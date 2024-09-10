import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function UserTable(props) {
    const columns = [
        {id: 'rank', label: 'Rank', minWidth: 170},
        {id: 'avatarURL', minWidth: 30, align: 'center'},
        {
            id: 'username',
            label: 'Username',
            minWidth: 220,
            align: 'center',
        },
        {
            id: 'messageCount',
            label: 'Message',
            minWidth: 220,
            align: 'center',
        },
    ];

    function users() {
        return props.user.map((user, index) => {
            const rank = index + 1
            const username = user.username
            const userId = user.userId
            const messageCount = user.messageCount
            const avatarURL = props.avatar[userId]
            return {rank, avatarURL, username, messageCount}
        })
    }
    const rows = [
        ...users()
    ];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 500}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell style={{
                                                    padding: '2px 8px',
                                                    display: column.id === 'avatarURL' ? 'flex' : 'table-cell',
                                                    justifyContent: column.id === 'avatarURL' ? 'center' : 'inherit',
                                                    alignItems: column.id === 'avatarURL' ? 'center' : 'inherit',
                                                }} key={column.id} align={column.align}>
                                                    {column.id === 'avatarURL' ? (
                                                        <img
                                                            src={value}
                                                            alt="icon"
                                                            style={{width: '40px', height: '40px', borderRadius: '50%'}}
                                                        />
                                                    ) : (
                                                        column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}