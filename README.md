# Slamoji

_Your friendly neighborhood Slack emoji clearinghouse: [slamoji.com](http://slamoji.com)_

Built with [Gatsby.js](https://www.gatsbyjs.org). (It's my first time with Gatsby, so, uh, be nice.)

<img width="1015" alt="screenshot of the site" src="https://user-images.githubusercontent.com/868389/206319034-5be60f44-d4c9-4e71-a45d-ab3caeeb9039.png">

## FAQs

### Can I suggest emoji for the site?

Yes please! Won't promise I'll publish them (because not all emoji are worthy, I guess?) but I'm game to take a look! I want Slamoji to not be a super-sprawling thing for now... it's kinda more like a tidy little collection, I guess? If you wanna add something, the next question will help!

### How do I suggest a new emoji for the site?

#### Option A: File an issue

If you don't wanna edit any code, or don't know how to do a pull-request, it's all good! Just [file an issue](https://github.com/bryanjclark/slamoji/issues) with the emoji you want added, and I'll get to it when I can!

#### Option B: Make a pull request

The three-step process for adding an additional emoji is pretty straightforward:

1. Add the image to `public/slamoji-images`.
2. Add the image's info to `src/data/slamoji-data.js`
3. Re-zip the `slamoji-images` file so the Download All button works. (TODO: Automate this step!)
