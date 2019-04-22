# Sprint2-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM??
   
The DOM is short for "document object model"... Which is a representation of the HTML document as an OBJECT.  The DOM only exists in the browser so that our javascript can make changes to it based on how the user interacts with the site in the browser. The HTML and CSS are NOT affected by changes to the DOM. 

2. What is an event?

An event is any user interaction that occurs on a page loaded and live in a browswer.  Examples include mouse actions (click, right click, mouse over, on, off etc) Scrolling, keyboard items, (keydown, up etc), process stages such as loading or playing videos/animations etc. 

3. What is an event listener?
   
  An event listener is a javascript method that can be applied to an object. It takes in two parameters- first, the event that you want to "listen" for, such as a "click".  The event is set with a string.   The second argument is the function to be invoked when the event is triggered. 

4. Why would we convert a NodeList into an Array?

We'd pass a nodelist into Array.from() to unlock more functionality. Arrays have more built-in methods for javascript.  DOM objects/elements are designed to be language-agnostic, so they have limited functionality. A nodelist is an "array-like object", but it is not ACTUALLY a javascript array.  We  CAN use .forEach() on a nodelist, but we can NOT use other array methods like .reduce(), .map(), .length etc.

5. What is a component?

A component is a combination of html, css and javascript that creates chunks of code that can be re-used with the same functionality.  In my own words, we build the experience with a combination of the three tools from the experience in the DOM backwards.  The Javscript does the heavy lifting, dictating what happens in the DOM- the HTML and CSS are the foundation and materials that get manipulated based on user interaction.  The extra bonus is that if you copy/paste a chunk of the HTML with the elements that are styled/javascripted, you get to leverage all that magic built in as much as you want- Ie. you can make a million articles that have the same functionality.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

* [ ] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

* [ ] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
