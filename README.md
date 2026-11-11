# 🚚 Delivery Cost Calculator

A responsive Delivery Cost Calculator built with **HTML, CSS, and JavaScript**.

This application calculates delivery fees based on distance and order value, helping users see the total cost of their order.

## Features

- Calculate delivery costs based on distance.
- Automatically apply free delivery for orders of £50 or more.
- Display the order amount, delivery fee, and total cost.
- Validate user input and display error messages.
- Clear validation errors when users modify their inputs.
- Reset previous results when invalid data is submitted.
- Display monetary values with two decimal places.
- Responsive design for desktop and mobile devices.

## Delivery Rules

| Distance | Delivery Cost |
|---|---|
| Up to 5 km | £3 |
| More than 5 km, up to 15 km | £5 |
| More than 15 km | £8 |
| Orders of £50 or more | Free delivery |

**Additional input requirements:**
- Minimum order amount: £1.
- Minimum delivery distance: 0.1 km.

## Technologies Used

- **HTML5** – Structure and semantic markup
- **CSS3** – Styling and responsive layout
- **JavaScript (ES6)** – Calculations, validation, event handling, and DOM manipulation

## How It Works

1. Enter the order amount in pounds (£).
2. Enter the delivery distance in kilometres (km).
3. Click **Calculate**.
4. View the delivery fee and total amount.

If the order value is £50 or more, delivery is free regardless of distance.

## What I Practised

During this project, I worked with:

- DOM selection using `querySelector()`
- Event handling with `addEventListener()`
- `click` and `input` events
- Conditional statements (`if`, `else if`, `else`)
- Logical operators (`&&`)
- Form validation and error messages
- Dynamic content updates using `textContent`
- CSS class manipulation using `classList`
- Number conversion using `Number()`
- Decimal formatting using `toFixed(2)`
- Controlling execution with `return`

## Live Demo

[View Live Project](YOUR_GITHUB_PAGES_URL)

## Source Code

[GitHub Repository](YOUR_GITHUB_REPOSITORY_URL)

## Author

Created as part of my JavaScript learning journey.

GitHub: [aledjan1](https://github.com/aledjan1)