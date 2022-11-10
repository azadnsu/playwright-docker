FROM mcr.microsoft.com/playwright:v1.27.0-focal

# copy project (including tests)
COPY . /orangehrm

WORKDIR /orangehrm

# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install

# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=html" ]