# Real or AI?

A simple, browser-based quiz for cyber-awareness sessions. It shows a series of
images and asks the player to decide whether each one is a **real photo** or an
**AI-generated** fake. After each answer it reveals the give-away clues, and at the
end it drives home the key message for staying safe online: if something looks real,
that is no longer proof that it is.

Built for community awareness talks, including sessions aimed at older adults, so the
text is large, the buttons are big, and the contrast is high. It works full screen on
a projector.

## Run it

No build step and no dependencies. Either:

- **Double-click `index.html`** to open it in any web browser, or
- Serve the folder with any static web server, for example:
  ```
  python3 -m http.server
  ```
  then open the address it prints.

Everything runs locally in the browser. Nothing is uploaded or sent anywhere.

## Put it online with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings -> Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick your
   `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute your quiz is live at
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

Because `index.html` is at the root of the repo, no extra configuration is needed.

## Edit the quiz

You only ever touch one file: **`quiz-data.js`**.

To add an image:

1. Drop the image file into the `images/` folder.
2. Add an entry to the `QUIZ_ITEMS` list:
   ```js
   {
     src: "images/my-photo.jpg",
     isAI: false,            // true = AI / fake, false = real photo
     caption: "",            // optional, leave blank so it does not spoil the answer
     tells: [
       "First clue shown after the player answers.",
       "Second clue."
     ]
   }
   ```

The quiz shuffles the order automatically each time it runs.

## Files

```
index.html      The page and its three screens (start, quiz, results)
styles.css      All styling
app.js          Quiz logic (shuffle, scoring, reveal)
quiz-data.js    The images, labels and clues  <- edit this
images/         The image files
```

## A note on the images

The example images included here are third-party pictures used to demonstrate the
concept. Some show public figures, and some are likely under copyright. They are fine
for a private, in-person awareness session, but if you publish this repository or its
GitHub Pages site publicly, consider replacing them with images you own or that are
cleared for reuse (for example your own photos for the "real" set, and outputs from an
image generator you have run yourself for the "AI" set). The MIT licence below covers
the **code only**, not the images.

## Licence

Code is released under the MIT Licence. See `LICENSE`.
