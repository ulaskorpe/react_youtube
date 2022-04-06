import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class EditStudent extends   Component {


    state ={
        name:'',
        course:'',
        id:'',
       
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

getData = async (e)=>{
    const  tmp_id = this.props.match.params.id;
    //   alert("ok"+tmp_id);`
    const res = await axios.get('http://buyback.test/api/get-tmp/'+tmp_id);
      if(res.data.status === 200)   {
          this.setState({
              name:res.data.item.title,
              course:res.data.item.data,
              id:res.data.item.id,
              
          })
      }
}


async componentDidMount(){
  this.getData();
  
}


    updateStudent= async (e)=>{
       e.preventDefault();
       const headers = {
            'x-api-key':'5c35640a3da4f1e3970bacbbf7b20e6c'
       };
       const res = await axios.post('http://buyback.test/api/update-tmp',this.state,{headers:headers});
    //  alert("ok"+res.data.msg);
    const MySwal = withReactContent(Swal)
    if(res.data.status_code===200){

        MySwal.fire("başarılı",res.data.msg,"success");
        this.getData();
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
                <h2> UPDATE DATA
                <Link to={'/'} className="btn btn-primary float-end">BACK</Link> 
                </h2>
                </div> 
                <div className="card-body">
                 <form onSubmit={this.updateStudent} method="post">
                      <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="hidden" className="form-control" name="id" onChange={this.handleInput} id="id" value={this.state.id}  />
                        <input type="text" className="form-control" name="name" onChange={this.handleInput} id="name" value={this.state.name}  />
                         
                      </div>
                      <div className="form-group  col-md-6">
                        <label>Course</label>
                        <input type="text" className="form-control" onChange={this.handleInput} name="course" id="course" value={this.state.course}  />
                         
                      </div>
                     
                      <div className="form-group  col-md-6">
                        
                     <button type="submit" className="btn btn-primary my-5">UPDATE</button>
                         
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

export default EditStudent;