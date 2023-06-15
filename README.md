# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  
- [Author](#author)



## Overview

The card details form was created using React and JavaScript. The form allows users to enter their cardholder name, card number, expiry date, and CVC. It provides real-time validation for each input field, displaying error messages for invalid or missing information. Upon form submission, the form undergoes a simulated asynchronous process before displaying a success message. The success message thanks the user and provides an option to continue, which resets the form for new entries. Overall, the form provides a user-friendly interface, efficient form validation, and clear feedback for successful submissions.

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

To create the card details form, we followed a three-step process:

1. Designing the User Interface:
   We began by designing the user interface of the card details form. This involved creating the layout and structure of the form using HTML and CSS. We divided the form into different sections such as cardholder name, card number, expiry date, and CVC. We also added error handling and styling to provide visual feedback to the user. The design included both the front and back sides of the card, with appropriate placeholders and formatting for each input field.

2. Implementing the Form Logic:
   After designing the user interface, we implemented the form logic using React and JavaScript. We used React hooks, such as useState, to manage the form state and capture user input. We created separate state variables for each input field, such as name, card number, month, year, and cvc. We added event handlers to update the respective state variables whenever the user made changes to the input fields. We also implemented form validation logic to check for errors, such as empty fields, invalid expiry dates, and invalid CVC format.

3. Handling Form Submission and Success:
   Finally, we implemented the logic for form submission and success handling. When the user submits the form, we validate the form inputs and display any relevant errors. If the form is valid, we simulate a form submission delay using a setTimeout function to demonstrate asynchronous behavior. After the delay, we set the success state to true, indicating that the form submission was successful. This triggers the rendering of a success message instead of the form, displaying a thank you message and an option to continue. Clicking the continue button reloads the page, resetting the form and allowing the user to enter new card details.

By following this process, we were able to create a functional card details form that provides a user-friendly interface, handles form validation, and provides feedback to the user upon successful submission.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
const [isFormSubmitted, setIsFormSubmitted] = useState(false);
```

### Continued development

I'm going to continue on my journey to be a JavaScript genius

## Author

- Frontend Mentor - [@kvngfax](https://www.frontendmentor.io/profile/kvngfax)
- Twitter - [@kvngfax](https://www.twitter.com/kvngfax)

