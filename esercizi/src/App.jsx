import { useState } from "react";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { Todolist } from "./Todolist";
import { UncontrolledForm } from "./Uncontrolledlogin";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  const [language, setLanguage] = useState("en");
  const [selectValue, setSelectValue] = useState(language);

  function handleLanguage(event) {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    setSelectValue(newLanguage);
  }

  const NotFound = () => (
    <div>
      <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );

  return (
    <BrowserRouter>
      <Container title={"My Awersome App"}>
        <Routes>
          <Route path="/" element={<Welcome name={"jonh"} />} />
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/users" element={<GithubUsers/>}/>
          <Route path= "/users/:username" element={<ShowGithubUser/>}/>
        
          <Route path ="*"element={<NotFound/>} />
        </Routes>
        <Link to={"/"}>Welcome</Link>
        <Link to={"counter"}>Counter</Link>
        <Link to={"users"}>UserGithub</Link>
      </Container>
    </BrowserRouter>
  );
}
