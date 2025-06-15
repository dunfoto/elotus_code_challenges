# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 72 hours (please no more!)

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x] Add a search bar.
- [x] User can view movie details by tapping on a cell.
- [x] User sees loading state while waiting for the API.
- [x] User sees an error message when there is a network error.
- [x] Simple responsive.

The following **optional** features are implemented:

- [ ] Implement segmented control to switch between list view and grid view.
- [ ] All images fade in.
- [x] Implement lazy load image.
- [x] Customize the highlight and selection effect of the cell.
- [x] Improve UX loading by skeleton loading.
- [ ] Enhance responsive.

The following **additional** features are implemented:

- [ ] **`List anything else that you can get done to improve the app functionality!`**

    - Missing namespace and nested common function translate for i18n.
    - Missing state management (like redux, zustand,...).
    - Missing segment control to switch between list and grid view. Because it take a lot of time if I want to implement with transition and beauty animation.
    - Missing handle fade in image.
    - Missing behaviour for search bar and flow for result in search bar with tabs in main screen.
    - Missing build common for react-query by the key use for each apis.
    - Missing test for this project. I prefer use e2e test (via Playwright) but I don't have much time then I cannot setup it.


## Requirements

- Please use ReactJS with typescript
- Please use SCSS
- Please do not use any CSS/SCSS framework or UI library

## Video Walkthrough

Here's a walkthrough of implemented user stories:

> [ezgof.gif](https://github.com/dunfoto/elotus_code_challenges/blob/main/ezgif.gif)

## Submit

**When you're done, send us back a link to a repository with your source code, with a description of what you've done and any build instructions in the readme!**

1. Clone project https://github.com/dunfoto/elotus_code_challenges
2. Run `yarn` or `npm install`
3. Run `yarn start` or `npm run start`
4. Access to `http://localhost:3000/movies` and try.

## License

    Copyright [2016] [dung-trinh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.