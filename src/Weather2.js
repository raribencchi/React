import React from "react";

export default function Weather2() {
  function alertmsg() {
    alert("Coming soon");
  }
  return (
    <div>
      <button type="button" onClick={alertmsg} class="btn btn-secondary">
        Current Temperature
      </button>
    </div>
  );
}
