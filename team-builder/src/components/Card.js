import React  from 'react';

const Card = props => {

  console.log('cards', props.members)
  return (

    props.members.map(memb => (
      <div className="card">
        <p>{`First name: ${memb.firstname}`}</p>
        <p>{`Last name: ${memb.lastname}`}</p>
        <p>{`Is TL?: ${memb.is_tl}`}</p>
      </div>
    ))
    
  )

};

export default Card;