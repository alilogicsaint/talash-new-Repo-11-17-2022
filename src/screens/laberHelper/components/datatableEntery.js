import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function HelperDataTable() {
  return (
    <div style={{ height: 270, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
}

































// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { border, style } from '@mui/system';

// const headings = ["S.no",
// "Main Category",
// "Sub Category",
// "Item Name",
// "Model",
// "Price",
// "pic",
// ]
  

// const rows = [
//     {
//     "MainCategory": "Hardware",
//     "SubCategory": "hammers",
//     "ItemName": "hammers2 inch",
//     "Model": "MI-320",
//     "Price": "Rs 350",
//     "Pic": "pic",
//     },
//     {
//       "MainCategory": "paint",
//       "SubCategory": "brighto",
//       "ItemName": "1Gallon",
//       "Model": "Caf",
//       "Price": "860",
//       "Pic": "Madina Hardware",
//     },
//     {
//       "MainCategory": "Hardware",
//       "SubCategory": "hammers",
//       "ItemName": "hammers2 inch",
//       "Model": "MI-320",
//       "Price": "Rs 350",
//       "Pic": "pic",
//     },
//     {
//       "MainCategory": "Hardware",
//       "SubCategory": "hammers",
//       "ItemName": "hammers2 inch",
//       "Model": "MI-320",
//       "Price": "Rs 350",
//       "Pic": "pic",
//     },
    
  
//     ];

// export default function DataTableEntry(props) {
    
    
//     // let tableheadings= props.data
//     // let datatable= props.tabledata.data
    
//     // console.log("this is data table",rowdata)
   
//     // datatable.map((item,i)=>{
//     //       console.log(item.key)
//     // })

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
          
//           <TableRow sx={mystyle.tablehead}>
//           {headings.map((item, i)=>(
//             <TableCell align="center">{item}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((item, i)=>(
//             <TableRow key={item}>
//             <TableCell align="center" sx={mystyle.tableCell}>{i+1}</TableCell>  
//             <TableCell align="center" sx={mystyle.tableCell}>{item.MainCategory}</TableCell>  
//             <TableCell align="center" sx={mystyle.tableCell}>{item.SubCategory}</TableCell>
//             <TableCell align="center" sx={mystyle.tableCell}>{item.ItemName}</TableCell>
//             <TableCell align="center" sx={mystyle.tableCell}>{item.Model}</TableCell>  
//             <TableCell align="center" sx={mystyle.tableCell}>{item.Price}</TableCell>
//             <TableCell align="center" sx={mystyle.tableCell}>{item.Pic}</TableCell>
           
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }




// const mystyle ={
//       tableCell:{
//         backgroundColor:"#f5f5f5",
//       },
//       tablehead:{
//         backgroundColor:"#b6e0f5"
//       }
// }