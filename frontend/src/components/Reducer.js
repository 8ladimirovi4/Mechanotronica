import { MarkerType } from 'react-flow-renderer/nocss';

const initialState = {
  defaultNodes: [
    {
      id: '1',
      data: { label: 'Block 1' },
      position: { x: 0, y: 10 },
      style: { color: 'white' },
      status: false,
    },
  ],

  defaultEdges: [],
};

const types = {
  LOAD_BLOCKS: 'LOAD_BLOCKS',
  ADD_BLOCK: 'ADD_BLOCK',
  ADD_EDGE: 'ADD_EDGE',
};

const actions = {
  loadBlocks: () => ({ type: types.LOAD_BLOCKS }),
  addBlock: (data) => ({ type: types.ADD_BLOCK, payload: data }),
  addEdg: (data) => ({ type: types.ADD_EDGE, payload: data }),
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

      if (position) {
        const xPos = position.match(regexp)[1];
        const yPos = position.match(regexp)[2];
        let newBlock = {
          ...state,
          defaultNodes: [
            ...state.defaultNodes.map((el) =>
              position ? { ...el, status: false } : el
            ),
            {
              id: `${+id + 1}`,
              data: { label: `Block ${+id + 1}` },
              position: { x: +xPos, y: +yPos + 80 },
              style: { color: 'white' },
              status: false,
            },
          ],
        };

        return newBlock;
      } else {
        return state;
      }
    }

    case types.ADD_EDGE: {
      const { id } = action.payload;
      if (id) {
        const newEdge = {
          ...state,
          defaultEdges: [
            ...state.defaultEdges,
            {
              id: `${Math.random()}`,
              source: `${id}`,
              target: `${+id + 1}`,
              markerEnd: { type: MarkerType.ArrowClosed },
            },
          ],
        };
        return newEdge;
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
