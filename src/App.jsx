import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div style={{backgroundImage:'url(https://img.freepik.com/free-photo/bitcoin-banknotes-frame_23-2148285267.jpg)',backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="min-h-screen bg-gray-500  flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
