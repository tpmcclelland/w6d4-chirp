import React from 'react'


const Person = (props) =>(
<div className="container-fluid">
<div className="row">
 <div className="col-xs-3">
   {/* <img className="followPic" src={"http://robohash.org/" + props.person.name}  alt="Profile Pic" /> */}
   <img className="userPic" src={props.person.avatar === null? '../img/placeholder.png' : (props.api + props.person.avatar)} alt="Post Profile Pic" />
 </div>
 <div className="col-xs-6">
   <div className="row smallFont">
       <div className="col-xs-4 col-xs-offset-1"><strong>{props.person.name}</strong></div>
       <div className="col-xs-4 col-xs-offset-1">
         {/* <!-- TODO: add plus icon next to follow --> */}
      <button id="follow" type="button" className={props.person.following? 'btn btn-danger' : 'btn btn-primary'} onClick={props.follow}>{props.person.following? 'Unfollow' : 'Follow'}</button>
       </div>
   </div>
 </div>
</div>
<hr />
</div>
)



export default Person
