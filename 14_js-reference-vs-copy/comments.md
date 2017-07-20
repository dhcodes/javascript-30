# Comments for Javascript30, Lesson 14: JS Reference vs. Copy

I already knew a lot of these concepts from MDN but it was a nice refresher. The deep object cloning via `JSON.parse(JSON.stringify(obj))` is particularly interesting.

Things to remember:
* You need to make a copy of an array before trying to change an item within it.
* `Object.assign()` is a shallow copy (one level deep).