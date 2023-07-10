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

That's it! You should now be able to use the Modal component from the `agpa-react-modal-library` package in your React project.