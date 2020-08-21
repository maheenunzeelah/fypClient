import React,{Component} from 'react'
import {Box,Checkbox,TableRow,TableBody,TableHead ,TableCell,Paper} from '@material-ui/core';

 export default class AddStudents extends Component{
   state={
       selectedStud:{},
       checked:false,
       numSelected:0
   }  
   handleClick=()=>{
    
   }
   handleSubmit=()=>{
       console.log(this.state.selectedStud)
   }
   selectAll=(e,studList)=>{
       if(e.target.checked){
         
         this.setState({selectedStud:studList.map(stud=>stud._id),checked:true},()=>console.log(this.state))
         
         return
       }
       else{
           this.setState({selectedStud:[],checked:false},()=>console.log(this.state))
       }
       
    
   }
    render(){
        const {studList}=this.props;
        
        const row=studList.length
        const headers=['Roll No','First Name','Last Name']
        return(
            <div className='container'>
             <form onSubmit={this.handleSubmit}>
                <Paper >
                <TableHead>
                    <TableRow>
                    <TableCell>
                      <Checkbox padding="checkbox" 
                   onClick={(e)=>this.selectAll(e,studList)}
                      />
                    </TableCell>
                    
                        {headers.map(header=>{
                           return <TableCell>
                                {header}
                            </TableCell>
                        })}
                    
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {studList.map(student=>{
                      return <TableRow>
                            <TableCell>
                      <Checkbox padding="checkbox" name='studID' 
                        checked={this.state.checked}
                        onClick={this.handleClick}
                      />
                    </TableCell>
                    <TableCell>
                        {student.rollNo}
                    </TableCell>
                    <TableCell>
                        {student.firstName}
                    </TableCell>
                    <TableCell>
                        {student.lastName}
                    </TableCell>
                      </TableRow>
                      
                    })}
                    
                    </TableBody>
                </Paper>
                <button type="submit">AddStudents</button>
                </form>
            </div>
        )
    }
}