//this is for the reducer
import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'

const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Minima, ex.", price: 110, img:Item1},
        {id:2,title:'Adidas', desc: "Lex.", price: 80, img: Item2},
        {id:3,title:'Vans', desc: "Lorem",price: 120, img: Item3},
        {id:4,title:'White', desc: "dolor", price: 260, img: Item4},
        {id:5,title:'Cropped-sho', desc: "ipsum Min", price: 160, img: Item5},
        {id:6,title:'Blues', desc: "rex.", price: 90, img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item = state.addedItems.find(item => action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else {
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }  
      }
  }
  else {
      return state;
  }
}

   
export default cartReducer;
