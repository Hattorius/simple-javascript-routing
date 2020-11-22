
# simple-javascript-routing
Simple routing using Javascript
See a little example here: [example](https://hattorius.github.io/)

## How to use
### Step 1
Create a new page in /pages/ folder. For example: `/pages/contact.html`

    <input type="text" id="email"><br />
    <input type="text" id="subject"><br />
    <textearea id="message" rows="6" cols="50"><br />
    <button>Submit message</button>

### Step 2
In `/scripts.js` add in the new file name to the pages list ([line 2](https://github.com/Hattorius/simple-javascript-routing/blob/main/scripts.js#L2)):

    var  pages  =  ['home',  'more-info',  '404'];
Let's add in `contact` for our example:

    var  pages  =  ['home',  'more-info',  '404', 'contact'];

## Step 3 (optional)
Now in `/scripts.js` add eventlisteners to make buttons work. In the file there is a switch ([line 23](https://github.com/Hattorius/simple-javascript-routing/blob/main/scripts.js#L23)), add another case and add in the event listeners.
 

    case 'contact':
	    document.querySelector("body#contact #content > button").onclick = function() {
		    var email = document.querySelector("body#contact #content > input#email").value;
		    var subject = document.querySelector("body#contact #content > input#subject").value;
		    var message = document.querySelector("body#contact #content > textearea#message").value;
		    // Do something with this information, show a model saying successfull or anything else
		}
		break;
	    
	    
	    
## That's it
