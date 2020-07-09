import React from 'react';

class AddBucketItem extends React.Component{
    state = {
        content: ''
    }

    handleChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBucketListItem(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>♥︎ add new bucket list item: ♥︎</label>
                    <input placeholder = "eat Taco Bell while stargazing on a rooftop"type = "text" onChange = {this.handleChange} value = {this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddBucketItem