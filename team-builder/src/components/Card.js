import React  from 'react';

const Card = props => {

  console.log('cards', props.members)
  return (

    props.members.map(memb => (
      <div key={memb.id} className="card">
        {/* <p>{`id: ${String(memb.id)}`}</p> */}
        <p>{`First name: ${memb.firstname}`}</p>
        <p>{`Last name: ${memb.lastname}`}</p>
        <p>{`Is TL?: ${memb.is_tl}`}</p>
        <button className="edit">Edit</button>
      </div>
    ))
    
  )

};

export default Card;