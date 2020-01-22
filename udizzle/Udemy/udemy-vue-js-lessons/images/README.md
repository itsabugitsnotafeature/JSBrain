# Uplod images to Imgur

#Notes
- Uploads image to imgur.com
- Have to be logged in to imgur already.
- State management with Vuex
- Drag and drop image upload
- Authentication with OAuth2
- Stuling using Semantic-ui [semantic-ui.com], imported in `images/public/index.html`

#About VUEX
- Requires your defing all `state, getters, actions, mutations` in one folder.
- Then export it and call for actions whever necessary.

#Udemy Course
https://www.udemy.com/course/vue-js-course/learn/lecture/10230110?start=0#overview

#Instructor Github Repo
https://github.com/StephenGrider/VueCasts/tree/6c33ebdbe619fb712adf8196f5b6bdd0b5e1425a/images

#Folders
images/src/main.js => Main App Workflow
images/src/store/modules/auth.js => Contains VUEX Authorization login/logout logic
images/src/api/imgur.js => Contains IMGUR login/GET/SET images API
components/AuthHandler => Component to add / remove token to login/ logout and handle navigation
components/ImageList  => Component so show image list
components/UploadForm  => Component to upload images


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
