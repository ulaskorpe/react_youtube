 
import { Component } from "react";
import { Link } from "react-router-dom";

class IncDec extends Component
{

    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

    render(){

         
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="card">
                <div className="card-header">
            <h2>INC DEC
            <Link to={'/'} className="btn btn-primary float-end">BACK</Link> 
            </h2>
            </div> 
            <div className="card-body">

                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
            
            
            </div>
            </div>
        </div>
        </div>
        );
    }
}

export default IncDec;