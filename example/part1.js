
var eventBus = new EventBus();
//---------------------------------- We should call one handler when an action is fired
eventBus.on('one', function () {
    console.log('one');
});
eventBus.emit('one');