import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const clientHeadTableBuilder = () => {
  return (
      <TableRow> 
        <TableCell>Аватарка</TableCell>
        <TableCell>Фамилия</TableCell>
        <TableCell>Имя</TableCell>
        <TableCell>Отчество</TableCell>
      </TableRow>
  )
}
