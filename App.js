import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating React element using JSX.
const jsxHeading = <h1> This is JSX heading.</h1>

// Creating Element using Pure React.
const Heading = React.createElement('h1',{id:'Heading1'},"This is H1",jsxHeading);

function FooterComponent(){
  return <div>Kumar</div>
}
// React Component.
const HeadingComp = () => {
  return <div>
    {jsxHeading}
    <h1>Sai</h1>
    <h1><FooterComponent /></h1>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Heading);
root.render(<HeadingComp />);