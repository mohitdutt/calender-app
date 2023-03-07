import React from "react";
import Calendar from "react-calendar";
import './Style.css';

function Calender(props) {
  // const [date, setDate] = React.useState("2023-03-05")
  return (
    <div className="App">
        <Calendar
          // onChange={onChange}
          value={new  Date(props.date)}
          tileClassName="content"
        />
    </div>
  );
}

export default Calender;
