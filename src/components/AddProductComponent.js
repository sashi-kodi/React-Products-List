import React, {Component} from 'react';
class AddProductComponent extends Component{
    state={newProduct:''}
    handleChange = (event)=>{
        console.log(event.target.value);
        this.setState({newProduct:event.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addAProduct(this.state.newProduct);
        this.setState({newProduct: ''})
    }
    render(){
        return(
     <form onSubmit={this.handleSubmit}>
        <input type="text" name="newproduct" onChange={this.handleChange} />
      </form>
        
    )
    }
} 
    

export default AddProductComponent;