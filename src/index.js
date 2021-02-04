import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.getElementById("root");

function GitHubAPI({ login }) {
  const [data, setData] = useState(null);
  let val = +login;
  //alert(val);
  //https://api.github.com/users/moonHighway
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [data]);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return null;
}
function ReturnUser() {
  return <GitHubAPI login="2" />;
}

function ReducerImpl() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <div>
        <input type="checkbox" class="largerCheckbox" onChange={toggle} />
        <h1>Status : {checked ? "Checked" : "Unchecked"}</h1>
      </div>
    </>
  );
}

function Status() {
  const [status, setStatus] = useState("Closed");

  return (
    <div>
      <h1> Status : {status} </h1>
      <button onClick={() => setStatus("Opened")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Close</button>
    </div>
  );
}

function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert("Status :" + checked);
  });
  return (
    <>
      <div>
        <input
          type="checkbox"
          class="largerCheckbox"
          onChange={() => setChecked(!checked)}
        />
        <h1>Status : {checked ? "Checked" : "Unchecked"}</h1>
      </div>
    </>
  );
}

function Add(props) {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);

  useEffect(() => {
    console.log("val1 is " + val1);
  }, [val1]);
  useEffect(() => {
    console.log("val2 is " + val2);
  }, [val2]);

  return (
    <>
      <h1>
        {" "}
        {props.msg} - {props.errorcode}{" "}
      </h1>
      <label> Enter value a </label>
      <input
        type="number"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
        id="a"
      />
      <br />
      <label> Enter value b </label>
      <input
        type="number"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
        id="b"
      />{" "}
      <br />
      <button onClick={() => setVal3(+val1 + +val2)}> Add </button> <br />
      <input type="number" value={val3} />
      <label> Result = {val3}</label>
    </>
  );
}

function App(values) {
  return (
    <>
      <ol>
        {values.numbers.map((number, i) => (
          <li key={i}>{number.msg}</li>
        ))}
      </ol>

      <td>
        {values.numbers.map((number) => (
          <tr id="table">
            {number.value} {number.id} {number.msg}
          </tr>
        ))}
      </td>
    </>
  );
}
const numbers = [
  { id: "One", value: "1", msg: "First" },
  { id: "Two", value: "2", msg: "Second" },
  { id: "Three", value: "3", msg: "Third" }
];
ReactDOM.render(
  //<Add />,
  //<App numbers={numbers} />
  //<Status />,
  //<Checkbox />,
  //<ReturnUser />,
  <ReducerImpl />,
  rootElement
);
