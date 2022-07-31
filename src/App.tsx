import C2BFlow from "./containers/C2BFlow/C2BFlow";
import C2BContextProvider from "./containers/C2BFlow/context/c2b.context";

function App() {
  return (
    <div className="App">
      <C2BContextProvider>
        <C2BFlow />
      </C2BContextProvider>
    </div>
  );
}

export default App;
