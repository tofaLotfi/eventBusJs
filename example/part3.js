var eventBus = new EventBus();
//----------------------------------- We should call action handler(s) with one parameter.
eventBus.on('echo', function (str) {
    console.log('echo:', str);
});
eventBus.emit('echo', 'hello world');
