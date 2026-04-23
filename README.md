# Groovify

Groovify is a web app built to make Spotify listening data feel more alive and accessible. Instead of static lists or occasional summaries, it gives you a real-time view of your music habits through a clean, interactive interface.

You connect your Spotify account, and Groovify pulls your top tracks and artists, then presents them in a way that’s meant to be visually engaging, not just informational.

---

## Preview

![Groovify Screenshot](./Client/public/ss.png)

---

## Why I Built This

I was never a fan of how Spotify Wrapped only comes once a year. It turns something interesting into something you have to wait for, and then it’s gone just as quickly.

I wanted something that gives that same feeling, but anytime. No waiting, no limited window, just a way to check in on what you’ve been listening to whenever you want.
One day I was having a debate over music taste with my girlfriend, and the idea of Groovify came to me, Spotify wrapped is once a year, I wanted something that gave me a mini Spotify wrapped, whenever I wanted.

---

## Features

- Spotify OAuth login (secure, read-only access)
- Displays top tracks and artists
- Real-time listening insights
- Clean, animated, responsive UI
- Works across desktop and mobile

---

## Tech Stack

**Frontend**
- React (Vite)
- Custom CSS (animations, layout, styling)
**Backend**
- Node.js
- Express (handles OAuth and API requests)
**API**
- Spotify Web API
**Hosting**
- Render via Github actions

---

## Try it yourself

### Run the following
```bash
git clone https://github.com/itshisoka17/groovify.git
cd groovify
npm install
node .
```

## Note
This project uses Spotify’s Web API with read-only permissions. It does not modify user data and is intended purely for visualization and personal insights.

## License
Apache License 2.0

Copyright © 2025 Jxdn

