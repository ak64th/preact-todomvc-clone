import { h, Component } from 'preact';
import Header from '../components/Header';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
    test('Header renders todos', () => {
        const context = shallow(<Header />);
        expect(context.find('h1').text()).toBe('todos');
        expect(context.find(<input />).length).toBe(1);
    });
});
