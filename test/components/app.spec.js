import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/components/App';

let app = {};

describe('App', () => {
    beforeEach(() => {
        app = mount(<App className="test-class" />);
    });

    test('classnames can be passed down', () => {
        expect(app.find('.test-class h1').text()).toEqual('Welcome to React');
    });
});
