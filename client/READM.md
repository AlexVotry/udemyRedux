a little practice with updated redux.


for Animal--
  I'm using json-server (npm json-server) for a mock server with db.json file as the "server".
  I'm using REST client (vs-code extension) for API testing.  (api.http file);
  package.json: "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"

in the comps folder I am using Tailwindcss.  What I discovered:

```The most important implication of how Tailwind extracts class names is that it will only find classes that exist as complete unbroken strings in your source files.If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS.```


this changed the way I would have made my agnostic components. Kind of a pain to write separate arrays instead of interpolating a color with different prefixes.
I used the classnames library (npm i classnames).  This allowed me to use interpolation bacause classnames() converts everything to a string and passes into Tailwind.

I also added react-icons:  https://react-icons.github.io/react-icons/

