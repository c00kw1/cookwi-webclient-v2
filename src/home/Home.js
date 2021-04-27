import Title from "../components/Title";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Le beau titre h1</h1>
      <h2>Le beau titre h2</h2>
      <h3>Le beau titre h3</h3>
      <Title>
        <h1>Inscription</h1>
      </Title>
      <Title>
        <h2>Inscription</h2>
      </Title>
      <Title>
        <h3>Inscription</h3>
      </Title>
      <Title>
        <h4>Inscription</h4>
      </Title>
      <Card width="350px">
        Bonjour je suis un sacre test de ouf car je permet de voir si la card se
        forme bien avec du contenu dedans
      </Card>
      <br />
      <br />
    </div>
  );
}

export default Home;
