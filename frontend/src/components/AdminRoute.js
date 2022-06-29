import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Store } from '../Store';

function ProtectedRoute({children}) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="signin" />
}
export default ProtectedRoute