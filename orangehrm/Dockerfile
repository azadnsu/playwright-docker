# Get the base image of Node version 16
FROM node:16

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.27.0-focal

# copy project (including tests)
COPY . /orangehrm

# Set the work directory for the application
WORKDIR /orangehrm

# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install

# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=html" ]