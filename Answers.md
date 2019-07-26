1. What problem does the context API help solve?

   Many of the new features of react deal with how to handle state as an applications scales, or grows. Being able to predictably and reliable know how data will be passed through an application is a main focus through development. Redux is one tool for state management, but a new, built in way is Context API. Following the same pattern as other hooks, there are two properties within the Context Object (created by Context API). The first property, the Provider, holds a single prop called value. The second property is the Consumer and acts as a vehicle for the provider's value. In other words the Consumer consumes (a value) that the Provider provides.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Actions are just containers that carry the type, or explanations of what happened, and a payload which is optional. Action Creator is the function that creates the Action. The Reducer creates a new object without updating state directly. The new object is based on the action type, which are the instructions for the reducer, and the payload, which is what the reducer needs to update on state. The store is the js object that where all the changes in state are kept

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state is global for the entire application. Component state only exists within the component. The problem is that components can only pass state to children. Redux lets you pass state through the entire application by using the store to create a clone of application state. If you need to pass state anywhere besides down to children, then its better to use application state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   Redux on its own only runs synchronously, but with the thunk middleware redux can run asynchronously. Thunk can change the action-creator and therefor creating a new action

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   I might just not enough experience but it seems like using the hooks that are available for handling state are not developed enough to be able to do everything that you can do in redux. I like hooks better, but I dont see myself fully switching over until being able to use hooks in an entire application is streamlined a little bit more. I dont see many problems with useContext like there are with useReducer, but for now, just to keep it simple I will probably stick with redux more.
