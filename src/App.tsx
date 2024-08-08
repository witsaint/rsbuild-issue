import './App.css';
import { createUid } from 'simple-mind-map/src/utils';

const App = () => {
  console.log(createUid()); 
  
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
