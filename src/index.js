import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
  { id: 1, message: "hi", likesCount: 11 },
  { id: 2, message: "this my first prog", likesCount: 12 },
  { id: 3, message: 'Post message', likesCount: 13 },
  { id: 4, message: 'Plan', likesCount: 14 },
]
let Dialogs_Data = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Viktor' },
  { id: 3, name: 'Natali' },
  { id: 4, name: 'Joe' },
]
let Message_Data = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Fine, thanks' },
  { id: 4, message: 'Go-go-go' },
]

ReactDOM.render(
  <App PostsData={PostsData} Dialogs_Data={Dialogs_Data} Message_Data={Message_Data}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
