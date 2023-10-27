import React from "react";

function demo() {
  const strings = ['Hello', ' ', 'World', '!'];

const concatenatedString = strings.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
}, '');

console.log(concatenatedString);

  return (
    <div>
      <button >Click</button>
    </div>
  );
}

export default demo;
