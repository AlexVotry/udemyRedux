a little practice with updated redux.
I decided to use the same shell for all the tutorials. 
I put them in their own folders and when I completed them and moved the folder out of the src folder, up into the client folder. 
If you want to run one of those folders, just move it into the src folder and uncomment the import App statement in the index.js file.

### **Books--**
  I'm using json-server (npm json-server) for a mock server with db.json file as the "server".
  I'm using REST client (vs-code extension) for API testing.  (api.http file);
  package.json: <br />
  `"server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"`

in the comps folder I am using Tailwindcss https://v2.tailwindcss.com/docs.  What I discovered:

>The most important implication of how Tailwind extracts class names is that it will only find classes that exist as complete unbroken strings in your source files.If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS.


this changed the way I would have made my agnostic components. Kind of a pain to write separate arrays instead of interpolating a color with different prefixes.
I used the classnames library (npm i classnames).  This allowed me to use interpolation bacause classnames() converts everything to a string and passes into Tailwind.

I also added react-icons:  https://react-icons.github.io/react-icons/

### **Cars --**
a very basic use of redux with redux-toolkit. I created two slices (cars, forms). Obviously, something this simple would've been easier to use context, but it is a good, simple example to understand the principles of redux.

### **Media --**
  I'm using groups: Users, Albums, Photos.
  For the User I will create a userSlice and use Async/Thunk.  This is past its prime, but is still used on older apps, so I thought it worth exploring.
  the 'Albums' and 'Photos' I use modern redux toolkit query. This creates the slice in the createApi tool and makes useful hooks. Notice the use of tags to keep track of which group of albums or photos to rerender.
  I used the json-server and api.http file: <br/>
  ``` "media:server": "json-server -p 3005 --watch src/media/services/db.json",```

