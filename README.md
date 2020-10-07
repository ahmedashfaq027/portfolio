# Ashfaq's portfolio

<img src="preview.png">

View this project live [here](https://aahmed.netlify.app/).

## Why this template

- This repository includes setup of all basic things required to start a React app
- Uses `json` file to show data
- Uses `email-js` for sending `Contact` form data
- Provides clean structured code
- Pre added basic animation
- Includes skill section with svg icons
- Includes Social media links in Footer

## Techstack

- React.js
- CSS

## What I used in this project

- CRA template
- `Email-js`
- `smoothscroll-polyfill` to enable smooth scroll behavior to all browsers
- Single json file for whole website

## Architecture

```
│   FontAwesome-icons.pdf
│   package-lock.json
│   package.json
│   preview.png
│   README.md
│
├───public
│   │   favicon-black.png
│   │   favicon.png
│   │   index.html
│   │   manifest.json
│   │   Resume.pdf
│   │   resumeData.json
│   │   robots.txt
│   │
│   ├───css
│   │       fonts.css
│   │
│   ├───fonts
│   │       Devonshire-Regular.ttf
│   │       Heebo-VariableFont.ttf
│   │       Lobster-Regular.ttf
│   │       Peddana-Regular.ttf
│   │
│   └───img
│       │   avatar.png
│       │   back-1.jpg
│       │   back-2.jpg
│       │   profile-pic.jpg
│       │   rocket-top.png
│       │
│       ├───skills
│       │       adobe-illustrator.svg
│       │       adobe-xd.svg
│       │       after-effects.svg
|       |       ...
│       └───works
│               airbnb-clone.jpg
│               amazon-clone.png
│               covid-19-tracker.png
|               ...
│
└───src
    │   App.css
    │   App.js
    │   index.css
    │   index.js
    │   serviceWorker.js
    │
    ├───Components
    │       About.css
    │       About.js
    │       Contact.css
    │       Contact.js
    │       Footer.css
    │       Footer.js
    │       Header.css
    │       Header.js
    │       Home.css
    │       Home.js
    │       Intro.css
    │       Intro.js
    │       Resume.css
    │       Resume.js
    │       Skill.css
    │       Skill.js
    │       Skills.css
    │       Skills.js
    │       Work.css
    │       Work.js
    │       Works.css
    │       Works.js
    │
    └───Utility
            emailUtility.js
            scrollUtility.js
            validationUtility.js
```

## How to use

### Modifying few things from the public directory:

- **[resumeData.json](public/resumeData.json)**: Modify it with your personal data.
- **[favicon.png | favicon-black.png](public/favicon.png)**: Modify it with your logo.
- **[img](public/img)**: Replace back-1.jpg, back-2.jpg and profile-pic.jpg.
- **[img/works](public/img/works)**: Replace it with screenshots of your works.
- **[img/skills](public/img/skills)**: Add svg icons of the skill that you have but are not present in the directory. Some popular icons can be found [here](https://worldvectorlogo.com/search/).

#### Detailed information on modification of resumeData.json:

- **name**: Replace the contents of firstName and lastName with your details.
- **logo**: This logo is the one that appears in the header. This logo is picked up from public directory.
- **profilePic**: This image will be picked from public/img directory. If correct image is not specified, avatar icon will be displayed.
- **emailId**: EmailId will be used in the contact section on **SAY HELLO** button
- **resume**: Specify your resume.pdf file name. This will be picked up from public directory.
- **backgrounds**: Specify tthe home and resume with the backgrounds you want to use. This will be picked up from public directory.
- **about**: All the values from here are used as description to respective sections.
- **skills**: These are the svg icon name present in public/img/skills directory. If there's no svg icon present in there, please add it yourself and add it to the skills section in resumeData.json.
- **works**: The keys in this array are name, description, image and url. Specify the name, description, image and url respective to your work and image should be added to public/img/works directory.
- **social**: The keys in this array are name, icon, color and url. Specify the name of the social media, icon respective to font-awesome(Some of the brand icons are present in FontAwesome-icons.pdf in this repo), url of the respective social media, color ([Brand color](https://brandcolors.net/) which will be displayed on hover).

## Deployment

### Netlify:

Run the command `npm run build` once you modify the public directory contents. A build directory will be generated in the root directory of the project. Drag and Drop this build folder to Netlify.

_`There you go, Your portfolio app is live!`_
