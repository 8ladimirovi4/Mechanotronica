import {MarkerType} from 'react-flow-renderer/nocss';

const initialState = {

    test: 'test',

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
      ],

      defaultEdges: [
        { id: 'e1-2', source: '1', target: '2',  markerEnd: {type: MarkerType.ArrowClosed}},
        { id: 'e2-3', source: '2', target: '3', markerEnd: {type: MarkerType.ArrowClosed}},
      ]
}

const types = {
    LOAD_BLOCKS: 'LOAD_BLOCKS',
    TEST: 'TEST'
}

const actions = {
    loadBlocks: () => ({type: types.ADD_BLOCK}),
    test: () => ({type: types.TEST})
}

const reducer = (state, action) => {
switch (action.type) {
    case types.LOAD_BLOCKS:{
        
       return state
    }
    case types.TEST:{
        
        return state
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
    test
} = actions
