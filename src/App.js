import React,{useState} from 'react';
import './App.css';

const App=()=> {
    const [users, setUser] =
     useState([]);
    
    const loadUsers = async()=>
    {
      const response= await fetch ('https://reqres.in/api/users?page=1');
      const jsonResponse= await 
      response.json();
      setUser(jsonResponse.data);
    };


  return (
    
   <React.Fragment>
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand " href="#">Letsgrowmore</a>
                  </div>
                </div>
              </nav>
            </header>
            <main>
            <button onClick={ loadUsers}>Click Me</button>
              {users.map(({id,first_name,last_name,avatar,email})=>(             
                 <div className="Row" >
                    <div id ="box" className="col-lg-3 col-md-3 col-sm-6 col-12">
                       <img key={id}   src={avatar} />
                       <div id="info">
                       <div key={id} className="name" >
                       {first_name} {last_name}
                       </div> 
                        <div className="Email" key={id}>
                        {email}
                       </div>     
                      </div>
                    </div> 
                 </div>
            ))}  
         </main>
   </React.Fragment>
  );
};

export default App;
