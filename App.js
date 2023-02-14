import './App.css';
import React, { useState } from 'react';
// import Axios from 'axios'


const App = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { username, count }]);
    setUsername('');
    setCount(0);
    // Axios.post('http://localhost:3001/create',{username,count}).then(()=>{
    //   console.log("success");
    // })
    // alert(`Hello ${username}!`);
  };
  return (
    <div className="App">
      <p className="count">{count}</p>
      <div className="buttons">
        <button className="increment" onClick={() => setCount(count + 1)}>
          <i className="fa fa-plus"></i>
        </button>
        <button
          className="decrement"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          <i className="fa fa-minus"></i>
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.username}</td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
