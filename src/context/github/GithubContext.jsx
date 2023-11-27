import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user:{},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  console.log(dispatch);

  const GithubURL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
  const GithubToken = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GithubURL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GithubToken}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (login)=>{
    setLoading();
    const response = await fetch(`${GithubURL}/users/${login}`,{
      headers: {
        Authorization: `token ${GithubToken}`,
      },
    })

    if(response.status === 404){
      window.location = '/notfound';
    }else{
      const data = await response.json();
      console.log(data)
      dispatch({
        type:"GET_USER_DETAILS",
        payload: data,
      })
    }
  }

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users:state.users,
        loading:state.loading,
        user:state.user,
        searchUsers,
        dispatch,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
