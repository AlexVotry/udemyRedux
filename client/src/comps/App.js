import React from 'react';
import Button from './Button';
import {GoBell, GoCloudDownload, GoAlert, GoCalendar} from 'react-icons/go';

export default function App () {
  const handleClick = () => {
    console.log('click');
  }

  return (
    <>
      <div>
        <Button danger outline onClick={handleClick} className="mb-5"><GoBell /> Click Me!!</Button>
      </div>
      <div>
        <Button success rounded><GoAlert />second</Button>
      </div>
      <div>
        <Button primary rounded outline><GoCloudDownload />third</Button>
      </div>
      <div>
        <Button secondary outline><GoCalendar />forth</Button>
      </div>
      <div>
        <Button warning rounded outline>fifth</Button>
      </div>
      <div>
        <Button danger>sixth</Button>
      </div>
    </>
  );
}