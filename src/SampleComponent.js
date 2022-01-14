import React from 'react';
export function SampleComponent({bgColor}){
  let styleObj={
    backgroundColor: bgColor,
  };
  let a=10;
  let b=20;

  return(
    <>
    <div style={styleObj}>Heading

    </div>
    <div>Value of a  is : {a}</div>
    <div>Value of a  is : {b}</div>
    <div>sum of {a} and {b} is : {a+b}</div>
    </>
  );
}