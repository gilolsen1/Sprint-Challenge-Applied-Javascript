class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement; //this is going to be each .tab element passed in to constructor from each iteration of forEach()

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; //referencing line 4 assignment. using .tab to get the custom attr value.

    // We need to find out if a user clicked 'all' cards or a specific category.
    //Follow the instructions below to accomplish this task:

    // <- Delete this comment block when you work on the if statement (was /*)

    // Check to see if this.tabData is equal to 'all'
    if ((this.tabData = "all")) {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".card");
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabData}'`
      );
      // FIRST ATTEMPT LINE 19 NO REFERENCE ......    just ${this.tabData}
      //- need to give 'class path' to look for that data attr
      // ------a.)string literal entire thing (?expression??)...
      //-------b.)use [] syntax to select custom data attrs
      //-------c.)use ${} to utilize .js, but needs to be a string,
      //-------------so nested string notation: add '' around the ${} ie. '${this.js-attr}'
    }
    // <- Delete this comment block when you work on the if statement (was/*)

    // Map over the newly converted NodeList we just created in our if statement above.
    //Convert each this.cards element into a new instance of the TabCard class.
    //Pass in a card object to the TabCard class.

    console.log(this.cards); //1:22PM... line 36 returns nodelist with all cards (see line 15-17)

    this.cards = Array.from(this.cards).map(
      eachElement33 => new TabCard(eachElement33) //less confident about eachElement33 in teachTabCard line 34
    );

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => this.selectTab()); //added function from memory with weak undertanding
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    // Iterate through the NodeList removing the .active-tab class from each element   == Clean slate this makes ALL tabs inactive
    tabs.forEach(element49 => element49.classList.remove(".active-tab")); //HAD TOGGLE ON FIRST ATTEMPT
    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(element52 => (element52.classList.display = "none")); //Clean slate, removes ALL cards
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab"); //REFERENCED, MINIMAL UNDERSTANDING!!!!
    //adding active tab to the tab that was clicked when this function was invoked from click trigger line 43.

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class.
    //Just un-comment the code and study what is happening here.
    //PREDICTION:  this pull in the cards that match up.
    //QUESTION:  WHAT IS THIS.Cards?  line 53 in THIS instance? (which would be all cards), looped, pass in each card, then invoke selectCard
    //prediction 2: selectCard(is going to only select if custom data matches selected tab)
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.classList.display = "flex";
  }
}

/* START HERE: 

- DONESelect all classes named ".tab" and assign that value to the tabs variable   DONE

- DONEWith your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList DONE

- In your .forEach() method's callback function, 
return a new instance of TabLink   (this is done automatically with arrow function);
and pass in each tab (I'm using "eachTab" as the placeholder) as a parameter

// ORIGINAL ATTEMPT:  //    .forEach( (eachTab) new TabLink => ());
*/

let tabs = document
  .querySelectorAll(".tab")
  .forEach(eachTab => new TabLink(eachTab));
