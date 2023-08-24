import GlobalStyle from "./styles/GlobalStyle";
import Pages from "./Pages";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RecoilRoot>
        <Pages />
      </RecoilRoot>
    </div>
  );
}

export default App;
