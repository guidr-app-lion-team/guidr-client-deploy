import {
  FETCH_NEWSFEED_START,
  FETCH_NEWSFEED_SUCCESS,
  FETCH_NEWSFEED_FAIL,
  FETCH_USERS_FAIL,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  SET_USER,
  LOGGING_OUT,
  FETCH_USER_ADVENTURE_START,
  FETCH_USER_ADVENTURE_SUCCESS,
  FETCH_USER_ADVENTURE_FAIL,
  UPDATE_ADVENTURE_FAIL,
  UPDATE_ADVENTURE_START,
  UPDATE_ADVENTURE_SUCCESS,
  DELETING_ADVENTURE_START,
  DELETING_ADVENTURE_SUCCESS
} from '../actions'


const initialState = {
    isFetchingFeed: false,
    isFetchingUsers: false,
    isLoggingIn: false,
    isLoggedIn: false,
    isFetchingAdventures: false,
    adventures: [],
    error: null,
    users:JSON.parse(localStorage.getItem('users')),
    user: JSON.parse(localStorage.getItem('user')),
    userAdventures: JSON.parse(localStorage.getItem('userAdventures')),
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_USER:
  return{
    ...state,
    user: payload,
    isLoggedIn: true
  }
  case LOGGING_OUT:
  return{
    ...state,
    user: [],
    isLoggedIn: false
  }
  case FETCH_NEWSFEED_START:
  return{
    ...state,
    error: null,
    isFetchingFeed: true
  };
  case FETCH_NEWSFEED_SUCCESS:
  return{
    ...state,
    error: null,
    isFetchingFeed: false,
    adventures: payload
  };
  case FETCH_NEWSFEED_FAIL:
  return{
      ...state,
      isFetchingFeed: false,
      error: payload,
  };
  case FETCH_USERS_START:
  return{
    ...state,
    isFetchingUsers: true,
    error: null 
  };
  case FETCH_USERS_SUCCESS:
  return{
    ...state,
    error: null,
    isFetchingUsers: false,
    users: payload
  };
  case FETCH_USERS_FAIL:
  return{
    ...state,
    isFetchingFeed: false,
    error: payload,
  };
  case ADD_USER_START:
  return{
    ...state,
    isAddingUser: true,
    error: null
  };
  case ADD_USER_SUCCESS:
  return{
    ...state,
    users: payload,
    error:null,
    isAddingUser: false
  };
  case ADD_USER_FAIL:
  return{
    ...state,
    error: payload,
    isAddingUser: false
  };
  case USER_LOGIN_START:
  return{
    ...state,
    error: null,
    isLoggingIn: true,
    isLoggedIn: true,
  };
  case USER_LOGIN_SUCCESS:
  return{
    ...state,
    error: null,
    isLoggedIn: true,
    isLoggingIn: false,
    username: payload
  }
  case USER_LOGIN_FAIL:
  return{
    ...state,
    error: payload,
    isLoggedIn: false,
    isLoggingIn: false
  }
  case FETCH_USER_ADVENTURE_START:
  return{
    ...state,
    isFetchingAdventures: true,
    error: null 
  };
  case FETCH_USER_ADVENTURE_SUCCESS:
  return{
    ...state,
    error: null,
    isFetchingAdventures: false,
    userAdventures: payload
  };
  case FETCH_USER_ADVENTURE_FAIL:
  return{
    ...state,
    isFetchingAdventures: false,
    error: payload,
  };
  case UPDATE_ADVENTURE_START:
  return{
    ...state,
    error: null,
    isUpdating: true,
  };
  case UPDATE_ADVENTURE_SUCCESS:
  console.log('update payload',payload)
  const adventures = state.adventures.filter(adventure => adventure.id !== payload.id)
  console.log('update adventure',adventures)
  const userAdventures = state.userAdventures.filter(adventure => adventure.id !== payload.id)
  console.log('update userad',userAdventures)
  return{
    ...state,
    adventures: [
      ...adventures,
      payload
    ],
    userAdventures: [
      ...userAdventures,
      payload
    ]
  }
  case DELETING_ADVENTURE_START:
  return{
    ...state,
    error: null,
    isDeleting: true
  };
  case DELETING_ADVENTURE_SUCCESS:
  console.log(payload)
  const deleteAdventure = state.adventures.filter(adventure => adventure.id !== payload)
  const userdeleteAdventure = state.userAdventures.filter(adventure => adventure.id !== payload)
  return{
    ...state,
    adventures: [
      ...deleteAdventure,
      
    ],
    userAdventures: [
      ...userdeleteAdventure,
      
    ]
  };
  default:
    return state
  }
}


// FETCH_USER_FAIL,
// FETCH_USER_START,
// FETCH_USER_SUCCESS,
// case FETCH_USERS_START:
// return{
//   ...state,
//   isFetchingSingleUser: true,
//   error: null 
// };
// case FETCH_USERS_SUCCESS:
// return{
//   ...state,
//   error: null,
//   isFetchingSingleUser: false,
//   user: payload
// };
// case FETCH_USERS_FAIL:
// return{
//   ...state,
//   isFetchingSingleUser: false,
//   error: payload,
// };