# Flags Service Node.js

This is a simple Node.js service for serving JSON data from a directory named "flag_data".

## Prerequisites

- Node.js (v14.x or later recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the project files to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running:

```bash
npm install
```

## Running the Service

### Development Mode

To start the service in development mode with automatic restarts on file changes, run:

```bash
npm run dev
```

### Production Mode

To start the service in production mode, run:

```bash
npm start
```

## Accessing the Service

Once the service is running, it will be accessible at:

```
http://localhost:5000/flags
```

## Project Structure

- `index.js`: The main entry point of the application.
- `flag_data/`: The directory containing the JSON data files.
- `package.json`: The project configuration file, including scripts and dependencies.

## Scripts

- `start`: Runs the service in production mode.
- `dev`: Runs the service in development mode using `nodemon`.

