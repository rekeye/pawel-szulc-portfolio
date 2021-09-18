import * as React from "react";
import LinkButton from "../components/LinkButton";

// markup
const IndexPage = () => {
  return (
    <main className='main--index'>
      <h1>Paweł Szulc</h1>
      <h3>Graphic Designer, lorem ipsum</h3>
      <p>
        Incididunt labore nostrud do cillum reprehenderit laborum est officia
        nulla. Voluptate exercitation magna laborum aliqua. Quis fugiat do aute
        consectetur consequat officia sunt commodo.
      </p>
      <LinkButton to='/projects'>Sprawdź moje prace</LinkButton>
      <LinkButton to='/contact' important>
        Kontakt
      </LinkButton>
    </main>
  );
};

export default IndexPage;
