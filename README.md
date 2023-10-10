# Lesson 2.2 - Components, JSX, and Props

## 🔍 Key Concepts

### React Components
- **Definition**: Functions that return UI elements to be rendered
- **Key Characteristics**: 
  - Independent and reusable
  - Can return HTML through JSX
  - Start with capital letters
  - Can be used multiple times, each use being an instance

### JSX (JavaScript XML)
- **Definition**: Syntax extension for JavaScript, allowing UI structuring with a syntax similar to XML/HTML.
- **Key Characteristics**: 
  - Use `className` instead of `class`
  - Components are self-closing (like `<Component />`)
  - Place JavaScript within curly braces `{}` 
  - Only one root HTML element per component

### Props (Properties)
- **Definition**: Arguments passed into React components
- **Key Characteristics**:
  - Allow dynamic data pass between components
  - Make components reusable
  - Defined as attributes in component tags (e.g., `<Component prop="value" />`)
  - Accessed within components as `props.propName`

## 🚀 Quick Code Reference

### Basic React Component with Props
```jsx
import React from "react";

function GreetByName(props) {
  return <div>Hello {props.name}!</div>;
}

function App() {
  return (
    <div className="App">
      <GreetByName name="Jared" />
    </div>
  );
}

export default App;
```

### Passing and Accessing Multiple Props
```jsx
function Greet(props) {
  return <div>Hello {props.firstName} {props.lastName}!</div>;
}

function App() {
  return (
    <div>
      <Greet firstName="Jane" lastName="Doe" />
    </div>
  );
}
```

## 📚 Additional Resources
- [JSX vs HTML](https://www.youtube.com/watch?v=)
- [YouTube - Passing Data with Props](https://www.youtube.com/watch?v=)
- [Tutorial - React Props](https://www.tutorial.com/react-props)
- [Codecademy Learn React](https://www.codecademy.com/learn/react)
- [Components Cheatsheet](https://www.cheatsheet.com/react-components)
- [JSX Cheatsheet](https://www.cheatsheet.com/react-jsx)
- [Props Cheatsheet](https://www.cheatsheet.com/react-props)
