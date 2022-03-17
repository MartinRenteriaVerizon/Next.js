function getfocus() {
  document.getElementById("myAnchor").focus();
}

function losefocus() {
  document.getElementById("myAnchor").blur();
}

function showInput() {
  document.getElementById("input").focus();
  document.getElementById("fn").style.display = "block";
  document.getElementById("ln").style.display = "block";
}

function hideInputs() {
  document.getElementById("fn").style.display = "none";
  document.getElementById("ln").style.display = "none";
}
const focus = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Demo On Focus</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address </label>
          <input
            type="email"
            class="form-control"
            id="myAnchor"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />
      <button onClick={getfocus} style={{ marginRight: "10px" }}>
        Get Focus
      </button>
      <button onClick={losefocus}>Lose Focus</button>
      <br />
      <br />
      <button id="button" onClick={showInput}>
        Show Inputs
      </button>
      <button onClick={hideInputs}>Hide Inputs</button>
      <br></br>
      <div id="fn" style={{ display: "none" }}>
        First Name :
        <input type="text" />
      </div>
      <br />
      <div id="ln" style={{ display: "none" }}>
        Last Name :
        <input id="input" type="text" />
      </div>
    </div>
  );
};

export default focus;
