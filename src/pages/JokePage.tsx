import { Joke } from "../components/Joke/Joke";
import { Button } from "../components/Button/Button";
import { Footer } from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

import "./JokePage.scss";

import { useJoke } from "../hooks/useJoke";

export function JokePage() {
  const { joke, isLoading, handleOnClick } = useJoke();

  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>

      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <Joke>
              {joke
                ? `${joke.replace(/^w/, (firstLetter) =>
                    firstLetter.toUpperCase().trim()
                  )}`
                : "Whoops, there's an undefined joke! Who could've expected that?"}
            </Joke>
          </div>
        </div>

        <div className="row">
          {/* Adjust button: wrap a div, 100% width, display flex-end  */}
          <div className="col-10 offset-1">
            <Button onClick={handleOnClick} disabled={isLoading}>
              {isLoading ? "Wait a bit..." : "Next Joke"}
            </Button>
          </div>
        </div>

        <Footer>
          <div className="row">
            <div className="col-10 offset-1">
              Special thanks to you, newcomer, for joining in and discovering
              something new!
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
}
