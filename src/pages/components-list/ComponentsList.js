import Button from "../../shared/Button";
import Logo from "../../shared/Logo";
import Link from "../../shared/Link";
import Tag from "../../shared/Tag";
import Input from "../../shared/Input";
import Textarea from "../../shared/Textarea";
import RecipeInfo from "../../shared/RecipeInfo";
import IconButton from "../../shared/IconButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Title from "../../shared/Title";
import Card from "../../shared/Card";

const ComponentsList = () => {
  return (
    <div className="home">
      <Logo />
      <h1>Le beau titre h1</h1>
      <h2>Le beau titre h2</h2>
      <h3>Le beau titre h3</h3>
      <h4>Le beau titre h4</h4>
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
      <Button>Primary</Button>
      <br />
      <br />
      <Button color="accent">Accent</Button>
      <br />
      <br />
      <Button size="medium">Primary</Button>
      <br />
      <br />
      <Button color="accent" size="medium">
        Accent
      </Button>
      <br />
      <br />
      <Link href="https://google.fr">Oh le lien</Link>
      <br />
      <br />
      <Tag>un tag</Tag>
      <br />
      <br />
      <Input placeholder="Adresse mail" type="password" />
      <br />
      <br />
      <Textarea placeholder="Placeholder"></Textarea>
      <br />
      <br />
      <RecipeInfo>01:20</RecipeInfo>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <RecipeInfo type="baking">00:35</RecipeInfo>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <RecipeInfo type="portions">4</RecipeInfo>
      <br />
      <br />
      <IconButton icon={faPaperPlane} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <IconButton color="accent" icon={faPaperPlane} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <IconButton color="third" icon={faPaperPlane} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ComponentsList;
