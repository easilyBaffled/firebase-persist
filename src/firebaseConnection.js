/**
 * Useful Docs
 * [Google Console](https://console.firebase.google.com/u/0/project/re-template/database/re-template-default-rtdb/data/~2F)
 *
 * [DataSnapshot | JavaScript SDK  |  Firebase](https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot?authuser=0)
 * [Set | JavaScript SDK  |  Firebase](https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#set)
 * [Get | JavaScript SDK  |  Firebase](https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#get)
 */
import firebase from "firebase/app";
import "firebase/database";
import { createFBStorageAPI } from "./createFBStorageAPI";

const setupFirebaseConnection = ( firebaseConfig ) => {
    if ( firebase.apps.length ) firebase.app();
    else firebase.initializeApp( firebaseConfig );

    return firebase.database().ref();
};

export const initRealtimeFirebaseDB = ( firebaseConfig, throttleTime ) => {
    const dbRef = setupFirebaseConnection( firebaseConfig );
    return createFBStorageAPI( dbRef, throttleTime );
};
