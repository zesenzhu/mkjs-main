const logEnhancer = (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action);
        originalDispatch(action);
    };

    return store;
};