import data from "./data";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";

function App() {
  const journal = data.map((journey) => {
    return <Journey {...journey} />;
  });

  return (
    <div>
      <Navbar />
      <section>{journal}</section>
    </div>
  );
}

export default App;
