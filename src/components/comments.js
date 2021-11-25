import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchcomments} from '../actions/commentAction'

 class Comments extends Component {
     componentDidMount(){
         this.props.fetchcomments()
     }
    render() {
        const commentItems = this.props.comments.map(comment=>(
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <i>{comment.email}</i>
                <p>{comment.body}</p>
            </div>
        ))
        return (
            <div>
                <h2>Comments</h2>
                {commentItems}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    comments:state.comments.items
})
export default connect(mapStateToProps,{fetchcomments})(Comments)