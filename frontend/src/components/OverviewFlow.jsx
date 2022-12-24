import React, { useEffect, useReducer}from 'react'
import ReactFlow from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'
import './components.css'
import reducer, { loadBlocks, initialState, addBlock, addEdg } from './Reducer';

const OverviewFlow = () => {
  const [blocks, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
dispatch(loadBlocks())
  },[blocks])



  const addBlockFunc = (event) => {

  dispatch(addBlock({
  id: event.target.getAttribute('data-id'),
  position: event.target.getAttribute('style')}))
    
  dispatch(addEdg({
    id: event.target.getAttribute('data-id'),
    position: event.target.getAttribute('style')}))

    const foo = blocks.defaultNodes.filter(el => el.status === false ? el.style.backgroundColor = 'red': el)
    console.log(foo);
  }

  return (
    <div className='cantainer'>
     {/* <button onClick={addBlockFunc}> click</button> */}
    <ReactFlow 
    onClick={addBlockFunc}
    defaultNodes={blocks.defaultNodes && blocks.defaultNodes} 
    defaultEdges={blocks.defaultEdges && blocks.defaultEdges} 
    fitView
    style={{width: '100%', height:'100vh'}}
    >
    </ReactFlow>
   
    </div>
  );
};

export default OverviewFlow;

