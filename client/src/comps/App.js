import React from 'react';
import Button from './Button';


export default function App () {
  return (
    <>
      <div>
        <Button primary></Button>
      </div>
      <div>
        <Button primary rounded></Button>
      </div>
      <div>
        <Button primary rounded outline></Button>
      </div>
      <div>
        <Button secondary outline></Button>
      </div>
      <div>
        <Button warning rounded outline></Button>
      </div>
      <div>
        <Button dander outline></Button>
      </div>
    </>
  )
}