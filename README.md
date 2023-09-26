```markdown
# News API

A simple Node.js API for fetching news articles from the GNews API, with caching and Swagger documentation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- GNews API key. You can obtain one by signing up on the GNews website: [GNews API](https://gnews.io/).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/news-api.git
   cd news-api
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root directory and set your GNews API key:

   ```env
   GNEWS_API_KEY=your-api-key-here
   PORT=3000 # Optional, specify the desired port (default is 3000)
   ```

## Usage

To start the server, run the following command:

```bash
npm start
```

Your API will be accessible at `http://localhost:3000` (or your specified port).

## API Endpoints

- Fetch N news articles:
  - **GET** `/api/news/:count`
  - Example: `http://localhost:3000/api/news/10`

- Get news articles by category:
  - **GET** `/api/news/:category`
  - Example: `http://localhost:3000/api/news/business`

- Search for news articles by keywords:
  - **GET** `/api/search`
  - Example: `http://localhost:3000/api/search?keyword=technology`

For detailed information on each endpoint and their parameters, refer to the [Swagger Documentation](#swagger-documentation) section.

## Swagger Documentation

You can access the Swagger documentation for this API by visiting:

```
http://localhost:3000/api-docs
```

The Swagger UI provides an interactive interface for exploring and testing the API endpoints.

## Environment Variables

- `GNEWS_API_KEY`: Your GNews API key.
- `PORT` (Optional): Specify the desired port for the server to run (default is 3000).

## Contributing

Contributions are welcome! If you find a bug or have any suggestions, please open an issue or submit a pull request.
