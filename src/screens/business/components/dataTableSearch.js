import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DataTableSearch(props) {
    
    let rowdata=props.forRowData 
    let tableheadings= props.data
    let datatable= props.tabledata.data
    
    // console.log("this is data table",rowdata)
          
    // datatable.map((item,i)=>{
    //  console.log(Object.keys(item))
    // })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          
          <TableRow>
          {tableheadings.map((item, i)=>(
            <TableCell align="center">{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((item, i)=>(
            <TableRow key={item}>
            <TableCell align="center">{i+1}</TableCell>  
            <TableCell align="center">{item.ShopName}</TableCell>  
            <TableCell align="center">{item.MainCategory}</TableCell>
            <TableCell align="center">{item.SubCategory}</TableCell>
            <TableCell align="center">{item.ItemName}</TableCell>  
            <TableCell align="center">{item.Model}</TableCell>
            <TableCell align="center">{item.Province}</TableCell>
            <TableCell align="center">{item.City}</TableCell>
            <TableCell align="center">{item.UcMainArea}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
