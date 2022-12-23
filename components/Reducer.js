import {MarkerType} from 'react-flow-renderer/nocss';

const initialState = {

    defaultNodes: [
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
          position: { x: 250, y: 100 },
          style: { backgroundColor: 'lightblue', color: 'white' },
        },
        {
            id: '3',
          
            // you can also pass a React component as a label
            data: { label: 'Block 3' },
            position: { x: 250, y: 180 },
            style: { backgroundColor: 'lightblue', color: 'white' },
          },
      ],

      defaultEdges: [
        { id: 'e1-2', source: '1', target: '2',  markerEnd: {type: MarkerType.ArrowClosed}},
        { id: 'e2-3', source: '2', target: '3',  markerEnd: {type: MarkerType.ArrowClosed}},
      ]
}


const types = {
    LOAD_BLOCKS: 'LOAD_BLOCKS',
    ADD_BLOCK: 'ADD_BLOCK',
    ADD_EDGE: 'ADD_EDGE'
}

const actions = {
    loadBlocks: () => ({type: types.LOAD_BLOCKS}),
    addBlock: (data) => ({type: types.ADD_BLOCK, payload: data}),
    addEdg: (data) => ({type: types.ADD_EDGE, payload: data}),
}

const reducer = (state, action) => {
switch (action.type) {
    case types.LOAD_BLOCKS:{
       return state
    }
    case types.ADD_BLOCK:{
let regexp = /-?\d+(\.\d+)?/g;
const {id} = action.payload
const {position} = action.payload
const xPos = position.match(regexp)[1];
const yPos = position.match(regexp)[2];
const newBlock = {...state, defaultNodes: [...state.defaultNodes, 
            {
                id: `${+id+1}`,
                data: { label: `Block ${+id+1}` },
                position: { x: +xPos, y: +yPos + 80 },
                style: { backgroundColor: 'lightblue', color: 'white' },
              }
    ]}
       return newBlock
        
     }
     case types.ADD_EDGE:{
        const {id} = action.payload
        const newEdge = {...state,  defaultEdges: [...state.defaultEdges,
            { 
                id: `${Math.random()}`, source: `${id}`, target: `${+id+1}`,  markerEnd: {type: MarkerType.ArrowClosed}
            }     
        ]}
        console.log(state);
        return newEdge
     }

    default: {
       return state
    }
  }
}

export default reducer
export {initialState}
export const {
    loadBlocks,
    addBlock,
    addEdg
} = actions
