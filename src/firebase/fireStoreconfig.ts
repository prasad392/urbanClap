import {initializeApp} from 'firebase/app'
import {browserLocalPersistence, initializeAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey:  "AIzaSyB7BvB3vDSYGoaa_PQFE1decFxOjm-W8FQ",
    authDomain: "veggieslist-c54b8.firebaseapp.com",
    projectId: "veggieslist-c54b8",
    storageBucket: "veggieslist-c54b8.appspot.com",
    messagingSenderId: "995489796112",
    appId: "1:995489796112:android:de14e0f3149fa15aa3ba95"
};

const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app,{
    persistence: browserLocalPersistence
})