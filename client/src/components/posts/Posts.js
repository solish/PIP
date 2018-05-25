import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPosts } from "../../actions/postAction";
import PostFeed from "../postFeed/PostFeed";
import PostForm from "../postsForm/PostForm";
import "./styles.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.post;

    return (
      <div className="postsContainer">
        <div className="postsFeedContainer">
          <PostForm />
          <PostFeed posts={posts} />
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
