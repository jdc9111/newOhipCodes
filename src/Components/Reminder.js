import React from 'react';
import reminder from "../images/checkmark.svg"


const Reminder = (props) => {
  return <div className="flex items-center">
      <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="rgb(74 222 128)">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg></div>
      <div><p className="text-xs pl-2">{props.text}</p></div>
  </div>;
};

export default Reminder;
