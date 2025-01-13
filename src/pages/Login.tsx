import { Button } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hooks"
import { setUser } from "../redux/features/auth/authSlice"
import { varifyToken } from "../utils/varifyToken"

const Login = () => {
  const dispatch = useAppDispatch()
  const {register, handleSubmit} = useForm({
    defaultValues:{
      id:"2024010001",
      password:"123456"
    }
  })
  const [login] = useLoginMutation()

  const onSubmit = async (data: { id: string; password: string }) => {
    const userInfo = {
      id:data.id,
      password:data.password
    }
    const res = await login(userInfo).unwrap()
    const user = varifyToken(res.data.accessToken)
    dispatch(setUser({user, token:res.data.accessToken}))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" {...register("id")}/>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="text" id="Password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  )
}

export default Login