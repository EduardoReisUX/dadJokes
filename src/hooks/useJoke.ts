import { useState, useEffect } from "react";
import { ApiService } from "../services/ApiService";

export function useJoke() {
  const [joke, setJoke] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    // A little bit of dynamic module import
    (async function () {
      // It's unnecessary importing again this module, but I'm testing this line.
      const { ApiService } = await import("../services/ApiService");
      setJoke(await ApiService());
    })();
  }, []);

  async function handleOnClick() {
    setIsLoading(true);
    setJoke(await ApiService());
    setIsLoading(false);
    setCount(count + 1);

    if (count === 3) {
      (async function () {
        const { default: toast } = await import("react-hot-toast");
        toast("Like what you see?", {
          icon: "🌟",
          style: { fontFamily: "Roboto slab" }
        });
      })();
    }
  }

  return {
    joke,
    isLoading,
    count,
    handleOnClick
  };
}
