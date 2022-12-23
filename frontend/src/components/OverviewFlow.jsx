import React, { useEffect, useReducer, useState }from 'react'
import ReactFlow, {MarkerType} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'
import reducer, { loadBlocks, initialState } from './Reducer';

const OverviewFlow = () => {
  const [block, setBlock] = useState()
  const [blocks, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
dispatch(loadBlocks())
console.log(blocks.defaultEdges);
  },[blocks])

  return (
    <>
    <ReactFlow 
    defaultNodes={blocks.defaultNodes} 
    defaultEdges={blocks.defaultEdges} 
    fitView
    style={{width: '100%', height:'100vh'}}
    >
    </ReactFlow>
    </>
  );
};

export default OverviewFlow;

