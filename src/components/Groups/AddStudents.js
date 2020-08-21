import React,{Component} from 'react'
import {Box,Checkbox,TableRow,TableBody,TableHead ,TableCell} from '@material-ui/core';

 export default class AddStudents extends Component{
 
    render(){
        const {studList}=this.props
        console.log(studList)
        
        return(
            <div>
                <TableHead>
                    <TableRow>
                    <TableCell>
                      <Checkbox padding="checkbox" 
                      
                      />
                    </TableCell>
                    
                        {studList.map(student=>{
                           return <TableCell>
                                {Object.keys(student)}
                            </TableCell>
                        })}
                    
                    </TableRow>
                </TableHead>
            </div>
        )
    }
}