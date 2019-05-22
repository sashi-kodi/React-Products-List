import React, {Component} from 'react';
class SearchProductComponent extends Component{
    
    render(){
        return(
            <div>
        <p> Search: </p>
            <input type="text" name="searchfield" value={this.props.filter} onChange={this.props.updateFilter} />
            </div>
        )
    }
}
export default SearchProductComponent;
