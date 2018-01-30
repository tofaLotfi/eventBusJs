var eventBus = new EventBus();

// test init eventBus
assert(typeof window.eventBus === 'object', 'eventBus() defined');
assert(typeof window.eventBus.actionsBroker === 'object', 'actionsBroker was defined');
assert(typeof window.eventBus.on === 'function', 'on function was defined');
assert(typeof window.eventBus.emit === 'function', 'emit function was defined');
assert(typeof window.eventBus.remove === 'function', 'remove function was defined');


assert(true === true, ' ======= We should call one handler when an action is fired ======');


// registered action "one" with action handler
eventBus.on('one', function () {
    console.log('one');
});

// test the type of action name
assert(typeof 'one' === 'string', 'the action name must be a string');

// test action handler type 
assert(typeof (function () {
    console.log('one');
}) === 'function', 'the action handler must be a function');

// test the action broker and if the action one was registered
assert(typeof eventBus.actionsBroker.one === 'object' && eventBus.actionsBroker.one.length == 1, 'the action one was successfully registered ');
// call action one
eventBus.emit('one');
// call remove function with one to remove this action from action broker
eventBus.remove('one');
assert(eventBus.actionsBroker.one === undefined, 'the action one was successfully  removed');



assert(true === true, ' ======= We should call multiple handler when an action is fired ======');

// registered action "two" with action handler
eventBus.on('two', function () {
    console.log('two');
});

// test the type of action name
assert(typeof 'two' === 'string', 'the action name must be a string');

// test action handler type 
assert(typeof (function () {
    console.log('two');
}) === 'function', 'the action handler must be a function');

// test the action broker and if the action "two" was registered
assert(typeof eventBus.actionsBroker.two === 'object' && eventBus.actionsBroker.two.length == 1 && eventBus.actionsBroker.one === undefined && eventBus.actionsBroker.three === undefined, 'only the action two was successfully registered ');


// test the call of 3 actions and chack that only "two" was registered
eventBus.emit('one');
eventBus.emit('two');
eventBus.emit('three');

// call remove function with one to remove this action from action broker
eventBus.remove('two');
assert(eventBus.actionsBroker.two === undefined, 'the action two was successfully  removed');


assert(true === true, ' ======= We should call action handler(s) with one parameter ======= ');

eventBus.on('echo', function (str) {
    console.log('echo:', str);
});

// test the type of action name
assert(typeof 'echo' === 'string', 'the action name must be a string');
// test action handler type 
assert(typeof (function (str) {
    console.log('echo:', str);
}) === 'function', 'the action handler must be a function');

// test the action broker and if the action "two" was registered
assert(typeof eventBus.actionsBroker.echo === 'object' && eventBus.actionsBroker.echo.length == 1, 'only the action echo was successfully registered ');
assert(typeof eventBus.actionsBroker.echo[0].handlers === 'function', 'the action handler of echo was successfully  registered');

// test the call of emit with action echo
eventBus.emit('echo', 'hello world');
// call remove function with echo to remove this action from action broker
eventBus.remove('echo');
// test remove of action echo
assert(eventBus.actionsBroker.echo === undefined, 'the action echo was successfully  removed');


assert(true === true, ' ======= We should call the action handler with multiple parameters ==============');

// registered action "log" with action handler
eventBus.on('log', function () {
    console.log('log:', arguments);
});
// test the type of action name
assert(typeof 'log' === 'string', 'the action name must be a string');

// test action handler type 
assert(typeof (function () {
    console.log('log:', arguments);
}) === 'function', 'the action handler must be a function');

// test the action broker and if the action "two" was registered
assert(typeof eventBus.actionsBroker.log === 'object' && eventBus.actionsBroker.log.length == 1, 'only the action log was successfully registered ');
eventBus.emit('log', 'hello', 'world', '!');
// call remove function with echo to remove this action from action broker
eventBus.remove('log');
// test remove of action echo
assert(eventBus.actionsBroker.log === undefined, 'the action echo was successfully  removed');




