import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { isEmpty } from '../../validation/is-empty';
import { connect } from 'react-redux';
import { fetchTests, fetchCourseList, AssignTestApi } from '../../actions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#bdbdbd',
        border: 'solid 2px #212121'
    },
}));

function AssignTest(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [course, setCourse] = React.useState('')

    const DynamicButtons = () => {
        return props.tests.map(test =>
            <section className="pagin mb-5" style={{ color: "#1f3c88" }}>
                {test.currentPage != 1 && test.previousPage != 1 ? <a onClick={() => props.fetchTests(1, course)}>1</a> : null}
                {test.hasPreviousPage ? <a onClick={() => props.fetchTests(test.previousPage, course)}>{test.previousPage}</a> : null}
                <a onClick={() => props.fetchTests(test.currentPage, course)}>{test.currentPage}</a>

                {test.hasNextPage ? <a onClick={() => props.fetchTests(test.nextPage, course)}>{test.nextPage}</a> : null}
                {(test.lastPage != test.currentPage && test.nextPage != test.lastPage) ? <span >...<a onClick={() => props.fetchTests(test.lastPage, course)}>{test.lastPage}</a></span> : null
                }

            </section>
        )

    }
    useEffect(() => {

        props.fetchTests(1)
        props.fetchCourseList()
    }, [])
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const handleChange = () => {
        let sel = document.getElementById('courseOpt');

        let sv = sel.options[sel.selectedIndex].value;
        // setting that number in state
        setCourse(sv)

    }
    useEffect(() => {
        props.fetchTests(1, course)
    }, [course])

    const handleSubmit = () => {
        props.callback(checked);
        console.log(props.groupId)
        const arr = checked.map(check => {
            return { testId: check, groupId: props.groupId }
        })
        if (arr.length > 0)
            props.AssignTestApi(arr)


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="w3-quarter col-md-3  mb-3">
                    <label className="pink-text">Select Course</label>
                    <select className="w3-input w3-border" placeholder="Category Filter" id='courseOpt' onChange={handleChange}>
                        <option value=''>-All-</option>
                        {props.courses != undefined ? props.courses.map(category => {
                            return <option value={category}>{category}</option>
                        }) : null
                        }
                    </select>

                </div>
                <div className="col-md-5">
                    <form>
                        <List className={classes.root}>
                            {props.tests.map((test) => {
                                return test.test.map((tes, index) => {
                                    const labelId = `checkbox-list-label-${index}`;

                                    return (
                                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(tes._id)}>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(tes._id) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>

                                            <ListItemText id={labelId} primary={tes.testName} />

                                        </ListItem>
                                    )
                                })

                            })}
                            
        
                       
                        { DynamicButtons() }

        
                        </List>
                <Button variant="contained" color="secondary" className="float-right mt-5" disabled={checked.length <= 0} onClick={handleSubmit}>
                    Assign
                            </Button>
                    </form>
        </div>
            </div >
        </div >
    )
}
function mapStateToProps(state) {
    return {
        groupId: state.currentGroup,
        tests: Object.values(state.tests),
        courses: state.filter.course
    }
}
export default connect(mapStateToProps, { fetchTests, fetchCourseList, AssignTestApi })(AssignTest)
