# PORTFOLIO APP made with React.js

This app is live [here](https://aahmed.netlify.app/).

## `Description`

This is a portfolio app made with React.js with some basic transitions. The app is super responsive till 300px width (actually 290px width) of screen-size.

The contact section of the portfolio has a form which uses Email.js to collect the responses and send it to your email. Only 2 successful responses are allowed per 24 hrs so as to limit the spammers submissions. The free email.js version has a limit of only 100 emails/month. People can even send you email by clicking on **`SAY HELLO`** button in the contact section. Social links are embedded as icons in the footer section.

## You can make your own portfolio by modifying few things from the public directory:

- **resumeData.json**: Modify it with your personal data.
- **favicon.png | favicon-black.png**: Modify it with your logo.
- **img**: Replace back-1.jpg, back-2.jpg and profile-pic.jpg.
- **img/works**: Replace it with screenshots of your works.
- **img/skills**: Add svg icons of the skill that you have but are not present in the directory. Some popular icons can be found [here](https://worldvectorlogo.com/search/).

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

## `Deployment`

### Netlify:

Run the command `npm run build` once you modify the public directory contents. A build directory will be generated in the root directory of the project. Drag and Drop this build folder to Netlify.

_There you go, Your portfolio app is live!_
