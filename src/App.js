import './App.css'; 
import Clock from './Clock';

const App = () => {
  return (
    <div className="container">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <Clock />
    </div>
    
  );
};

export default App;
