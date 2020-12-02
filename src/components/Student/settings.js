import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Preview from '../Groups/Preview'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:'100px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Settings(props) {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
 const {id,testName,groupName}=props.location.state;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
    
        <Typography variant="h5" component="h2">
          Settings
        </Typography>
        <div>
          <Preview id={props.match.params.id}/>
        </div>
      </CardContent>
      <CardActions>
      <Link to={{pathname:'/student/quiz', state:{id,testName,groupName}}}><Button className="pink">Start</Button></Link>
      </CardActions>
    </Card>
  );
}
