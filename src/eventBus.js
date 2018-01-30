(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.EventBus = factory();
    }
})(this, function () {
    'use strict';

    function EventBus() {
        
        // list of registered action (actionBroker)
        this.actionsBroker = {};

        /**
         * @method on
         * @param  string action handler name
         */
        this.on = function (action, actionHandler) {
            if (!!action && typeof (actionHandler) === 'function') { // check if the action name is in the argument of the function
                if (this.actionsBroker[action]) { //  check if the action is already registered it in 
                    this.actionsBroker[action].push({
                        handlers: actionHandler
                    });
                } else { //in the case of the action does not exist register it in actionsBroker (register the first action )
                    this.actionsBroker[action] = [{
                        handlers: actionHandler
                    }];
                }
            }else{
                console.log('wrong action type or action handler is not a function');
            }
        };

        /**
          * @method emit
          * @param  string action handler name
          */
        this.emit = function (action) {
            //array to store the arguments of the function if there is
            var args = [];
            for (var i = 1; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            if (!!action && this.actionsBroker[action]) { // check if the action exists
                // recover the action handler stored in the on 
                var actionsHandler = this.actionsBroker[action].slice();
                if (actionsHandler && Array.isArray(actionsHandler) && actionsHandler.length) { // check if the action handler
                    for (var x = 0; x < actionsHandler.length; x++) { // loop from the action handler
                        //perform action handler if exist
                        if (actionsHandler[x] && actionsHandler[x].handlers) {
                            actionsHandler[x].handlers.apply(null, args);
                        }
                    }
                }
            }else{
                console.log(action, 'is not registered');
            }
        };

        /** this function is a helper to simplify the unit test
          * @method remove
          * @param  string action handler name
          */
        this.remove = function (action) {
            if (!!action && this.actionsBroker[action]) { // remove action 
                delete this.actionsBroker[action];
            }else{
                console.log(' action can not be deleted '.action, 'is not registered');
            }
        };
    }
    return EventBus;
});