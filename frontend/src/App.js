import './App.css';
import OverviewFlow from './components/OverviewFlow';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <div className="App">
      <ReactFlowProvider>
     <OverviewFlow/>
     </ReactFlowProvider>
    </div>
  );
}

export default App;
