import Navbar from './Navbar'
import Home from './Home'


function App() {
  const title = 'My App component'
  const person = { name: "Dan", age: 36}
  const link = "www.google.com"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
