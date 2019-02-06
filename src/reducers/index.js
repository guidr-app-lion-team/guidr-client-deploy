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
} from '../actions'


const initialState = {
    isFetchingFeed: false,
    isFetchingUsers: false,
    isLoggingIn: false,
    isLoggedIn: false,
    adventures: [],
    error: null,
    users:[],
    username: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
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
    isFetchingFeed: false,
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
  default:
    return state
  }
}
