# agpa-react-modal-library

## Installation

To use the Modal component in your React project, you can install the npm package `agpa-react-modal-library` by running the following command:

```
npm install agpa-react-modal-library
```

## Usage

Once you have installed the package, you can import the Modal component in your React code by adding the following line at the top of your file:

```javascript
import Modal from 'agpa-react-modal-library'
```

You can then use the Modal component in your code as shown in the following example:

```javascript
import React, { useState } from 'react';
import Modal from 'agpa-react-modal-library';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} setStatus={setIsOpen} modalText="Hello, World!" />
    </div>
  );
}

export default App;
```

In the code above, we have imported the Modal component and used it inside the `App` component. The `isOpen` prop is used to control whether the Modal is open or closed, while the `setStatus` prop is used to update the `isOpen` state when the user clicks the close button. The `modalText` prop is used to display the text inside the Modal.

## Customizing Modal Styles

The `Modal` component allows you to customize its appearance by using the `style` prop. The `style` prop is an object that accepts various CSS properties to modify the modal's appearance.

To use the `style` prop, simply include it when rendering the `Modal` component. Here's an example of how to use the `style` prop to customize the modal's background color, modal color, width, and height:

```jsx
import React, { useState } from 'react';
import Modal from 'agpa-react-modal-library';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        setStatus={setIsOpen}
        modalText="Employee Created!"
        style={{
          bgColor: "rgba(0, 0, 0, 0.3)", // Customize the background color of the modal container
          modalColor: "red", // Customize the background color of the modal itself
          width: "125px", // Customize the width of the modal
          height: "200px", // Customize the height of the modal
          // Add any other custom styles you want to apply to the modal
        }}
      />
    </div>
  );
}

export default App;
```

In the example above, the `style` prop is passed as an object to the `Modal` component with four custom CSS properties: `bgColor`, `modalColor`, `width`, and `height`. The `bgColor` property customizes the background color of the modal container, the `modalColor` property customizes the background color of the modal itself, the `width` property customizes the width of the modal, and the `height` property customizes the height of the modal.

You can add more CSS properties to the `style` object to further customize the modal's appearance according to your specific requirements.

With the `style` prop, you have the flexibility to adjust the modal's design and tailor it to match your application's overall look and feel.

That's it! You should now be able to use the Modal component from the `agpa-react-modal-library` package in your React project.