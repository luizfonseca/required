# Presenting the (not so) awesome jQuery Required

## Usage

- First, download it (and the jQuery plugin, derp).

- Put it in your header or after the body tag

   ```javascript
    <script src="./src/jquery.required" type="text/javascript"></script>
   ```

- Bla bla bla

- Use it this way:

  ```javascript
     $('form.your_form_dude').required();
  ```

- Or like this:

  ```javascript
    $('form.your_form_dude').required({
       header: "Here goes an header, like an H3"
       message: "Which message do you want after the element name, sir? Can be any element!!11"
    });
  ```
- You have to setup a stylesheet for this plugin (or you can pick one from the samples folder). In fact, I'm using only three elements, these:

  ```css
    #message_overflow {}
    #message_from_required {}
    #message_close_required {}
  ```

- Note that ```#message_overflow``` is the main_box, the "wrapper" and ```#message_from_required``` is where I put the errors.

- Share it. Yeah. Spread it.

TODO: improve it.
