import React from 'react'

const BucketListItems = ({bucketlist, deleteBucketListItem}) => {
    const todos = bucketlist.length ? (
        bucketlist.map(item =>{
            return (
                <div className = "collection-item" key= {item.id}>
                    <span onClick = {() => {deleteBucketListItem(item.id)}}>{item.content}</span>
                </div>
            )
        })
    ) : (
        <p className = "center"> Chica, we both know there's so much left to do this summer. </p>
        )
    return (
        <div className = "bucketlist collection">
            {todos}
        </div>
    )
}

export default BucketListItems