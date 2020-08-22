import React,{Component} from 'react'
import {Box,Checkbox,TableRow,TableBody,TableHead ,TableCell,Paper} from '@material-ui/core';

 export default class AddStudents extends Component{
   state={
       selectedStud:{},
       checkedAll:false,
       checked:[],
       numSelected:0
   }  
   handleClick=(e,stud,index)=>{
       this.setState(prevState=>this.state.checked[index]=!prevState.checked[index])
    return e.target.checked?(
      this.setState({selectedStud:{studID:stud}},()=>console.log(this.state.selectedStud))
    ):(null)
   }
   handleSubmit=()=>{
       console.log(this.state.selectedStud)
   }
   selectAll=(e,studList)=>{
       if(e.target.checked){
         
         this.setState(function(prevState){return {selectedStud:studList.map(stud=>{return{studID:stud._id}}),checkedAll:!prevState.checkedAll}},()=>console.log(this.state))
         
         return
       }
       else{
           this.setState({selectedStud:[],checkedAll:false},()=>console.log(this.state))
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
                    {studList.map((student,index)=>{
                      return <TableRow >
                            <TableCell>
                      <Checkbox padding="checkbox"  onClick={(e)=>this.handleClick(e,student._id,index)}
                        checked={this.state.checkedAll ||this.state.checked[index] } 
                     
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