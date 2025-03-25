import { requests } from "./request";
import { Row } from "./ components/Row";
import { Banner } from "./ components/Banner";
import { Header } from "./ components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trend Movies" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
        <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
      </div>
    </>
  );
}

export default App;
