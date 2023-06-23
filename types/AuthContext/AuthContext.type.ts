import { reg_inputs } from '../Registration/RegBlock.types'

export interface State {
  loading: boolean
  error: string | null
  data: reg_inputs | null
}

export default interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>
}
