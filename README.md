# EventBus 

## API Reference

### `on`

use to add action and the action handler

```js
// @action - string
// @actionHandler - function
eventBus.on(action, actionHandler);
```

### `emit`

use to perform the action 

```js
// @action - string
eventBus.emit(action);
```


### `remove`

use to remove the action from the broker

```js
// @action - string
eventBus.remove(action);
```


## Usage


```js
// init eventBus lib
var eventBus = new EventBus(); 

// register action with action handler
eventBus.on('one', function () { 
    console.log('one');
});

// emit action (perform action)
eventBus.emit('one'); 
// remove action 
eventBus.remove('one'); 

```


## Example

in the example folder, open index.html and check in the Console the results of the 4 examples

for jacascript code you can check files in example folder : part1.js, part2.js, part3.js, part4.js


## Tests

### Unit tests

in the unitTest folder, open test.html and check that the unit tests passed are green color

###  Unit tests with chaiJs and mochaJs

```
npm install in the root folder (node Js must be installed in your machine)
```

```
open testrunner.html

check that all tests suite are displayed
 - EventBus initialization
    + should initialize properly
    + check type of properties of eventBus
 - We should call one handler when an action is fired
    + register action one
    + check taht the action one was registred
    + check call of emit function with one as parameter
    + check deregister of action one
 - We should call multiple handler when an action is fired
    + register action two
    + check taht the action two was registred
    + check call of emit function with one as parameter
    + check call of emit function with two as parameter
    + check call of emit function with three as parameter
    + check deregister of action one
 - We should call action handler(s) with one parameter
    + check registred echo action
    + check taht the action echo was successfully registred
    + check call of emit function with echo as parameter
    + check deregister of action echo
 - We should call the action handler with multiple parameters
    + check registred log action
    + check taht the action log was successfully registred
    + check call of emit function with log as parameter
    + check deregister of action echo
 - check special case
    + check that we can not add action without action handler
    + check that we can not call an action that is not registered


 to have more details for every test please click on one of test suite title or subtitle


```

###  Unit tests coverage with istanbul 
```
for more information of istanbul check https://istanbul.js.org/
```

open the terminal in the root of the eventBus folder and run this custom script (node Js must be installed in your machine)

```
npm run test-with-coverage
```
# eventBusJs
# eventBusJs
