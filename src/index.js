import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather1 from "./Weather1";
import Weather2 from "./Weather2";
import Forecastlink from "./Forecastlink";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React Events</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new component called Weather which renders a "Current
        Temperature" button. Add the button here.
      </p>

      <Weather1 />

      <h3>Challenge 2</h3>
      <p>
        When the button is clicked, alert "Coming soon..." Add the button here.
      </p>
      <Weather2 />

      <h3>Challenge 3</h3>
      <p>
        Create a new component called Forecast which renders a link "See
        forecast". When clicking on it, alert "Forecast feature is not ready
        yet". Include the component here.
      </p>

      <Forecastlink />
    </div>
  </StrictMode>
);
