import axios from "axios";
import React, { Component } from "react" ;
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

 class Student extends Component {


    state ={
        items:[],
        loading:true
    };

getItems = async (e)=>{
    const res = await axios.get('http://buyback.test/api/list-tmp');
    if(res.data.status ===200){
        this.setState({
               items: res.data.items,
               loading: false,
        });
    }
}

async componentDidMount(){

    this.getItems();
    
}



deleteTmp = async (e,id)=>{

    const MySwal = withReactContent(Swal)
    const del = false;
    const cl = e.currentTarget;
 /*   MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {


           
            
            
        }
      })*/
      cl.innerText = "Deleting";
    
      
         
      const res = await axios.delete('http://buyback.test/api/delete-tmp/'+id);
        
        
         if(res.data.status===200){
     
             MySwal.fire("başarılı",res.data.msg,"success");
         //    this.getItems();
         cl.closest("tr").remove();
     
         }else{
             MySwal.fire("HATA",res.data.msg,"error");
         } 
}

    render(){

        var items_HTMLTABLE = "";
        if(this.state.loading){
                items_HTMLTABLE = <tr><td colSpan="4">LOADING...</td></tr>
        }else{
            items_HTMLTABLE = this.state.items.map((item) => {
                return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.data}</td>
                        <td>
                            <Link to={`edit-tmp/${item.id}`} className="btn btn-success mx-3">EDIT</Link>
                            <button type="button" onClick={(e)=>this.deleteTmp(e,item.id)} className="btn btn-danger">DELETE</button>
                        </td>
                </tr>
            })
        }

        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="card">
                        <div className="card-header">
                    <h2>STUDENT PAGE
                    <Link to={'add-student'} className="btn btn-primary float-end mx-2">ADD Student</Link> 
                    <Link to={'inc-dec'} className="btn btn-primary float-end mx-2">IncDec</Link> 
                    </h2>
                    </div> 
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DETAIL</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items_HTMLTABLE}
                        </tbody>
                        </table>

                        </div>
                    
                    </div> 
                    
                    
                    </div>
                    </div>
                </div>
                
        );
    }
}

export default Student;