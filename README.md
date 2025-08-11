# WebdriverIO Mocks and Spies POC

A proof-of-concept project demonstrating request mocking and spying capabilities in WebdriverIO using the BStack demo website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the tests:
```bash
npm test
```

## Project Structure

```
├── test/
│   └── specs/
│       └── mocks-and-spies.test.js  # Main test file with mocking and spying examples
├── wdio.conf.js                     # WebdriverIO configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## Test Examples

### Mocking Examples (2 tests)
1. **API Response Mocking** - Mock API endpoints with inline JSON data
2. **Dynamic Response Mocking** - Use functions to return different responses based on requests

### Spying Examples (2 tests)
1. **Network Activity Monitoring** - Monitor API calls and resource requests without modification
2. **User Interaction Monitoring** - Track form submissions and user actions

## Key Features Demonstrated

- **Request Interception**: Mock HTTP requests and responses
- **Dynamic Responses**: Generate responses based on request parameters
- **Network Monitoring**: Spy on requests without modifying them
- **Inline Mock Data**: All mock data is defined directly in test files
- **Chrome Browser Testing**: Local Chrome browser execution

## Running Tests

```bash
# Run all tests
npm test

# Run with verbose output
npm run test:verbose
```

## Configuration

The project uses a standard WebdriverIO configuration with:
- Local Chrome browser
- Mocha framework
- Spec reporter
- 60-second test timeout

## Mock Examples in the Test File

### 1. API Response Mocking
```javascript
const apiMock = await browser.mock('**/api/products**')
apiMock.respond([
    {
        id: 1,
        name: 'Mocked iPhone 15',
        price: 999,
        description: 'This is a mocked product response'
    }
], {
    headers: { 'Content-Type': 'application/json' },
    fetchResponse: false
})
```

### 2. Dynamic Response Mocking
```javascript
const dynamicMock = await browser.mock('**/api/**')
dynamicMock.respond((request) => {
    if (request.url.includes('products')) {
        return { data: [...], mocked: true }
    }
    return { message: 'Default response' }
})
```

### 3. Network Activity Spying
```javascript
const spy = await browser.mock('**/api/products**')
// No .respond() call - acts as spy only
console.log('API calls made:', spy.calls.length)
```

### 4. User Interaction Monitoring
```javascript
const formSpy = await browser.mock('**/api/auth/**')
// Monitor form submissions and user actions
console.log('Auth calls:', formSpy.calls.length)
```

## Key Features

- **Inline Mock Data**: All responses defined directly in test files
- **Request Interception**: Mock HTTP requests and responses  
- **Network Monitoring**: Spy on requests without modification
- **Dynamic Responses**: Generate responses based on request details
- **Chrome Browser Testing**: Local execution with ChromeDriver
