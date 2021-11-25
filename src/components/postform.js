import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction'
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.posts, this.props.posts, 'checccccccc')
        if (prevProps.posts != this.props.posts) {
            this.props.posts.unshift(this.props.posts);
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props._post(post)
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title : </label>
                        <input type="text" name="title" onChange={this.onChange} />
                    </div>
                    <br />
                    <div>
                        <label>Body : </label>
                        <textarea name="body" onChange={this.onChange} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
});

const mapDispatchToProps = (dispatch) => {
    return {
        _post: (data) => dispatch(createPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)