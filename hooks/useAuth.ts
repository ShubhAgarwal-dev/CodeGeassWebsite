import axios from 'axios'
import AuthState, { State } from '@/types/AuthContext/AuthContext.type'
import data from '@/app/events/data'

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
      // console.log(res)
      if (res.status === 400) {
        setAuthState({
          data: null,
          loading: false,
          error: 'Something is wrong with userHandle or rollNumber',
        })
      }
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.res.data.errorMessage,
        loading: false,
      })
      console.log(error)
    }
  }

  return { registerIn }
}

export default useAuth
