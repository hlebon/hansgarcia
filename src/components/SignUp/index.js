import React from "react";
import { navigate } from "gatsby";
import { css } from "@emotion/core";
import addToMailchimp from "gatsby-plugin-mailchimp";

class Signup extends React.Component {
  state = {
    email: "",
    name: "",
    lastName: "",
    error: false,
    msg: "",
    canSubmitForm: false
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    let { canSubmitForm } = this.state;
    if (name === "email") {
      canSubmitForm = this.isValidEmail(value);
    }
    this.setState({
      [name]: value,
      canSubmitForm
    });
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    const { email, name, lastName, canSubmitForm } = this.state;
    if (!canSubmitForm) {
      this.setState({
        error: true,
        msg: `Ingrese un email valido`
      });
      return;
    }
    try {
      const { result, msg } = await addToMailchimp(email, {
        PATHNAME: this.props.pathname,
        FNAME: name,
        LNAME: lastName
      });
      if (result === "error") {
        this.setState({
          error: true,
          msg: msg.split("<")[0]
        });
      } else {
        navigate(`/confirmar`, { state: { name } });
      }
    } catch (error) {
      this.setState({
        error: true,
        msg: "Ups! Hemos tenido un problema, intentalo de nuevo"
      });
    }
  };

  isValidEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    const { name, lastName, email, error, msg, canSubmitForm } = this.state;
    const { clean = false } = this.props;
    return (
      <form
        onSubmit={this.handleOnSubmit}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            ${!clean && `padding: 30px 20px;`}
            ${!clean && `border: 1px solid #e4e3e3;`}
            ${!clean && `box-shadow: 1px 2px 10px #e4e3e3;`}
            ${!clean &&
              `@media (min-width: 620px) {
              flex-direction: row ;
              justify-content: space-between;
              & > div:nth-of-type(1) {
                width: 45%;
                margin: auto;
                margin-top: 0;
                padding: 20px;
              }
              & > div:nth-of-type(2) {
                width: 55%;
                padding: 20px;
              }
            }`}
          `}
        >
          <div id="newsletter">
            <h3 style={{ margin: 0, marginBottom: "1rem" }}>
              Únete a mi Newsletter
            </h3>
            {!clean && (
              <p style={{ marginTop: "5px" }}>
                Suscribete para recibir mi contenido por email y no te pierdas
                ninguno de mis artículos
              </p>
            )}
          </div>
          <div
            id="form"
            css={css`
              width: 100%;
              display: flex;
              flex-direction: column;
              input {
                margin-bottom: 10px;
                padding: 8px;
                border: 1px solid #d4d4d4;
                border-radius: 5px;
              }
            `}
          >
            {!clean && (
              <React.Fragment>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  value={name}
                  onChange={this.handleOnChange}
                  required
                />
              </React.Fragment>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleOnChange}
              required
            />

            <button
              type="submit"
              css={css`
                width: 100%;
                max-width: 120px;
                border: 1px solid #9d40ab;
                padding: 9px 7px;
                border-radius: 7px;
                background-color: #c441c8;
                color: white;
                cursor: pointer;
                &:hover {
                  background-color: #9c3faa;
                }
              `}
            >
              Suscribirse
            </button>
            {error && <div style={{ color: "red" }}>{msg}</div>}
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
