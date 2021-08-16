import React from "react";

const Header = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let loginData = {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    };
    props.login(loginData);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a
        className="navbar-brand"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer">
        React
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://create-react-app.dev/docs/documentation-intro/"
              target="_blank"
              rel="noopener noreferrer">
              Dev Docs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react"
              target="_blank"
              rel="noopener noreferrer">
              Digital Ocean
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.w3schools.com/react/default.asp"
              target="_blank"
              rel="noopener noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
        {props.status ? (
          <form
            className="form-inline ml-auto"
            onSubmit={(event) => {
              handleSubmit(event);
            }}>
            <input
              className="form-control mr-sm-2"
              type="text"
              name="userName"
              placeholder="Användarnamn"
            />
            <input
              className="form-control mr-sm-2"
              type="password"
              name="password"
              placeholder="Lösenord"
            />
            <button className="btn btn-success" type="submit">
              Logga in
            </button>
          </form>
        ) : (
          <button className="btn btn-dark ml-auto" onClick={props.logout}>
            Logga ut
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;