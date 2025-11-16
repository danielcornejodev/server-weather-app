
---

# **2️⃣ Backend Repo README (`weather-backend`)**

```markdown
# Weather Backend API

This is a **Node.js + Express backend** that provides weather data for a given city.  
It demonstrates a **Backend-for-Frontend (BFF)** pattern: the frontend never calls external APIs directly.

> Apigee was conceptually part of the architecture, but due to eval environment limitations, the backend URL is used directly.

## Live Demo

- Backend URL: [https://server-weather-app.vercel.app/](https://server-weather-app.vercel.app/)

## Features

- `/weather/:city` endpoint returns mock weather data (city, temperature, condition)  
- Handles **CORS** for frontend requests  
- Easily extendable to connect to real external APIs  

## Tech Stack

- Node.js  
- Express  
- CORS  

## Architecture
[Frontend - Netlify] → [Backend - Vercel / BFF] → [External API or Mocked Data]
