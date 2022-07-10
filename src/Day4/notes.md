1. What are React Life cycles? Explain each one with Example.
    each Phase of Lifecycle:
    A. Initialization: In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component. The following code snippet describes the initialization process.

    B.  Mounting: Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage.
    componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
    componentDidMount() Function: Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time

    C. Updation: It is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key on the keyboard, etc. The following are the descriptions of functions that are invoked at different points of Updation phase.

    D. Unmounting: This is the final phase of the lifecycle of the component that is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.
        componentWillUnmount() Function: This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.

2.  What is UseReducer Hook ?(Implementation)
    The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
    The useReducer Hook returns the current state and a dispatch method.

3. What is UseMemo Hook ?(Implementation)
    The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs.
    The useMemo hook is used to improve performance in our React application.

4. What is UseRef Hook ?(Implementation)
    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
    Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

5. What is Context api?
    Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components.

    The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. The syntax is really easy to understand and also, there is not much boilerplate code to write to get it set up.

    createContext To start with the Context API, the first thing we need to do is create a context using the createContext function from React. const NotesContext = createContext([]);

    Provider The Provider component is going to be used to wrap the components that are going to have access to our context. <NotesContext.Provider value={this.state.notes}> ... </Notes.Provider> The Provider component receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data

6. Difference between callback and useCallback Hook ?
    callback is a function, usually given as an argument, that you execute before returning from your function.
    This is usually used in asynchoronous situations when you need to wait for I/O
    The callback function may be some code that hasn't been executed yet, and you don't know what's above your function in the call stack
    The useCallback hook is used when you have a component in which the child is rerendering again and again without need.
    Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
    prevent unnecessary renders.
    const memoizedCallback = useCallback( () => { doSomething(a, b); }, [a, b], );

7. What is Props Drilling Concept ?What is State Uplifting ?
    Props:-Components in React can be passed some parameters. These parameters are generally named props.
    Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.
    The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.
    A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed.

    Lifting up the State:
    every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

8. Difference between useEffect and useContext ?

    React Hooks allow us to manage state data inside functional components; now we don’t need to create class components just to manage state data.
    React has a few built-in hooks such as useState, useCallback, useEffect, etc.
    The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that you want to have access to.
    const notes = useContext(NotesContext);
    useContext: useContext is a hook that provides a way to pass data through the component tree without manually passing props down through each nested component.
    useEffect: A hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered. The useEffect accepts a function that is imperative in nature and a list of dependencies. When its dependencies change it executes the passed function.
    Now if we don’t use useEffect, every time a button is pressed data will be fetched from the server even if the choice does not change. In such a condition this hook helps us to not call the fetching logic unless our choice changes.
