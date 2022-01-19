import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../../context/AuthContext/AuthContext.jsx";

export default function PrivateRoute({children, ...rest}) {
  const {user} = useAuth();
  return (
    <Route
    {...rest}
    render={({location}) => 
      user.email ? (
        children
      ) : (
        <Redirect 
          to={{
            pathname: '/auth',
            state: {from: location}
          }}
        />
      )
    }
    />
  )
}
