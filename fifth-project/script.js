let bookCart = [];

const ADD_TO_CART_ACTION = "addToCart";
const REMOVE_FORM_CART_ACTION = "removeFormCart";
const VIEW_CART_ACTION = "viewCart";

function viewCart() {
  console.log("Current Cart of Books: ", bookCart);
}

function performCartActions(action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION: {
      bookCart.push(newBook);
      break;
    }
    case REMOVE_FORM_CART_ACTION: {
      if (bookCart.length === 0) {
        console.log("Cart is emply. No books to remove.");
      } else {
        const removeBook = bookCart.pop();
        console.log(`Removed book from the cart: ${removeBook}`);
      }
      break;
    }
    case VIEW_CART_ACTION: {
      viewCart();
      break;
    }
    default:
      console.log("Invalid action. Please choose a vaid option");
      break;
  }
}

performCartActions(ADD_TO_CART_ACTION, "Think like a monk");
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART_ACTION, "Ego is the enemy");
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FORM_CART_ACTION);
performCartActions(VIEW_CART_ACTION);
