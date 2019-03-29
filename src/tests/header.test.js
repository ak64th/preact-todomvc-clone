import { h, Component } from 'preact';
import Header from '../components/Header';
import NewTodoContainer, { NewTodo } from '../components/NewTodo';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
    test('Header renders todos', () => {
        const context = shallow(<Header />);
        expect(context.find('h1').text()).toBe('todos');
        expect(context.output()).toEqual(
          <header>
            <h1>todos</h1>
            <NewTodoContainer />
          </header>
        );
    });

    test('Create new todo items', () => {
        const onEnter = jest.fn()
        const context = deep(<NewTodo onEnter={onEnter} />);
        context.find('[onKeyUp]').simulate('keyUp', {
            preventDefault: () => undefined,
            key: 'Enter',
            target: { value: 'Test text' }
        });
        expect(onEnter.mock.calls.length).toBe(1);
        expect(onEnter.mock.calls[0][0]).toBe('Test text');
    });
});
