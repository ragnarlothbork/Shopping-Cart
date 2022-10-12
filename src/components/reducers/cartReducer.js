import Item1 from "../../images/img1.jpg";
import Item2 from "../../images/img2.jpg";
import Item3 from "../../images/img3.jpg";
import Item4 from "../../images/img4.jpg";
import Item5 from "../../images/img5.jpg";
import Item6 from "../../images/img6.jpg";
import Item7 from "../../images/img7.jpg";
import Item8 from "../../images/img8.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Anna Karenina",
      desc:
        "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endure the hypocrisies of society",
      price: 110,
      author: "Leo Tolstoy",
      img: Item1,
    },
    {
      id: 2,
      title: "Madame Bovary",
      desc:
        "For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for offenses against morality and religion",
      price: 80,
      img: Item2,
      author: "Gustave Flaubert",
    },
    {
      id: 3,
      title: "War and Peace",
      desc:
        "Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon's invasion of Russia, and the impact of the Napoleonic era on Tsarist society, as seen through the eyes of five Russian aristocratic families.",
      price: 120,
      img: Item3,
      author: "Leo Tolstoy",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      desc:
        "The novel chronicles an era that Fitzgerald himself dubbed the 'Jazz Age'.Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the 'roaring' 1920s as the economy soared",
      price: 260,
      img: Item4,
      author: "F. Scott Fitzgerald",
    },
    {
      id: 5,
      title: "Lolita",
      desc:
        "The book is internationally famous for its innovative style and infamous for its controversial subject: the protagonist and unreliable narrator, middle aged Humbert Humbert, becomes obsessed",
      price: 160,
      img: Item5,
      author: "Vladimir Nabokov",
    },
    {
      id: 6,
      title: "Middlemarch",
      desc:
        "A Study of Provincial Life is a novel by George Eliot, the pen name of Mary Anne Evans, later Marian Evans. It is her seventh novel, begun in 1869",
      price: 90,
      img: Item6,
      author: "George Eliot",
    },
    {
      id: 7,
      title: "The Adventures of Huckleberry Finn",
      desc:
        "Revered by all of the town's children and dreaded by all of its mothers, Huckleberry Finn is indisputably the most appealing child-hero in American literature",
      price: 160,
      img: Item7,
      author: "Mark Twain",
    },
    {
      id: 8,
      title: "The Stories of Anton Chekhov",
      desc:
        "Anton Pavlovich Chekhov was a Russian short-story writer, playwright and physician, considered to be one of the greatest short-story writers in the history of world literature",
      price: 90,
      img: Item8,
      author: "Anton Chekhov",
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
