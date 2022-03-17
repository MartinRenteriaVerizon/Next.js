const accessibility = () => {
  return (
    <main>
      <h1>Accessibility Demo</h1>
      <br />
      <br />
      <h2>
        This is showing how css can directly affect the tabbing index (Order
        within the DOM vs placement on screen){" "}
      </h2>
      <nav>
        <button autoFocus style={{ float: "right" }}>
          First
        </button>
        <button>Second</button>
        <button>Last</button>
      </nav>
      <br />
      <br />
      <h2>Div vs Button: Showcases important of semantic tagging</h2>
      <nav>
        <div>Div</div>
        <div tabIndex={0}></div>
        <div tabIndex={0}></div>
      </nav>

      <div className="tab-interface">
        <div role="tablist" aria-label="Sample Tabs">
          <span
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
          >
            First Tab
          </span>
          <span
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
          >
            Second Tab
          </span>
          <span
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1"
          >
            Third Tab
          </span>
        </div>
        <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
          <p>Content for the first panel</p>
        </div>
        <div
          id="panel-2"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="tab-2"
          hidden
        >
          <p>Content for the second panel</p>
        </div>
        <div
          id="panel-3"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="tab-3"
          hidden
        >
          <p>Content for the third panel</p>
        </div>
      </div>
    </main>
  );
};

export default accessibility;
