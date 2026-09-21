# Marvel Ticket Booking Portal

A full-stack web application featuring a dynamic, interactive frontend for booking Marvel movie tickets, powered by a Node.js and Express backend with a MongoDB database to store booking records.

## Features

- **Interactive Frontend:** Hover animations reveal a hidden background and interactive panels using pure HTML and CSS.
- **Backend API:** Express.js server to handle incoming `POST` requests from the booking form.
- **Database Integration:** MongoDB connection using Mongoose to save and structure ticket booking data.
- **Dynamic Success Page:** Server-side rendered success screen confirming the user's booking details.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (Running locally on default port `27017`)

## Project Structure

```text
marvel-booking/
├── public/
│   └── index.html       # The frontend HTML and CSS
├── server.js            # The Node.js/Express backend server
├── package.json         # Project metadata and dependencies
