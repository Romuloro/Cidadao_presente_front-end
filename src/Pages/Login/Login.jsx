import React, { useEffect, useState } from "react";

import { FormLogin } from "./style";

import { useTransition, animated, config } from "react-spring";

import cidade from "./cidade.gif";

const Login = () => {

  return (
    <FormLogin>
      <div className="login">
        <div className="container sing">
          <div className="text">
            <h1>Sign up</h1>
            <h2>Let's log you in quickly</h2>
          </div>
          <form className="form">
            <div className="input">
              <input type="text" placeholder="Enter your name" name="name" />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your Nick name"
                name="nick_name"
              />
            </div>
            <div className="input">
              <input type="email" placeholder="Enter your email" name="email" />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your cellphone (DD) number"
                name="celular"
              />
            </div>
            <div className="input">
              <label>Your sex:</label>
              <select name="sexo" id="sexo">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Nao_Declarado">LGBTQIA+</option>
              </select>
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Confirm your password"
                name="password_confirm"
              />
            </div>
            <div className="button-container">
              <button className="button" type="submit">
                {" "}
                Sing up{" "}
              </button>
              <div className="singupText">
                <h1>don't have an account?</h1>
                <h2>sing-up</h2>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="imageGood">
          <img src={cidade} alt="cidade gif"></img>
          <div>
            <h1>Cidad??o Presente</h1>
            <h1>Mobiliza????o Social</h1>
          </div>
        </div> */}
        <div className="container log">
          <div className="text">
            <h1>Login</h1>
            <h2>Let's log you in quickly</h2>
          </div>
          <form className="form">
            <div className="input">
              <input type="email" placeholder="Enter your email" name="email" />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div className="button-container">
              <button className="button" type="submit">
                {" "}
                Login{" "}
              </button>
              <div className="singupText">
                <h1>don't have an account?</h1>
                <h2>sing-up</h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormLogin>
  );
};

export default Login;
