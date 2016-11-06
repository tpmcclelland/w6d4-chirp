import React from 'react'


const Person = (props) => <div className="row">
 <div className="col-xs-3">
   <img className="followPic" src="https://robohash.org/keith" alt="Keith Smith Profile Pic" />
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


export default Person
