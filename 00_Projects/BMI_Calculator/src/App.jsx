import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    console.log(height, weight);
    if (weight == 0 || height == 0) {
      setMessage("Enter valid weight & height ");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
      if (bmi < 19) {
        setMessage("you are under weight");
      } else if (bmi >= 19 && bmi < 25) {
        setMessage("you are Healthy weight");
      } else {
        setMessage("you are over weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="main">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div className="inputs">
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" onClick={calcBmi}>
              Submit
            </button>
            <button type="button" onClick={reload}>
              Reload
            </button>
          </div>
          <div>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
