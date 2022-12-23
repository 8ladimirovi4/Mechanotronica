
import ReactFlow, {MarkerType} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'



const defaultNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Block 1' },
    position: { x: 250, y: 25 },
    style: { backgroundColor: 'lightblue', color: 'white' },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: 'Block 2' },
    position: { x: 100, y: 125 },
    style: { backgroundColor: 'lightblue', color: 'white' },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Block 3' },
    position: { x: 250, y: 250 },
    style: { backgroundColor: 'lightblue', color: 'white' },
  },
];

const defaultEdges = [
  { id: 'e1-2', source: '1', target: '2',  markerEnd: {type: MarkerType.ArrowClosed}},
  { id: 'e2-3', source: '2', target: '3', markerEnd: {type: MarkerType.ArrowClosed}},
];


const OverviewFlow = () => {
  
  return (
    <>
    <ReactFlow 
    defaultNodes={defaultNodes} 
    defaultEdges={defaultEdges} 
    fitView
    style={{width: '100%', height:'100vh'}}
    >
    </ReactFlow>
    </>
  );
};

export default OverviewFlow;

