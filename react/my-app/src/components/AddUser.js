import { Component } from "react";

export default class AddUsers extends Component {
  addUser = (e) => {
    console.log("Here");
    e.preventDefault();
    const data = e.target.elements.uname.value;
    this.props.au(data);
  };
  render() {
    return (
      <form onSubmit={this.addUser}>
        <div className="container-fluid">
          <div className="container text-center">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="uname"
                    placeholder="Enter Name"
                    required
                  />
                  <button type="button" className="btn btn-primary">
                    Add User
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.props.da}
                    disabled={!this.props.hasData}
                  >
                    Delete All
                  </button>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
