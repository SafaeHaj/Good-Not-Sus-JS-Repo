import firebase from 'firebase/app' // the core part of firebase package
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDsobQm4tmK0VkOHUrpgI4a4Ca1El0s",   
    authDomain: "fire-test-84828.firebaseapp.com",  
    projectId: "vuefire-test-84828",  
    storageBucket: "vuefire-test-84828.appspot.com",  
    messagingSenderId: "599997662674",  
    appId: "1:599997662674:web:70b2b624cdb32ee323340b",  
    measurementId: "G-KR82JFBCJL"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}