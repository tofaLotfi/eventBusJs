var eventBus = new EventBus();
//----------------------------------- We should call the action handler with multiple parameters
eventBus.on('log', function () {
    console.log('log:', arguments);
});
eventBus.emit('log', 'hello', 'world', '!');

