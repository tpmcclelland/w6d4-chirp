import React, { Component } from 'react'
import moment from 'moment'

const Post = (props) => <div className="row">
                <div className="col-xs-12">
                <img className="userPic" src={props.post.user.avatar=== null? './img/placeholder.png' : (props.api + props.post.user.avatar)} alt="Post Profile Pic" />
                <span className="post-author">{props.post.user.name}</span>
              <span className="time">{moment(props.post.created_at).fromNow()}</span>
                </div>
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2">
                    <p className="post-body">
                      {props.post.body}
                    </p>
                  </div>
                </div>
                <hr />
              </div>

export default Post
