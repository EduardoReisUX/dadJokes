import "./joke.scss";
import balloon from "../../assets/balloon.png";
import { ReactNode } from "react";

type JokeProps = {
  children?: ReactNode;
};

export function Joke({ ...props }: JokeProps) {
  return (
    <>
      <div className="contain">
        <div className="joke">{props.children}</div>
        <img src={balloon} alt="" />
      </div>
    </>
  );
}
