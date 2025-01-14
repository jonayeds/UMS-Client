import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { varifyToken } from "../utils/varifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UMSForm from "../components/form/UMSForm";
import UMSInput from "../components/form/UMSInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
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
  };
  return (
    <Row align={"middle"} justify={"center"} style={{ height: "100vh" }}>
      <UMSForm onSubmit={onSubmit}>
        <UMSInput type="text" name="id" label="ID" />
        <UMSInput type="password" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </UMSForm>
    </Row>
  );
};

export default Login;
