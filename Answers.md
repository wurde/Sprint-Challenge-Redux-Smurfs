1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three JavaScript Array methods that don't create side-effects are `map`, `filter`, and `reduce`. For creating a new object while extending the properties of another object we can use `Object.assign`.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An `action` is an object payload that sends data from our application to our store. Actions are sent via the `dispatch` method. A `reducer` determines how our application state changes based on actions sent to it. The `store` is what holds the application state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The Application state is global. The component state is local. It's a good time to use Application state when you have many components that require access to it (and a single source of thruth would be helpful). It's a good time to use component state when you're able to use state in a single component or share state conveniently through prop drilling.

1.  What is middleware?

Middleware is a function that returns a function that returns a function. We are able to extend the functionality of Redux via middleware. For example we can add `redux-logger` and `redux-thunk`.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

The `redux-thunk` package enables asynchronous Redux. With `redux-thunk` we are able to write `action-creators` that return functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The `connect` method links up our `components` with our `redux store`.
