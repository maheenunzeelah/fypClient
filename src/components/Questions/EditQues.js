import React , {Component} from 'react';

class EditQues extends Component {
    state={
        data: {
            testId: this.props.location.state.id,
            test: this.props.location.state.testName,
            course: this.props.location.state.course
          }
    }
    render() {
        return (
            <div>
                {/* For breadcrumbs */}
                <TestWindow to={this.props.match.url} label="Add Questions" separator=' > ' />

                <form onSubmit={this.props.handleSubmit(this.handleSubmit)} style={{ margin: "100px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="white-text">Select Question Type</h3><br />
                                <QuesType parentFunction={this.callbackFunction} /><br />
                            </div>
                            {this.state.type === "MCQs" ? (
                                /*If MCQs select how many options should be there for answers*/
                                <div className="col-md-3">
                                    <div className="jumbotron blue lighten-2 black-text">
                                        <label for="ansOptions">Choose availabe options</label>
                                        <select className="form-control" id="ansOptions" onChange={this.availAns}>
                                            <option value="2" >2</option>
                                            <option value="3" selected >3</option>
                                            <option value="4" >4</option>
                                        </select>


                                    </div>
                                </div>) : <div></div>}
                        </div>
                    </div>

                    <h3 className="white-text">Question 1</h3><br />
                    <Editor name={"question"} question />

                    {
                        // When Ques Type is MCQs

                        this.state.type === "MCQs" ? (
                     
                      _.times(this.state.availAnsOpt,(i)=> <div>
                       <h3 className="white-text">{`Answer${i+1}`}</h3>

                          {/*Using loadash library _.times to repeat component n times*/}
                       <Editor name={`answer${i+1}`} corrAns={this.corrAnsFunction} /> 
                         </div>)   )  : 

                        // When Ques Type is True/False
                        (<div>
                            <h3 className="white-text">Answer </h3>
                            <div className="jumbotron" style={{ width: "650px", height: "180px", margin: "20px" }}>
                                <p className="lead">This is the correct answer</p>
                                <label>
                                    <Field type="radio" name="answer" component="input" value="true" />
                                    True
                </label><br />
                                <label>
                                    <Field type="radio" name="answer" component="input" value="false" />
                                    False
                </label>
                            </div>
                        </div>
                        )
                    }
                    <button type="submit" className="btn btn-primary">
                        Save
            </button>
                </form>
            </div>
        );
    }
}

}

export default EditQues