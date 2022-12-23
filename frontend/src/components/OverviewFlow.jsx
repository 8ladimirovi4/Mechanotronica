import React, { useEffect, useReducer, useState }from 'react'
import ReactFlow from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'
import reducer, { loadBlocks, initialState, addBlock } from './Reducer';

const OverviewFlow = () => {
  const [block, setBlock] = useState()
  const [blocks, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
dispatch(loadBlocks())
  },[blocks])

  console.log(blocks.defaultNodes);

  const addBlockFunc = () => {
dispatch(addBlock())
  }

  return (
    <>
     <button onClick={addBlockFunc}> click</button>
    <ReactFlow 
    defaultNodes={blocks.defaultNodes && blocks.defaultNodes} 
    defaultEdges={blocks.defaultEdges && blocks.defaultEdges} 
    fitView
    style={{width: '100%', height:'100vh'}}
    >
    </ReactFlow>
   
    </>
  );
};

export default OverviewFlow;

