import axios from 'axios';
import { red } from 'ansi-colors';

export const FETCH_NEWSFEED_START = "FETCH_NEWSFEED_START";
export const FETCH_NEWSFEED_SUCCESS = "FETCH_NEWSFEED_SUCCESS";
export const FETCH_NEWSFEED_FAIL = "FETCH_NEWSFEED_FAIL"; 

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL"; 

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL"; 

export const FETCH_USER_ADVENTURE_START = "FETCH_USER_ADVENTURE_START";
export const FETCH_USER_ADVENTURE_SUCCESS = "FETCH_USER_ADVENTURE_SUCCESS";
export const FETCH_USER_ADVENTURE_FAIL = "FETCH_USER_ADVENTURE_FAIL"; 

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL"; 

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"; 

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL"; 

export const UPDATE_ADVENTURE_START = "UPDATE_ADVENTURE_START";
export const UPDATE_ADVENTURE_SUCCESS = "UPDATE_ADVENTURE_SUCCESS";
export const UPDATE_ADVENTURE_FAIL = "UPDATE_ADVENTURE_FAIL"; 





export const SET_USER ="SET_USER"
export const LOGGING_OUT="LOGGING_OUT"

//User Login
export const userLogin = user => dispatch =>{
  dispatch({type: USER_LOGIN_START});
  axios
  .post(`https://guidr2.herokuapp.com/login`, user)
  .then(res => {
    if (res.status === 200 && res.data) {
      console.log(res)
      // dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.username});
      // localStorage.setItem('jwt', res.data.token)
    } else {
      throw new Error();
    }
  })
  .catch(err => console.log(err))
  
}
//Get alll adventures for newsfeed 
export const getNewsFeed = () => dispatch =>{
  dispatch({type: FETCH_NEWSFEED_START});
  axios
  .get(`https://guidr2.herokuapp.com/adventures`)
  .then(res =>  dispatch({type: FETCH_NEWSFEED_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: FETCH_NEWSFEED_FAIL, payload: err}))
}
//Authorizatrion News Feed
// export const getNewsFeed = () => dispatch =>{
//     const token = localStorage.getItem('jwt')
//     console.log(token)
//     const headers = { headers: { Authorization: token } }
//     console.log(headers)
//     // dispatch({type: FETCH_NEWSFEED_START});
//     if(token){
//       console.log('we are fetching our ventures')
//       axios.get(`https://guidr2.herokuapp.com/adventures`, headers)
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//     }
//   }
// Get All Users
  export const getUsers = () => dispatch =>{
    dispatch({type: FETCH_USERS_START});
    axios
    .get(`https://guidr2.herokuapp.com/user`)
    .then(res => dispatch({type: FETCH_USERS_SUCCESS, payload: res.data}))
    .then(localStorage.removeItem('users'))
    .then(res =>localStorage.setItem('users', JSON.stringify(res.payload)))
    .catch(err => dispatch({type: FETCH_USERS_FAIL, payload: err}))
  }
  // Fetch single User
  export const getSingleUser = id => dispatch =>{
    dispatch({type: FETCH_USER_START});
    axios
    .get(`https://guidr2.herokuapp.com/user/${id}`)
    .then(res => dispatch({type: FETCH_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_USER_FAIL, payload: err}))
  }

  // Fetch Single User Adventures
  export const getUserAdventure = id => dispatch =>{
    dispatch({type: FETCH_USER_ADVENTURE_START});
    axios
    .get(`https://guidr2.herokuapp.com/user/${id}/adventures`)
    .then(res => dispatch({type: FETCH_USER_ADVENTURE_SUCCESS, payload: res.data}))
    .then(res => localStorage.setItem('userAdventures', JSON.stringify(res.payload)))
    .catch(err => dispatch({type: FETCH_USER_ADVENTURE_FAIL, payload: err}))
  }

  //Set User on State
  export const setUser = user => dispatch =>{
    dispatch ({type: SET_USER, payload: user})
  }
  //"Logout" - clear state of logged in user
  export const logOut = () => dispatch =>{
    dispatch({type: LOGGING_OUT});
  }

  //Register User
  export const addUser = user => dispatch =>{
    console.log(user)
    dispatch({type: ADD_USER_START});
    axios
    .post(`https://guidr2.herokuapp.com/user`, user)
    // .then(res => console.log(res))
    .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data}))
    .then(dispatch(getUsers()))
    .catch(err => dispatch({type: ADD_USER_FAIL, payload: err}))
  }

  //  Update Single User
  export const updateUser = (id, ) => dispatch =>{
    dispatch({type: UPDATE_USER_START});
    axios
    .put(`https://guidr2.herokuapp.com/user/${id}`)
  }


// Update Single Adventure 
export const updateAdventure = (id, adventure) => dispatch =>{
  console.log(id)
  console.log(adventure)
  dispatch({type: UPDATE_ADVENTURE_START});
  axios
  .put(`https://guidr2.herokuapp.com/adventures/${id}`, adventure)
  .then(res => dispatch({type: UPDATE_ADVENTURE_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: UPDATE_ADVENTURE_FAIL, payload: err}))
}





  // addUser = (user) => {
  //   const token = localStorage.getItem('token')
  //   const headers = { headers: { 'Authorization': `Token ${token}` } }
  //   axios.post('http://127.0.0.1:8000/api/countries/', newCountry, headers)
  //     .then(resp => this.getData())
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }


  // export const getSingleUser = user => dispatch =>{
  //   dispatch({type: FETCH_SINGLE_USER_START});
  //   axios.
  // }