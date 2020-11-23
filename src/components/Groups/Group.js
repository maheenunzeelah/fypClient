import React, { Component } from 'react'
import '../../css/Group.css'
import { Link } from 'react-router-dom'
import TestWindow from '../TestWindow';
import { groupList, editGroup, deleteGroup } from '../../actions';
import { connect } from 'react-redux';
import { isEmpty } from '../../validation/is-empty'
import Spinner from '../Spinner';

class Group extends Component {
  state = {
    search: ''
  }
  componentDidMount() {
    this.props.groupList(1)
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  handleDelete = (id) => {
    this.props.deleteGroup(id)
  }
  DynamicButtons = () => {
    const { groups } = this.props
    return <section className="pagin">{console.log(groups)}
      {groups.currentPage != 1 && groups.previousPage != 1 ? <a className="black-text" onClick={() => this.props.groupList(1)}>1</a> : null}

      {groups.hasPreviousPage ? <a className="black-text" onClick={() => this.props.groupList(groups.previousPage)}>{groups.previousPage}</a> : null}

      <a className="black-text" onClick={() => this.props.groupList(groups.currentPage)}>{groups.currentPage}</a>

      {groups.hasNextPage ? <a className="black-text" onClick={() => this.props.groupList(groups.nextPage)}>{groups.nextPage}</a> : null}

      {(groups.lastPage != groups.currentPage && groups.nextPage != groups.lastPage) ? <span className="blue-text">...<a className="black-text" onClick={() => this.props.groupList(groups.lastPage)}>{groups.lastPage}</a></span> : null
      }

    </section>


  }

  filteredList = (grp, index) => {
    {/* Group1 container*/ }

    return <div className="container amber-text">

      <button className="collapsible btn btn-outline-black" style={{ textAlign: 'left' }} id="Group1" data-toggle="collapse" data-target={`#demo${index}`}><i className="fa fa-users fa-2x " aria-hidden="true"></i> {grp.groupName}</button>

      <div id={`demo${index}`} class="w3-container collapse">
        <br />


        {/* <div className="w3-row">
             <div className="w3-half">
             <p><i class="fa fa-file-o fa-1x" aria-hidden="true"></i> arisha</p>
             </div>
             <div className="w3-right">
             <Link to='/Test' id="Setting">Settings</Link>
             <Link to='/Test' id="Preview">Preview</Link>
             <Link to='/Test' class="w3-btn w3-ripple w3-teal">Result</Link>
             </div>
         </div> */}
        <hr />

        <div className="w3-row" id="Links">

          {/* <span className="Link"><i class="fa fa-pencil" aria-hidden="true"></i><Link to='/Test' class="w3-btn" >Members (0) </Link></span> */}
          <span className="Link blue-text"><i className="fa fa-plus-circle indigo-text" aria-hidden="true"></i><Link to={{ pathname: '/dashboard/editGroup', state: { name: grp.groupName,groupId:grp._id } }} onClick={(grp_id) => this.props.editGroup(grp._id)} className="w3-btn blue-text" >Assign </Link></span>

          <span className="Link blue-text"><i className="fas fa-pen-alt green-text"></i><Link to={{ pathname: '/dashboard/updateGroup', state: { name: grp.groupName, id: grp._id } }} className="w3-btn blue-text" >Update</Link></span>
          <span className="float-right"> <button className="Link btn btn-outline-danger blue-text " onClick={() => this.handleDelete(grp._id)}><i className="fas fa-trash mr-1 red-text"></i>Delete</button></span>
        </div>
        <br />
        {/* <Link to='/Test'><p><i class="fa fa-plus-circle" aria-hidden="true"></i> Assign a test</p></Link> */}
      </div>
      <br />
    </div>

    {/* Group1 container ends*/ }
  }
  renderList = () => {
    let filtered
    filtered = this.props.groups.group.filter(grp => {

      // If value in searched bar matches the value of testname
      return (grp.groupName.indexOf(this.state.search) !== -1)
    })
    console.log(filtered)
    // When we have list of filtered arry

    return filtered.map((grp, index) => {
      return <div>
        {this.filteredList(grp, index)}
      </div>
    })
      ;



  }
  render() {

      return (

        <div >

          <TestWindow to="/dashboard/newGroup" label=" Group" separator=' > ' />

          {/* black group bar */}
          <div class="container"  >
            <div className="row grey darken-2 " id='tab'>
              <Link to="/Test" className="w3-bar-item w3-button tablink" ><i class="fa fa-window-maximize w3-margin-right" aria-hidden="true"></i>Group</Link>
            </div>
          </div>
          <br />
          {/* black group bar ends*/}




          {/* groups list container */}
          <div className="container">


            {/* groups list  */}
            <div id="Group" className="w3-container  w3-padding-16 " style={{ border: 'solid pink', backgroundColor: '#fff0fb' }}>
              <br />

              {/* search and new group option */}
              <div class="w3-row-padding" >

                <div class="w3-quarter w3-left">
                  <input class="w3-input w3-border" type="text" placeholder=" Search Group name" onChange={(e) => this.handleChange(e)} value={this.state.search}></input>
                </div>
                <div class="w3-quarter w3-right" >
                  <Link to='/dashboard/newGroup' class="w3-button w3-black">New Group +</Link>
                </div>

              </div>
              <br />
              {/* search and new group option ends */}

              {!isEmpty(this.props.groups.group)?this.renderList():<div>No Groups Found</div>}






            </div>
            {/* groups list ends */}


          </div >
          {/* groups list container ends */}


          {/* main page ends */}
          {isEmpty(this.props.groups.group) ? null : this.DynamicButtons()}
        </div>

      )
   

  }

}
const mapStateToProps = (state) => {
  console.log(state.groupsList)
  return {
    groups: state.groupsList
  }
}

export default connect(mapStateToProps, { groupList, editGroup, deleteGroup })(Group);
