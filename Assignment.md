# MERN Stack Testing & Debugging Assignment

## 🎯 Overview

This assignment focuses on implementing comprehensive testing strategies for a MERN (MongoDB, Express.js, React, Node.js) stack application. You'll work with unit tests, integration tests, and implement debugging techniques to ensure application reliability.

## 🚀 Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/
│   │   ├── components/     # React components
│   │   │   └── Button.jsx  # Example component
│   │   └── tests/
│   │       └── unit/      # Unit tests
│   │           └── Button.test.jsx
├── server/                 # Express.js back-end
│   ├── src/
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   └── utils/         # Utilities
│   └── tests/
│       └── integration/   # Integration tests
│           └── posts.test.js
└── jest.config.js         # Jest configuration
```

## 📋 Requirements

1. **Testing Environment Setup**

   - ✅ Jest configuration for both client and server
   - ✅ React Testing Library for component testing
   - ✅ Supertest for API endpoint testing
   - ✅ MongoDB Memory Server for database testing

2. **Unit Testing (Client)**

   - Write tests for React components
   - Test component rendering
   - Test user interactions
   - Test prop variations
   - Implement mocks for dependencies

3. **Integration Testing (Server)**

   - Test API endpoints
   - Test database operations
   - Validate authentication flows
   - Test error handling
   - Implement proper test isolation

4. **Coverage Requirements**
   - Achieve minimum 70% code coverage
   - Generate and save coverage reports
   - Document uncovered edge cases

## 🛠️ Setup Instructions

1. **Install Dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install client & server dependencies
   cd client && npm install
   cd ../server && npm install
   ```

2. **Running Tests**

   ```bash
   # Run all tests
   npm test

   # Run only client tests
   npm run test:unit

   # Run only server tests
   npm run test:integration

   # Generate coverage report
   npm test -- --coverage
   ```

## 📝 Testing Guidelines

### Component Testing (Client)

- Use React Testing Library's best practices
- Test user interactions using `fireEvent` or `userEvent`
- Verify component renders correctly
- Test different prop combinations
- Example from `Button.test.jsx`:
  ```javascript
  it("renders with different variants", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
  });
  ```

### API Testing (Server)

- Use Supertest for HTTP assertions
- Implement proper database cleanup
- Test authentication middleware
- Validate response status codes and bodies
- Example from `posts.test.js`:
  ```javascript
  it("should create a new post when authenticated", async () => {
    const res = await request(app)
      .post("/api/posts")
      .set("Authorization", `Bearer ${token}`)
      .send(newPost);
    expect(res.status).toBe(201);
  });
  ```

## 🔍 Debugging Tools & Techniques

1. **Client-Side Debugging**

   - React Developer Tools
   - Browser Console
   - Error Boundaries
   - Component PropTypes

2. **Server-Side Debugging**
   - Morgan for HTTP logging
   - Debug npm package
   - Error middleware
   - Stack trace analysis

## ✅ Acceptance Criteria

Your submission must include:

1. **Functional Requirements**

   - [ ] All existing tests pass
   - [ ] Minimum 70% code coverage
   - [ ] Proper error handling
   - [ ] Authentication working

2. **Technical Requirements**

   - [ ] Clean test organization
   - [ ] Proper use of testing libraries
   - [ ] Efficient test setup/teardown
   - [ ] Meaningful test descriptions

3. **Documentation**
   - [ ] Updated README
   - [ ] Coverage reports
   - [ ] Setup instructions
   - [ ] Testing strategy document

## 📊 Grading Rubric

- Test Implementation (40%)
  - Unit Tests: 20%
  - Integration Tests: 20%
- Code Coverage (30%)
  - Meeting 70% requirement: 20%
  - Documentation: 10%
- Error Handling (20%)
  - Client-side: 10%
  - Server-side: 10%
- Code Quality (10%)
  - Clean code: 5%
  - Documentation: 5%

## 🏁 Submission Guidelines

1. Ensure all tests pass locally
2. Generate and save coverage reports
3. Update documentation
4. Push changes to your repository
5. Submit pull request

## 💡 Tips

- Start with unit tests before integration tests
- Use meaningful test descriptions
- Keep tests focused and atomic
- Clean up test data properly
- Document edge cases and assumptions
- Use appropriate mocking strategies
- Maintain test isolation

## 🆘 Common Issues & Solutions

1. **MongoDB Connection Issues**

   - Solution: Using MongoDB Memory Server for tests

2. **Jest Transformation Errors**

   - Solution: Proper Babel configuration

3. **Async Test Failures**

   - Solution: Proper use of async/await and done()

4. **React Testing Library Queries**
   - Solution: Use proper query methods (getBy, findBy, queryBy)

## 📚 Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [MongoDB Memory Server](https://github.com/nodkz/mongodb-memory-server)
