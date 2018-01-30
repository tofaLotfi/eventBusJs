var eventBus = new EventBus();
//----------------------------------- We should call multiple handler when an action is fired
eventBus.on('two', function () {
    console.log('two');
});
eventBus.emit('one');
eventBus.emit('two');
eventBus.emit('three');