import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

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

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
