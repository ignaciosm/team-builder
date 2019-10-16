import React, {useState}  from 'react';
import Card from './components/Card'
import Form from './components/Form'
import './App.css';

function App() {

  const [members, setMember] = useState([]);
  console.log('app members', members)

  const addMember = newmember => {
    setMember([...members, newmember])
  }  

  return (
    <div className="App">
      <section className="add-member">
        <Form members={members} addMember={addMember}/>
      </section>
      <section className="team-members">
        <Card members={members} />
      </section>
    </div>
  );
}

export default App;
