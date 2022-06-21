// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	// signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	// signOut,
	// onAuthStateChanged,
	} from 'firebase/auth';

import {
	getFirestore,
	doc,
	// getDoc,
	// setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	getDoc,
	setDoc
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO382LxXeP0MU3KlvRJ_w17pcKaZMyS5M",
  authDomain: "decowallity.firebaseapp.com",
  projectId: "decowallity",
  storageBucket: "decowallity.appspot.com",
  messagingSenderId: "873608983381",
  appId: "1:873608983381:web:36147655db61209ace35dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);


//sign in with google popup
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt:'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup =()=>{
	signInWithPopup(auth, googleProvider);
}


//creating collections and documents
export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd)=>{
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	
	objectsToAdd.forEach((object)=>{
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
};


//get categories and documents
export const getCategoriesAndDocuments = async()=>{
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
		const {title, items} = docSnapshot.data();
		acc[title.toLowerCase()]= items;
		return acc;
	},{});
	return categoryMap;
}
export const createUserDocumentFromAuth = async(userAuth, additionalInformation={})=>{
 if(!userAuth){return};
 const userDocRef = doc(db, 'users', userAuth.uid);
 const userSnapshot = await getDoc(userDocRef);
 if(!userSnapshot.exists()){
	const {displayName,email}= userAuth;
	const createdAt = new Date();

	try{
		await setDoc(userDocRef,{
			displayName,
			email,
			createdAt,
			...additionalInformation,
		})
	}catch(error){
		console.log('error creating the user', error.message)
	}
	
 }
 return userDocRef;
}

//sign in with email and password
export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
	if(!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
}
//create auth user with email and password
export const createAuthUserWithEmailAndPassword = async(email, password)=>{
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth,email,password);

}