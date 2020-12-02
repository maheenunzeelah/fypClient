import React ,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux';
import { groupTest,quesList } from '../../actions'
import { isEmpty } from '../../validation/is-empty';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
    backgroundColor: "#fff0fb",
    border: "solid 2px #fff0fb"
  },
});


function Landing(props) {
 
  console.log(props.groups)
  const classes = useStyles();
  React.useEffect(() => {
    props.groupTest()
  }, [])
  if (!isEmpty(props.groups)) {
    return (
      <div className="container mt-5 mb-5">
        {props.groups.map((group, i) => {

          return <div className="mb-5">
            <p className="small pink-text " style={{ fontSize: '17px', fontWeight: 'bold' }}><i className="fa fa-users fa-2x pink-text pr-3" ></i>{group.groupId.groupName}</p>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>

                  <TableRow>
                    <TableCell >Name</TableCell>
                    <TableCell align="left">Percentage</TableCell>
                    <TableCell align="left">Duration</TableCell>
                    <TableCell align="left">Score</TableCell>

                  </TableRow>
                </TableHead>
                {group.testId.map(test => {
                  console.log(group._id)
                  return <TableBody>

                    <TableRow key={test._id}>
                      <TableCell component="th" scope="row">
                        {test.testName}
                      </TableCell>
                      <TableCell align="left"></TableCell>
                      <TableCell align="left">{}</TableCell>

                    </TableRow>
                  
                    <TableRow>
                      <TableCell align="left"><Link to=  {{pathname:`/student/settings/${group._id}`, state:{id:test._id, testName:test.testName, groupName:group.groupId.groupName}}}><Button className="pink" >Start</Button></Link></TableCell>

                    </TableRow>

                  </TableBody>
                })}

              </Table>
            </TableContainer>
          </div>
        })}

      </div>
    );
  }
  else {
    return <div style={{margin:'200px'}} className="jumbotron">
    <h3 className="pink-text">No Test or Groups Found</h3>
    <h5>You are not added in any group yet!</h5>
    </div>
  }
}
const mapStateToProp = (state) => {
  return {
    groups: state.groupsList
  }
}
export default connect(mapStateToProp, { groupTest })(Landing);