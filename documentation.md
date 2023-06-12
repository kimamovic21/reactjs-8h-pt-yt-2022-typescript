React Course For Beginners - Learn React in 8 Hours


Module 13: Typescript


Module 14: Redux Toolkit
-npm i @reduxjs/toolkit react-redux
-kreiramo store.ts fajl
-8 store.ts fajlu kreiramo varijablu store
-u App.ts komponenti importujemo Provider komponentu
-Provider komponenti dodajemo store={store}
-u store.ts fajlu kreiramo userSlice varijablu
-kreiramo varijablu initialState
-u userSlice varijabli kreiramo reducers objekt
-dodajemo export const {login, logout}
-u store varijabli dodajemo reducer objekt
-u Login.tsx komponenti dodajemo const [newUsername, setNewUsername] = useState("")
-input elementu dodajemo onChange dogadaj
-u Login.tsx komponentu importujemo login i logout funkcije
-importujemo useDispatch React hook
-kreiramo dispatch varijablu cija je vrijednost jednaka useDispatch() funkciji
-importujemo useSelector React hook
-kreiramo varijablu username cija je vrijednost jednaka useSelector() funkciji
