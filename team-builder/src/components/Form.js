import React, {useState}  from 'react';

const Form = props => {

  // console.log('form props', props.members)

  const [newmember, setNewMember] = useState({
    firstname: "",
    lastname: "",
    is_tl: false,
  });  


  const submitForm = event => {
    event.preventDefault();
    props.addMember(newmember);
    setNewMember({
      firstname: "",
      lastname: "",
      is_tl: false,
    });
    console.log('after adding:', newmember)
  };



  const handleChanges = e => {
    setNewMember({ ...newmember, [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
    // console.log('e.target.value', e.target.value)
  };
  
console.log('newmember', newmember)
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="firstname">First name </label>
      <input 
        type="text"
        id='firstname'
        placeholder='Enter your first name'
        onChange= {handleChanges}
      />

      <label htmlFor="lasttname">Last name </label>
      <input 
        type="text" 
        id='lastname' 
        placeholder='Enter your last name'
        onChange= {handleChanges}
      />

      <label htmlFor="is_tl">Are you a TL? </label>
      <input
        type="checkbox" 
        id='is_tl'
        onChange= {handleChanges}
      />

      <button type="submit" id='submit'>Add name</button>
    </form>
  )

};

export default Form;