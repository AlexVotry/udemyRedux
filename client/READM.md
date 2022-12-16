a little practice with updated redux.
I decided to use the same shell for all the tutorials. 
I put them in their own folders and when I completed them and moved the folder out of the src folder, up into the client folder. 
If you want to run one of those folders, just move it into the src folder and uncomment the import App statement in the index.js file.

for Books--
  I'm using json-server (npm json-server) for a mock server with db.json file as the "server".
  I'm using REST client (vs-code extension) for API testing.  (api.http file);
  package.json: "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"

in the comps folder I am using Tailwindcss.  What I discovered:

```The most important implication of how Tailwind extracts class names is that it will only find classes that exist as complete unbroken strings in your source files.If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS.```


this changed the way I would have made my agnostic components. Kind of a pain to write separate arrays instead of interpolating a color with different prefixes.
I used the classnames library (npm i classnames).  This allowed me to use interpolation bacause classnames() converts everything to a string and passes into Tailwind.

I also added react-icons:  https://react-icons.github.io/react-icons/

