// This context was added to implement the sign-in functionality
//but it now seems unnecessary to do the same at this point of time,
//we might add this later to authemticate the Admins

import axios from 'axios'
import { getCookie } from 'cookies-next'
import React, { useState, createContext } from 'react'

import AuthState, { State } from '@/types/AuthContext/AuthContext.type'

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
})

export default function AuthContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  })

  const fetchUser = async () => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    })
  }

  try {
    const jwt = getCookie('jwt')

    if (!jwt) {
      return setAuthState({
        loading: false,
        error: null,
        data: null,
      })
    }
  } catch (error: any) {
    setAuthState({
      loading: false,
      data: null,
      error: error.response.data.errorMessage,
    })
  }
}
