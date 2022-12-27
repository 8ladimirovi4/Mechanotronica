import React from 'react';
import useResizeObserver from "use-resize-observer/polyfilled";
import './App.css';
import OverviewFlow from './components/version_1/OverviewFlow';
import AddNodeWhithParentsNodes from './components/version_2/AddNodeWhithParentsNodes';


function App() {
  return ( 
    <div>
    {/* <OverviewFlow/> */}
        <AddNodeWhithParentsNodes/> 
        </div>
  );
}

export default App;
