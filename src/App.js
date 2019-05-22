import React, {Component} from 'react';
import ProductsDisplayComponent from './components/ProductsDisplayComponent';
import SearchProductComponent from './components/SearchProductComponent';
import AddProductComponent from './components/AddProductComponent'

class App extends Component{
   state={
        title: 'My products App',
        filter:'',
       products:[],
       showAddComponent: false
    }
   componentDidMount = ()=>{
       this.setState({products:[{
           id:1, name:'IPad', price: 1000
       }, {
           id:2, name:'Iphone', price: 500
       }, {
           id:3, name:'TV', price: 2000
       }]})
   }
   showAddComponent  = ()=>{
        this.setState({showAddComponent: !this.state.showAddComponent})
   }
   updateFilter = (event)=>{
       
       this.setState({filter: event.target.value})
       
   }
   addAProduct = (product)=>{
       console.log(product);
       let newproduct = {id: this.state.products.length+1, name:product, price:999};
       console.log(newproduct);
       this.setState({products: [...this.state.products, newproduct]})
   }
    render(){
        let filteredproducts = this.state.products.filter(el=> {
            if (el.name.toLowerCase().includes(this.state.filter.toLowerCase())) return true;
            else return false;
        })
        return (
            <div>
         <h1>{this.state.title}</h1>
            <SearchProductComponent filter={this.state.filter} updateFilter={this.updateFilter}/>
            <ProductsDisplayComponent products={filteredproducts}/>
            
                    <button onClick={this.showAddComponent}>
                  Add a new Product
                   </button>
              {this.state.showAddComponent && 
                <AddProductComponent addAProduct={this.addAProduct}/>
               }
            
            </div>
        )
    }
}
export default App;