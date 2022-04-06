import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class AddStudent extends   Component {


    state ={
        name:'',
        course:'',
        email:'',
        phone:''
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    saveStudent= async (e)=>{
       e.preventDefault();
       const headers = {
            'x-api-key':'5c35640a3da4f1e3970bacbbf7b20e6c'
       };
       const res = await axios.post('http://buyback.test/api/add-tmp',this.state,{headers:headers});
    //  alert("ok"+res.data.msg);
    const MySwal = withReactContent(Swal)
    if(res.data.status_code===200){

        MySwal.fire("başarılı",res.data.msg,"success");
        this.setState({
            name:'',
            course:'',
            email:'',
            phone:''
        })
    }else{
        MySwal.fire("HATA",res.data.msg,"error");
    }
       

    }
        render(){
            return (
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                    <div className="card-header">
                <h2> Add Student
                <Link to={'/'} className="btn btn-primary float-end">BACK</Link> 
                </h2>
                </div> 
                <div className="card-body">
                 <form onSubmit={this.saveStudent} method="post">
                      <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.handleInput} id="name" value={this.state.name}  />
                         
                      </div>
                      <div className="form-group  col-md-6">
                        <label>Course</label>
                        <input type="text" className="form-control" onChange={this.handleInput} name="course" id="course" value={this.state.course}  />
                         
                      </div>
                      <div className="form-group  col-md-6">
                        <label>Email</label>
                        <input type="text" className="form-control" onChange={this.handleInput} name="email" id="email" value={this.state.email}  />
                         
                      </div>
                      <div className="form-group  col-md-6">
                        <label>Phone</label>
                        <input type="text" className="form-control" onChange={this.handleInput} name="phone" id="phone" value={this.state.phone} />
                         
                      </div>
                      <div className="form-group  col-md-6">
                        
                     <button type="submit" className="btn btn-primary my-5">Submit</button>
                         
                      </div>
                 </form>
                    </div>
                
                </div> 
                
                
                </div>
                </div>
            </div>

            );
        }
}

export default AddStudent;