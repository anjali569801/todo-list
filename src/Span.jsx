import React from 'react';
function Span (props) {
  return(
    <span className="underline text-2xl font-extrabold italic text-center p-4">{props.children}</span>
  );
}
export default Span;