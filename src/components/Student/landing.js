import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import {connect} from 'react-redux';
import {groupTest} from '../../actions'
import { isEmpty } from '../../validation/is-empty';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
 function Landing(props) {
  console.log(props.groups)   
  const classes = useStyles();
 React.useEffect(()=>{
  props.groupTest()
 },[])
 if(!isEmpty(props.groups)){
  return (
    <div className="container mt-5 mb-5">
    {props.groups.map(group=>{
     return <div className="mb-5">
     <p className="small pink-text " style={{fontSize:'17px',fontWeight:'bold'}}><i className="fa fa-users fa-2x pink-text pr-3" ></i>{group.groupId.groupName}</p>
     <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="simple table">
         <TableHead>
         
           <TableRow>
             <TableCell>Name</TableCell>
             <TableCell align="left">Percentage</TableCell>
             <TableCell align="left">Duration</TableCell>
             <TableCell align="left">Score</TableCell>
          
           </TableRow>
         </TableHead>
         <TableBody>
           
             <TableRow key={group.groupId._id}>
               <TableCell component="th" scope="row">
               {group.testId.testName}
               </TableCell>
               <TableCell align="left"></TableCell>
               <TableCell align="left">{}</TableCell>
             
             </TableRow>
          
         </TableBody>
       </Table>
     </TableContainer>
     </div>   
    })}
    
    </div>  
  );
}
else{
   return <div></div>
}
}
const mapStateToProp=(state)=>{
    return{
     groups:state.groupsList
    }
}
export default connect(mapStateToProp,{groupTest})(Landing);