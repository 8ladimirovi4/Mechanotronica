import { render, screen } from '@testing-library/react';
import App from './App.jsx';
global.ResizeObserver = require('resize-observer-polyfill');

describe('Components test', () => {
  test('renders learn react link', () => {
    render(<App />);
    screen.debug();
  });
});
