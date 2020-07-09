import React from 'react';
import BucketListItems from './BucketListItems';
import AddBucketItem from './Add';

class App extends React.Component {
  state = {
    bucketlist: [
    ]
  }
  deleteBucketListItem = (id) =>{
    const bucketlist = this.state.bucketlist.filter(item => {
      return item.id !== id;
    });
    this.setState({
      bucketlist
    })
  }

  addBucketListItem = (bucketitem) =>{
    bucketitem.id = Math.random();
    let bucketlist = [...this.state.bucketlist, bucketitem];
    this.setState({bucketlist});
  }

  render(){
    return (
      <div className="bucketlist-app container">
        <h1 className = "center red-text text-lighten-3"> Bucket List ☀︎ </h1>
        <BucketListItems bucketlist = {this.state.bucketlist} deleteBucketListItem = {this.deleteBucketListItem}/>
        <AddBucketItem addBucketListItem = {this.addBucketListItem}/>
      </div>
    );
  }
}

export default App;
