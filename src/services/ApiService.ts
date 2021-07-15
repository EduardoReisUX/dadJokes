//https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios
//https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck

// I struggled so hard to discover this fetch() config. At first I tried to make some default fetch
//    but it didn't worked, then I used Axios with Insomnia... same results. I looked
//    the proper 'docs' from icanhazdadjoke and it said to config headers: { Accept: "application/json" },
//    but I didn't know how to do it. Thanks God it's over!!
// Take the time to appreciate it.

export async function ApiService(): Promise<string> {
  const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json"
      }
    }),
    data = await response.json(),
    joke = data.joke;

  return joke;
}

/* 
import axios from "axios";
export function axiosGet() {
  const promise = axios
    .get("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json"
      }
    })
    .then((value) => value);

  const printJoke = async () => {
    const response = await promise;
    console.log(response.data.joke);
    return response.data.joke;
  };

  printJoke();

  //const theJoke = await joke.data.joke
  //console.log(joke)
}
 */
