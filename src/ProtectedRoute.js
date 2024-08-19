// C:\Users\kanka\Downloads\jobby-App-master\jobby-App-master\src\ProtectedRoute.js

// import Cookie from 'js-cookie'
// import {Redirect, Route} from 'react-router-dom'

// const ProtectedRoute = props => {
//   const jwtToken = Cookie.get('JobbY_token')

//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }

// export default ProtectedRoute




import Cookie from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookie.get('JobbY_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
