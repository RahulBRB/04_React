import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return (
    <nav>
      <img src="./react-logo.png" width="65px"></img>
      <h1>Reasons to be excited about Learning React: </h1>
    </nav>
  );
}

function Page() {
  return (
    <ol>
      <li>
        It's a popular library.
      </li>
      <li>More demand for React</li>
    </ol>
  );
}

function Footer(){
    return(
        <footer>
            <p>© 2024 Ryzn development. All rights reserved.</p>
        </footer>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Page />
    <Footer />
  </div>
);
