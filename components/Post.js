import React, { Component } from 'react'
import moment from 'moment'

const Post = (props) => <div className="row">
                <div className="col-xs-12">
                  <img className="userPic" src={props.api + props.post.user.avatar} alt="Post Profile Pic" /> <strong>{props.post.user.name}</strong> -
              {moment(props.post.created_at).fromNow()}
                </div>
                {/* <div className="col-xs-6">
                  <div className="row">
                    <div className="col-xs-4 col-xs-offset-1"><strong>{props.post.user.name}</strong></div>
                    <div className="col-xs-4 col-xs-offset-1">{moment(props.post.created_at).fromNow()}</div>
                  </div>
                </div><br /> */}
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2">
                    <p >
                      {props.post.body}
                    </p>
                  </div>
                </div>
                <hr />
              </div>

export default Post
