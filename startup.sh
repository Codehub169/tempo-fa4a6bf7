#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Start the production server on port 9000
echo "Starting the production server on port 9000..."
PORT=9000 npm run start
