# video-browser

##Notes
- Add text to search box and see search results
- Click on a video to view it
- Uses `bootstrap` for styling

- Video List component contains multiple video list items
- `SearchBar` component emits event `termChange` when user inputs, that later triggers `onTermChange` action in `App.vue`.
- `onTermChange` searches for all videos with that name, sets `videos` array with search results.
- `videos` array search result updates `VideoList` component.
- When user clicks on video in the `VideoListItem`, it triggers event `videoSelect`.
- Event `videoSelect` is received in `App.vue` and that triggers `onVideoSelect` that sets the selected video.
- This `selectedVideo` is then passed to `VideoDetails` component that renders the video player iframe and sets the video description.

## Instructor Github
https://github.com/StephenGrider/VueCasts/tree/master/video-browser


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
