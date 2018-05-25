import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postAction";

import "./styles.css";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div className="postItemContainer">
        <div className="postItemsContainer">
          <div className="postName">{post.name}</div>
          <div className="postText">{post.text}</div>

          {post.user === auth.user.id ? (
            <button
              className="postDeletBtn"
              onClick={this.onDeleteClick.bind(this, post._id)}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost })(PostItem);
