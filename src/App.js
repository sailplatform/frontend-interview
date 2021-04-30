import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/* style the div below so "LEFT" is on the left side and "RIGHT" is on the right side */}
      <StyledContent>LEFT RIGHT</StyledContent>

      {/* create a button & then show an alert when user clicks the button */}
    </div>
  );
}

export default App;

const StyledContent = styled.div`
  border: 2px solid blue;
  width: 50%;
  margin: auto;
`;
