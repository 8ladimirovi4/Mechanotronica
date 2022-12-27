import { create } from 'react-test-renderer';
import App from './App.jsx';


describe('Components test', () => {
test ('App test', () => {
const component = create(<App/>)
const root = component.root
let a = root.findAllByType('a')
expect(a.length).toBe(1)

});
});