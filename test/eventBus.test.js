var EventBus = require('../src/eventBus');
var eventBus = new EventBus.EventBus();
var chai = require('chai');



var assert = chai.assert;
var should = chai.should;
var expect = chai.expect;


describe('EventBus initialization', function () {
    it('should initialize properly', function () {
        expect(eventBus).to.be.a('object');
        expect(eventBus).to.have.property('actionsBroker');
        expect(eventBus).to.have.property('on');
        expect(eventBus).to.have.property('emit');
    });

    it('check type of properties of eventBus ', function () {
        assert.typeOf(eventBus.actionsBroker, 'object');
        assert.typeOf(eventBus.on, 'function');
        assert.typeOf(eventBus.emit, 'function');
    });

});

describe('We should call one handler when an action is fired', function () {

    it('check call of on function', function () {
        eventBus.on('one', function () {
            console.log('one');
        });
        expect(eventBus.actionsBroker).to.have.property('one');
    });

    it('check taht the action one was registered ', function () {
        expect(eventBus.actionsBroker).to.have.property('one');
        expect(eventBus.actionsBroker.one).to.be.a('array');
        expect(eventBus.actionsBroker.one).to.be.a('array');
        expect(eventBus.actionsBroker.one).to.have.lengthOf(1);
        expect(eventBus.actionsBroker.one[0]).to.be.a('object');
        expect(eventBus.actionsBroker.one[0]).to.have.property('handlers');
        assert.typeOf(eventBus.actionsBroker.one[0].handlers, 'function');

    });

    it('check call of emit function with one as parameter', function () {
        eventBus.emit('one');
        expect(eventBus.actionsBroker).to.have.property('one');
    });

    it('check remove of action one ', function () {
        eventBus.remove('one');
        expect(eventBus.actionsBroker).to.not.have.property('one');
    });

});

describe('We should call multiple handler when an action is fired', function () {


    it('register action two', function () {
        eventBus.on('two', function () {
            console.log('two');
        });
        expect(eventBus.actionsBroker).to.have.property('two');
    });

    it('check taht the action two was registered ', function () {
        expect(eventBus.actionsBroker).to.have.property('two');
        expect(eventBus.actionsBroker.two).to.be.a('array');
        expect(eventBus.actionsBroker.two).to.be.a('array');
        expect(eventBus.actionsBroker.two).to.have.lengthOf(1);
        expect(eventBus.actionsBroker.two[0]).to.be.a('object');
        expect(eventBus.actionsBroker.two[0]).to.have.property('handlers');
        assert.typeOf(eventBus.actionsBroker.two[0].handlers, 'function');
    });

    it('check call of emit function with one as parameter', function () {
        eventBus.emit('one');
        expect(eventBus.actionsBroker).to.have.property('two');
        expect(eventBus.actionsBroker).to.not.have.property('one');
    });

    it('check call of emit function with two as parameter', function () {
        eventBus.emit('two');
        expect(eventBus.actionsBroker).to.have.property('two');
    });

    it('check call of emit function with three as parameter', function () {
        eventBus.emit('three');
        expect(eventBus.actionsBroker).to.have.property('two');
        expect(eventBus.actionsBroker).to.not.have.property('three');
    });

    it('check remove of action one ', function () {
        eventBus.remove('two');
        expect(eventBus.actionsBroker).to.not.have.property('two');
    });


});

describe('We should call action handler(s) with one parameter.', function () {
    it('check registered echo action ', function () {
        eventBus.on('echo', function (str) {
            console.log('echo:', str);
        });
        expect(eventBus.actionsBroker).to.have.property('echo');
    });

    it('check taht the action echo was successfully registered ', function () {
        expect(eventBus.actionsBroker).to.have.property('echo');
        expect(eventBus.actionsBroker.echo).to.be.a('array');
        expect(eventBus.actionsBroker.echo).to.be.a('array');
        expect(eventBus.actionsBroker.echo).to.have.lengthOf(1);
        expect(eventBus.actionsBroker.echo[0]).to.be.a('object');
        expect(eventBus.actionsBroker.echo[0]).to.have.property('handlers');
        assert.typeOf(eventBus.actionsBroker.echo[0].handlers, 'function');

    });

    it('check call of emit function with echo as parameter', function () {
        eventBus.emit('echo', 'hello world');
        expect(eventBus.actionsBroker).to.have.property('echo');
    });

    it('check remove of action echo ', function () {
        eventBus.remove('echo');
        expect(eventBus.actionsBroker).to.not.have.property('echo');
    });

});

describe('We should call the action handler with multiple parameters', function () {

    it('check registered log action ', function () {
        eventBus.on('log', function () {
            console.log('log:', arguments);
        });
        expect(eventBus.actionsBroker).to.have.property('log');
    });

    it('check taht the action log was successfully registered ', function () {
        expect(eventBus.actionsBroker).to.have.property('log');
        expect(eventBus.actionsBroker.log).to.be.a('array');
        expect(eventBus.actionsBroker.log).to.be.a('array');
        expect(eventBus.actionsBroker.log).to.have.lengthOf(1);
        expect(eventBus.actionsBroker.log[0]).to.be.a('object');
        expect(eventBus.actionsBroker.log[0]).to.have.property('handlers');
        assert.typeOf(eventBus.actionsBroker.log[0].handlers, 'function');
    });

    it('check call of emit function with log as parameter', function () {
        eventBus.emit('log');
        expect(eventBus.actionsBroker).to.have.property('log');
    });

    it('check remove of action echo ', function () {
        eventBus.remove('log');
        expect(eventBus.actionsBroker).to.not.have.property('log');
    });






});

describe('check special case', function () {



    it('check that we can not add action without action handler ', function () {
        eventBus.on('log');
        expect(eventBus.actionsBroker).to.eql({});
    });

    it('check that we can not call an action that is not registered ', function () {
        eventBus.emit('log');
        expect(eventBus.actionsBroker).to.eql({});
    });


});




