1. High Order Component in react js ?
     A higher-order component is a function that takes a component and returns a new component.
     Note that a HOC doesn't modify the input component. Rather, a HOC composes the original component by wrapping it in a container component.
     const EnhancedComponent = higherOrderComponent(OriginalComponent);

2. Do you know about SEO ? Is it true that react js supports SEO support.
    Search engine optimization (SEO) is the process of improving the ranking (visibility) of a website in search engines.
    The higher (or more frequently) a website is displayed in a search engine list (like Google), the more visitors it is expected to receive.
    SEO considers how search engines work, what people search for, and which search terms (words) are typed.
    Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

    YES ,react js supports SEO support.

3. Clean up in useEffect?
     The useEffect hook is built in a way that if we return a function within the method, it gets executed when the component unmounts.
     if the component is unmounting, the cleanup runs after the screen has been updated.
      This is mostly used for memory leaks. 
      //componentWillUnmount : Cleanup function in useEffect. 
     useEffect(() =>{ console.log("Inside useEffect hook");
     return function cleanup() 
     { console.log("componentWillUnmount is happend...!") } })


4.  What is the use of useCallback and useMemo?
    useCallback:- The React useCallback Hook returns a memoized callback function.
    The useCallback hook is used when you have a component in which the child is rerendering again and again without need.  
    The useCallback Hook only runs when one of its dependencies update.
    This can improve performance.
    One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

    useMemo:- The React useMemo Hook returns a memoized value.
    The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
    React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.

5. Why do we need keys in react less?
    A “key” is a special string attribute need to include when creating lists of elements in React.
    Keys are used in React to identify which items in the list are changed, updated, or deleted.
    In other words, we can say that keys are used to give an identity to the elements in the lists.
    The next thing that comes to mind is that what should be good to be chosen as key for the items in lists.
    It is recommended to use a string as a key that uniquely identifies the items in the list.
    The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element
    ex:- map

6.Do you know about redux
Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. Here is a small example of react and Redux application. You can also try developing small apps. Sample code for increase or decrease counter is given below - This is the root file which is responsible for the creation of store and rendering our react app component. /src/index.
Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, we can use it with any other JavaScript framework or library.
Store, Reducer, Action, Dispatch
Redux is a predictable state container for JavaScript apps.
