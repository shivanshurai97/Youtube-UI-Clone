# YouTube UI Clone

This project is a clone of the user interface of YouTube, built using React and JavaScript. It aims to replicate the look and feel of YouTube's main functionalities, such as search, video playback, sidebar navigation, and live chat.

## Technologies Used

- **React**: The project is built using React, a JavaScript library for building user interfaces.

- **Redux Toolkit**: Redux Toolkit is used for state management, a main store with separate slices for managing different aspects of the application's data, including app state, chat messages, and search results.

- **react-router-dom**: React Router is used for client-side routing in the application, enabling navigation between different views.

- **Tailwind CSS**: Tailwind CSS is used for styling the components, providing a utility-first approach to styling.

# App Layout Structure

This section provides an overview of the component structure of the YouTube UI Clone application.

## AppLayout

- **Header**

  - Hamburger Icon _(to toggle Sidebar)_
  - Logo
  - SearchBar
  - User Icon

- **Body**
  - Sidebar
  - MainContainer
    - ButtonList _(with horizontal scrolling)_
    - VideoContainer _(with infinite scroll)_
    - SearchResults _(with infinite scrolling)_
  - WatchPage
    - EmbeddedVideoPlayer _(using iframe)_
    - CommentSection _(with nested comments)_
    - LiveChat _(with continuous chat messages)_
  - Shimmer _(for loading effect)_

## Components

### Header

- The Header component contains the youtube icon, search functionality, and user profile.

### Search Bar

- The search bar is optimized for performance, implementing debouncing to minimize API calls to the YouTube Data API.

### Sidebar

- The Sidebar component is toggled based on a global state variable and provides navigation to different sections of the application.

### MainContainer

- The MainContainer component contains two sub-components:
  - ButtonList: Displays category buttons with horizontal scrolling functionality.
  - VideoContainer: Displays video cards with an infinite scroll feature, fetching additional videos as the user scrolls.

### WatchPage

- The WatchPage component replaces the MainContainer when a video is selected. It includes an embedded video player using an iframe and a nested comment section.

### LiveChat

- The LiveChat component displays live chat messages fetched using API polling. It includes the ability to send new chat messages from the UI. It is included in the WatchPage itself.

### SearchResults

- The SearchResults component displays search results with infinite scrolling functionality, utilizing the Intersection Observer API.

### Shimmer Component

- The Shimmer Component is used to display a shimmer effect, enhancing the UI/UX experience for users while content is loading.

## Usage

To run the project locally:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.

## Acknowledgements

- This project utilizes the YouTube Data API for fetching video data.
