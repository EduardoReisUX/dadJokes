# About this project and my journey

<img alt="Dad Jokes on xlarge device" src="https://user-images.githubusercontent.com/82071153/125873699-6ec2b648-960f-4067-b8a3-ed4e3c134587.png">

I've just finished some courses about front-end with React, Typescript, styledComponents and some Sass and felt like it was time to build something with those tools.

So, there was this idea about creating some joke page and I decided to do a SPA with a dad jokes API. Everytime I got frustrated I would just laugh some jokes. It was very nice experience overall. 

> **"Parallel lines have so much in common. It’s a shame they’ll never meet."** — Someone, probably.

## The Design

At first, I started designing it having in mind concepts like mobile first (bootstrap framework), atomic design, harmonic typography (sizes and families) and colors (WCAG contrast and simplicity). Here's the Figma link if you want a better look:

> **https://www.figma.com/file/pf5zHTuNy8ki9UdEZGsq9q/Dad-Jokes?node-id=0%3A1**

## The Code part

Then, it was time to build. I coded on CodeSandBox because I wanted to have a good grasp about how it works.

I started building with **React, Typescript, Sass, Bootstrap and Axios**, later on I decided to make Bootstrap grids with Sass alone. Also, I realized it wasn't necessary axios to do the fetch.

Creating the components, JokeBallon, Button and Footer, the custom hook, tiping and styling was pretty simple and smooth.

Fetching was the part that gave me the most headaches, I've tried it in many ways (_resulting in many [object Object], undefined and others traumas_) and failed a lot. It was that hard because **I didn't know what I didn't know**, which was the request settings. After many Google researches, I simply used fetchAPI from JS and set up it's headers to accept json.

Finally, I did some final tweaks here and there: removed Bootstrap, react-bootstrap and did their grids system myself, implemented some dynamic imports, react-hot-toast et cetera...

Even though it's a small thing, I've learned a lot through this practice, mainly about requests. Some next features I'm thinking is to have multiple themes through Sass $maps, @mixins and @includes, and add nextjs and preact to this project... 

Pretty grateful for your patience, reader, have a nice day. ☀️
