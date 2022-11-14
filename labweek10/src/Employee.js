import React from "react";
class Employee extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            txtEmail : "",
            txtName: "",
            txtAddress: "",
            txtCity: "",
            txtProvince: "",
            txtPostalCode: ""
          

        }
    }

    onSubmitData = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    onValueChange = event => {

        this.setState({
            [event.target.name]:  event.target.value
        })

    }

    render(){
        return(
        <div>
           
            <form onSubmit={e => this.onSubmitData(e)}>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtEmail" placeholder="Email" />
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtName" placeholder="Name" />
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtAddress" placeholder="Address" />
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtAddress2" placeholder="Address2" />
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtCity" placeholder="City" />
                <br></br>
                <select name="Province" id="Province" placeholder="Choose?">
                 <option value="Alberta">Alberta</option>
                 <option value="British Columbia">British Columbia</option>
                 <option value="Manitoba">Manitoba</option>
                 <option value="Ontario">Ontario</option>
                 <option value="Quebec">Quebec</option>
                 <option value="Saskatchewan">Saskatchewan</option>

                </select>
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtPostalCode" placeholder="Postal Code" />
                <br></br>
                <input type="checkbox" name="checkbox" value="check" id="agree" /> Agree Terms & Conditions?
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="submit" name="submit " placeholder="Submt" />
                <input type="Reset" value="Reset"/>
                
         
            </form>
            <h2>Data Output</h2>
               <h5>Email:{this.state.txtEmail}</h5>
                <h5>Name:{this.state.txtName}</h5>
               <h5>Address:{this.state.txtAddress}</h5>
               <h5>Address2:{this.state.txtAddress2}</h5>
                <h5>City:{this.state.txtCity}</h5>
                <h5>Province:{this.state.txtProvince}</h5>
               <h5>Postal Code:{this.state.txtPostalCode}</h5>
     
         




                </div>
   
        
        )
    }
}

export default Employee