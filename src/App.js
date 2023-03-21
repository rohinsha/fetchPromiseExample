import "./styles.css";
import React from "react";
const fetchData = () =>
  new Promise((r) => setTimeout(() => r(Date.now()), 10000));
export default function App() {
  const [result, setResult] = React.useState();
  const data = fetchData().then((value) => {
    console.log(value + "dsdsd");
    setResult(value);
  });
  console.log(data.toString() + "rtrttr");
  return (
    <div className="App">
      {result === data.toString() ? <div> hello</div> : <div> gajbhiye</div>}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
