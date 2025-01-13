import { Button } from "antd"
import { FieldValues, useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hooks"
import { setUser, TUser } from "../redux/features/auth/authSlice"
import { varifyToken } from "../utils/varifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Login = () => {
  const dispatch = useAppDispatch()
  const {register, handleSubmit} = useForm({
    defaultValues:{
      id:"2024010001",
      password:"123456"
    }
  })
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...")
    try {
      const userInfo = {
        id:data.id,
        password:data.password
      }
      const res = await login(userInfo).unwrap()
      const user = varifyToken(res.data.accessToken) as TUser
      dispatch(setUser({user, token:res.data.accessToken}))
      navigate(`/${user.role}/dashboard`)
      toast.success("Logged in", {id:toastId, duration:1000})
    } catch (error) {
      toast.error("Something went wrong", {id:toastId, duration:2000})
      console.log(error)
    }
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