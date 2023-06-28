import axios from 'axios'
import AuthState, { State } from '@/types/AuthContext/AuthContext.type'

const useAuth = () => {
  const registerIn = async (
    {
      fullName,
      rollNumber,
      userHandle,
      url,
    }: {
      fullName: string
      rollNumber: string | number
      userHandle: string
      url: string
    },
    setAuthState: React.Dispatch<React.SetStateAction<State>>,
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    })

    try {
      const res = await axios.post(url, {
        fullName,
        rollNumber,
        userHandle,
      })
      setAuthState({
        data: res.data,
        error: null,
        loading: false,
      })
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.res.data.errorMessage,
        loading: false,
      })
    }
  }

  return { registerIn }
}

export default useAuth
