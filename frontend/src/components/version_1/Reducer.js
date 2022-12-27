import { MarkerType } from 'react-flow-renderer/nocss';


const initialState = {
  defaultNodes: [
    {
      id: '1',
      data: { label: 'Block 1' },
      position: { x: 0, y: 10 },
      style: { color: 'white' },
    },
  ],

  defaultEdges: [],
};

const types = {
  LOAD_BLOCKS: 'LOAD_BLOCKS',
  ADD_BLOCK: 'ADD_BLOCK',
};

const actions = {
  loadBlocks: () => ({ type: types.LOAD_BLOCKS }),
  addBlock: (data) => ({ type: types.ADD_BLOCK, payload: data }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_BLOCKS: {
      return state;
    }

    case types.ADD_BLOCK: {
      let regexp = /-?\d+(\.\d+)?/g;
      const { id } = action.payload;
      const { position } = action.payload;
      const { randomCoordinate } = action.payload
      const{ newBlockId } = action.payload

    

      if (position) {
        const xPos = position.match(regexp)[1];
        const yPos = position.match(regexp)[2];
        let newBlock = {
      ...state,
          defaultNodes: [...state.defaultNodes
          //   .map((el) =>
          //   id === el.id ? { ...el, position: { x: xPos, y: yPos } } : el
          // )
          ,
            {
              id: `${newBlockId}`,
              data: { label: `Block ${newBlockId}` },
              position: { x: randomCoordinate, y: randomCoordinate },
              style: { color: 'white' },
            },
          ],
          defaultEdges: [
            ...state.defaultEdges
            ,
            {
              id: `${Math.random()}`,
              source: `${id}`,
              target: `${newBlockId}`,
              markerEnd: { type: MarkerType.ArrowClosed },
            },
          ],
        };
        return newBlock;
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
export { initialState };
export const { loadBlocks, addBlock, addEdg } = actions;
