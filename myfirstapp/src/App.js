import logo from "./logo.svg";
import "./App.css";
import ABS from "./component/First";
import Second from "./component/Second";
import Form from "./component/Form";

function App() {
    return (
        <div className="App">
            <ABS />
            <Form />
            <Second />
        </div>
    );
}

export default App;
