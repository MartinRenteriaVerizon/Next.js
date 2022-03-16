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
          <button style={{ float: "right" }}>First</button>
          <button>Second</button>
          <button>Last</button>
        </nav>
<br /><br />
        <h2>Div vs Button: Showcases important of semantic tagging</h2>
        <nav>
          <div>Div</div>
          <div tabIndex={0}></div>
          <div tabIndex={0}></div>
        </nav>
      </main>
    );
}

export default accessibility;