import "./App.css";
import { useFetch } from "./hooks/useFetch";

let param = "param";
const url1 = "https://catfact.ninja/fact";
let url2 = `https://cataas.com/cat/says/${param}`;

function App() {
  const { res1, firstWord, loading1, loading2 } = useFetch(url1, url2);

  return (
    <>
      <div>
        {loading2 ? (
          <p>Loading Image ...</p>
        ) : (
          <div>
            <img src={url2} alt="Cat" />
          </div>
        )}
        {loading1 ? (
          <p>Loading ...</p>
        ) : (
          <>
            <p>Fact :{res1.fact}</p>
          </>
        )}
        {loading1 ? (
          <p>Loading Trunked Fact ...</p>
        ) : (
          ((url2 = `https://cataas.com/cat/says/${firstWord}`),
          (
            <p>
              First Word Fact: <strong>{firstWord}</strong>
            </p>
          ))
        )}
      </div>
    </>
  );
}

export default App;
