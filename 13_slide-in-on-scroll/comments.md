# Comments for Javascript30, Lesson 13: Slide In on Scroll

This ended up being easier than I expected because the CSS transitions and timings were already set up in classes. I did not use the `debounce` function but I after watching the video, I see it's importance for performance. My approach to the calculation was not as sound as Wes' as he used the height of the image which is a clever way to find the point where the image should slide in.

Things to remember:
* Consider using `scrollY` instead of `offsetTop`.
* Use `window.innerHeight` in conjunction with the image's `height` to determine the scroll position for slide-in.