import * as React from "react";
import LinkButton from "../components/atoms/linkButton";

// markup
const NotFoundPage = () => (
  <main className='main--index'>
    <h1>Strona nie znaleziona</h1>
    <LinkButton important to='/'>
      Wróć na stronę główną
    </LinkButton>
  </main>
);

export default NotFoundPage;
