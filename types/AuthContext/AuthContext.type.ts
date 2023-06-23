import { reg_inputs } from '../Registration/RegBlock.types'

export interface State {
  loading: boolean
  error?: string
  data?: reg_inputs
}

export interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>
}
