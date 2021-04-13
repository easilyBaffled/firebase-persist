import pThrottle from "p-throttle";

export const createFBStorageAPI = ( firebaseRef, interval = 2000 ) => {
    const setFBValue = pThrottle({
        interval,
        limit: 1
    })( firebaseRef.set );

    return {
        deleteItem: setFBValue,
        getItem:    () => firebaseRef.get().then( ( snapshot ) => snapshot.val() ),
        setItem:    setFBValue
    };
};
