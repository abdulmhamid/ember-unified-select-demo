import Ember from 'ember';

const {set, Controller} = Ember;

export default Controller.extend({
    selected: '3',
    selectBoxValue: '3',
    statesArray: [
        {
            name: '1'
        },
        {
            name: '2'
        },
        {
            name: '3'
        },
        {
            name: '4'
        },
        {
            name: '5'
        },
        {
            name: '6'
        },
        {
            name: '7'
        },
        {
            name: '8'
        },
        {
            name: '9'
        },
        {
            name: '10'
        }
    ],
    actions: {
        setSelectBoxValue(value) {
            set(this, 'selectBoxValue', value);
        }
    }
});
