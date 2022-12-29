import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoAlert, GoCalendar } from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="p-3">
      <Button danger outline onClick={handleClick} className="mb-5">
        <GoBell /> Click Me!!
      </Button>
      <Button success> <GoAlert /> second </Button>
      <Button primary rounded outline> <GoCloudDownload /> third </Button>
      <Button secondary outline> <GoCalendar /> forth </Button>
      <Button warning rounded outline> fifth </Button>
      <Button danger>sixth</Button>
  </div>
  )
}