import React,{useState}  from 'react';
import './App.css';
import Table from './Table';
import {Users} from './users'

function App() {
  const [query,setQuery]= useState("");

  const search = (data) => {
    return data.filter((item)=> item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query));
  }

  // console.log(Users.filter(user=> user.first_name.toLowerCase().includes("fe")));
  return (
    <div className="App">
      <input 
      type="text" 
      placeholder="Search..." 
      className="search" 
      onChange={(e)=> setQuery(e.target.value)}
      
      />

      <Table data={search(Users)}/>


      {/* <ul className="list">
        {Users.filter((user)=> user.first_name.toLowerCase().includes(query)).map((user) =>(
          <li key={user.id} className="listItem">{user.first_name}</li>

        ))}

        
       
      </ul> */}
      
    </div>
  );
}

export default App;
