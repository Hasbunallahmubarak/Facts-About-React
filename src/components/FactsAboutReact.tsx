import NavBar from "./NavBar";
import Content from "./Content";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const nav_link_items: string[] = ["Pricing", "About", "Contact"];
const first: string =
  "It's a great library rising above the rest of the libraries in the web development ecosystem.";
const second: string =
  "It's uses composable and component-based approach in project development; which allows re-usability of code";
const third: string =
  "It is a great toolset for a web developer; an opener to building web applications";
const fourth: string = "It was released in 2019";
const fifth: string = "It is maintained by Facebook (Meta)";
const sixth: string =
  "Powers thousands of enterprise apps; including mobile apps";
const content_body: string[] = [first, second, third, fourth, fifth, sixth];
function FactAboutReact() {
  const [toggleButton, setToggleButton]: [
    boolean,
    Dispatch<SetStateAction<boolean>> //explicitly tells the typescript compiler, the setToggleButton is a callback function that updates state "toggleButton" and returns a boolean as well.
  ] = useState(false);
  const toggleColor: string = toggleButton ? "toggle" : "";
  function click_func() {
    setToggleButton(!toggleButton);
  }

  useEffect(() => {
    const date = new Date();
    const currentHours = date.getHours();
    console.log(currentHours);
    if (currentHours <= 7 || currentHours >= 19) {
      setToggleButton(false);
    } else {
      setToggleButton(true);
    }
  }, []);

  return (
    <div id="main">
      <NavBar
        link_items={nav_link_items}
        toggle={toggleColor}
        handleClick={click_func}
      />
      <Content content={content_body} toggle={toggleColor} />
    </div>
  );
}
export default FactAboutReact;
