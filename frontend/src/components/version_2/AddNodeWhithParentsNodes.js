import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import './components.css';

const initialNodes = [
  {
    id: '0',
    type: 'default',
    data: { label: 'Initial Block' },
    position: { x: 0, y: 10 },
  },

];

const initialEdges = []

let id = 1;
const getId = () => `${id++}`;


const AddNodeWhithParentsNodes = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
 
  const [addChildeNode, setAddChildeNode] = useState(false);
  const [parentNode, setParentNode] = useState(null);

  useEffect(()=>{
    if(addChildeNode){
      setEdges((eds) => eds.concat({
        id: String(parseInt(Math.random()*1000000)),
        source: parentNode.id,
        target: nodes[nodes.length-1].id,
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      }));
      setAddChildeNode(false);
      setParentNode(null);
    }
  },[nodes])

  const handleNodeClick = (e, data) => {
    const filterNodeswithSameSource = nodes.filter((node)=>node?.data?.parentId===data?.id);
    setNodes((nds) => nds.concat({
      id : getId(),
      type : 'default',
      position : { x: data.position.x+filterNodeswithSameSource.length*160, y: data.position.y+100},
      data: { label: 'New Block', parentId: data.id },
      width: 150,
    }));
    setAddChildeNode(true);
    setParentNode(data);
  }

  return (
    <div className="wrapper">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
};

export default AddNodeWhithParentsNodes;
 
 
 
