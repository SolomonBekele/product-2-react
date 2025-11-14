| Feature          | Traditional JS                           | React (with Virtual DOM)                  |
| ---------------- | ---------------------------------------- | ----------------------------------------- |
| DOM updates      | Direct, every change triggers repaint    | Indirect, changes go to Virtual DOM first |
| Performance      | Can be slow for many updates             | Optimized via diffing → minimal updates   |
| State management | Manual                                   | Built-in (useState, useReducer, etc.)     |
| Complexity       | Hard for large apps                      | Easier to reason about UI declaratively   |
| UI code          | Imperative (`element.textContent = ...`) | Declarative (`<p>{count}</p>`)            |
