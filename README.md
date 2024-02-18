# Text Analyzer

## Overview

Text Analyzer is a Node.js application that provides various text analysis functionalities through a set of APIs. It allows users to analyze text for word count, paragraph count, character count, sentence count, and identify the longest words in paragraphs.

## Architecture

### Backend

The backend of the application is built with Node.js and Express.js. It handles incoming requests, performs text analysis operations, and sends back the analysis results as JSON responses.

#### Dependencies

- **Express.js:** Used for handling HTTP requests and routing.
- **Mongoose:** Provides MongoDB object modeling for Node.js.
- **dotenv:** Loads environment variables from a .env file.

### Frontend (Optional)

While this project focuses on the backend, you can build a frontend interface to interact with the APIs. You can use any frontend framework or library of your choice, such as React, Vue.js, or Angular. I've used HTML, CSS and JavaScript to build the frontend. It is located in the `client` folder

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>

2. Navigate to the project directory:
   ```bash
   cd text-analyzer

3. Install dependencies
   ```bash
   npm install

4. Set up environment variables:
   - Create a .env file in the root directory.
   - Add the following environment variables:
   ```bash
      MONGO_URI=<your_mongo_uri>
      PORT=<port_number>

## Usage

# Starting the server

```bash
npm start
```

The server will be running locally on port 3000 by default.

## APIs

Word Count API
URL: /api/wordCount
Method: POST
Request Body: { "text": "<your_text_here>" }
Description: Analyzes the text for word count.
Response: Returns the word count.

Paragraph Count API
URL: /api/paragraphCount
Method: POST
Request Body: { "text": "<your_text_here>" }
Description: Analyzes the text for paragraph count.
Response: Returns the paragraph count.

Character Count API
URL: /api/characterCount
Method: POST
Request Body: { "text": "<your_text_here>" }
Description: Analyzes the text for character count.
Response: Returns the character count.

Sentence Count API
URL: /api/sentenceCount
Method: POST
Request Body: { "text": "<your_text_here>" }
Description: Analyzes the text for sentence count.
Response: Returns the sentence count.

Longest Words in Paragraphs API
URL: /api/longestWordsInParagraphs
Method: POST
Request Body: { "text": "<your_text_here>" }
Description: Identifies the longest words in each paragraph of the text.
Response: Returns an array of longest words for each paragraph.

## Log Visualization

The project utilizes a logging framework called Winston to manage logging functionalities efficiently. It provide features like log levels, log formatting, and log storage options.

For data visualization and exploration, Kibana has been used. It is a data visualization tool that allows users to visualize and explore log data. It provides a user interface for querying, analyzing, and visualizing log data.

- **Integrate with Elasticsearch**: Set up Elasticsearch and configure the logging framework to send log data to Elasticsearch.

- **Visualize the logs**: Use Kibana to visualize the logs.

- **Monitor the logs**: Use Kibana to monitor the log data in real-time. Analyze trends, identify anomalies, and troubleshoot issues proactively to ensure the reliability and performance of the Text Analyzer application.

## Running Tests

Run tests by executing:
```bash
npm test
```

## Contributing
Contributions are welcome! Feel free to submit pull requests.

## License
This project is licensed under the MIT License.

