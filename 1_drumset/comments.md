#Comments for Javascript30, Lesson 1: JS Drumset

Wes and I approached this quite differently. I used JS to build the buttons and assign the sounds whereas Wes used divs and embedded the sound elements on the page. I also (unnecessarily) added the ability to mouse-click the buttons to make the sound in addition to using keys.

Main takeaways:
- get more comfortable with attribute-selectors
- use data attributes to store and reference unique values
- learn more about ES6 template strings and best times to use them
- consider `.querySelectorAll` as an alternative to `.getElementsByClassName`
- separate click-event functions from the event handler for easier readability
- use `audio.currentTime = 0` to reset the sound on each `keydown` press
