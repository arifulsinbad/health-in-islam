import logo from './logo.svg';
import './App.css';
import Study from './component/Study';

function App() {
  return (
    <div className="App">
      <div className='title'>
      <h2><i class="fa-solid fa-book-open"></i>  The Importance of Good Health in Islam</h2>
        <h4>Select today's Study</h4>
      </div>
 <Study></Study>
    </div>
  );
}

export default App;
