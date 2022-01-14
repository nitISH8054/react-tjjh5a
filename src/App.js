import React from "react";
import "./style.css";
import {SampleComponent} from './SampleComponent';

export default function App() {
  return (
    <>
    <div>
      <h1>Hello Stackblitz!</h1>
      <p>Start editing</p>
    </div>
    <SampleComponent bgColor="red" a={10} b={20}/>
    <SampleComponent bgColor="red" a={20} b={30}/>
    </>
  );
}
