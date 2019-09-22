import moment from 'moment';

const initialState = {
    // items : [
    //   {value : 'item 1'},
    //   {value : 'item 2'},
    //   {value : 'item 3'},
    // ],
    year : moment().year()
  }
  
  function listReducer (state = initialState , action){
    switch (action.type) {
  
      case 'ADD_ITEM' : return  Object.assign( {}, state, {
          items : state.items.concat( {value : action.value} )
      })
  
      default : return state;
      
    }
  }
  
  
  export default listReducer