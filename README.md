# Exercise: React

React project from scrach

## 📌 `Install Node.js`

## 📌 `Install create-react-app`

- npm install -g create-react-app

## 📌 `Create the first ""Greetings"" component`

- Import it into the main App component
- Add the text "Hello World!

## 📌 `Define a variable "name" in the "App" component`

- Pass it close to the "Greetings" component
- Then make use of this variable to change "Greetings", instead of "Hello World" it will be "Hello Montse" (we have passed Montse by props)

## 📌 `Add a button in the "Greetings" component`

- Add a button in the "Greetings" component
- When the button is clicked, it launches an event and runs a method in the parent "App" component which trigers an alert

## 📌 `Add a counter in the "Greetings" component`

- The counter will contain the increment and the decrement buttons, and you can see the current value of the counter
- Pressing the increment or decrement button will run a method in the "App" component which modifies the value of the counter. The value is saved in the state of the "App" component
- Then, the value of the counter as saved in the "App" state will have to be passed by props to the child component "Greetings"
