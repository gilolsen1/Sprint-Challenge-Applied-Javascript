class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement; //this is going to be each .tab element passed in to constructor from each iteration of forEach()

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab; //referencing line 4 assignment. using .tab to get the custom attr value.
    //console.log(this.tabData); //took off this on right side, no difference in console - logs each attr each way

    // We need to find out if a user clicked 'all' cards or a specific category.
    //Follow the instructions below to accomplish this task:

    // <- Delete this comment block when you work on the if statement (was /*)

    // Check to see if this.tabData is equal to 'all'
    if (this.tabData === "all") {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".card");
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabData}'`
      );
      // FIRST ATTEMPT LINE 19/21 NO REFERENCE ......    just ${this.tabData}
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

    //console.log(this.cards); //1:22PM... line 36 returns nodelist with all cards (see line 15-17)
    //2:22 PM this logs 6 times, God knows why.
    //2:23 PM there are 6 items in the node list for tabs (all, js, tech, node, jquerry, bootstrap)
    //Tabs get selected, (different styling) but, cards don't get sorted., and won't UNselect)

    this.cards = Array.from(this.cards).map(
      eachElement33 => new TabCard(eachElement33) //less confident about eachElement33 in teachTabCard line 34
    );

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => this.selectTab()); //added function from memory with weak undertanding
  }

  selectTab() {
    // Select all elements with the .tab class on them

    let tabs = document.querySelectorAll(".tab");

    //console.log(tabs);   (not getting anything!!!! 3:01)
    // Iterate through the NodeList removing the .active-tab class from each element   == Clean slate this makes ALL tabs inactive
    //ARROW function attempt
    tabs.forEach(tabElement => tabElement.classList.remove("active-tab")); //HAD TOGGLE ON FIRST ATTEMPT  //console.log(tabElement)); //
    //this is not working, but adding ative tab is... something wrong with foreach /cb??

    // HAD extra . on active tab GOD DAMNIT  RANDY'S GONNA SLAP ME

    //regular foreach attempt at itterating node list and removing active tab
    // tabs.forEach(function(tabElement) {
    //   tabElement.classList.remove(".active-tab");
    // });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");
    //console.log(cards);

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(tabElement => (tabElement.style.display = "none")); //create style inline  OR do hidden card / display none
    //WORKS to display none ALL cards when any tab is selected.
    //Clean slate, removes ALL cards  //prettier changes (compare to 53)!!!

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab"); //WORKING --------FYI   REFERENCED, MINIMAL UNDERSTANDING!!!!

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
    this.cardElement.style.display = "inline-block";
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

let tabs = document.querySelectorAll(".tab");

tabs.forEach(eachTab => new TabLink(eachTab));

//console.log(tabs);
