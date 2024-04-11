import LoginForm from "../../Components/LoginForm/LoginForm";
import SubBanner from "../../ReUseableComponent/SubBanner/SubBanner";

const Login = () => {
    return (
        <div>
            <SubBanner title={"Log In"}/>
            <LoginForm/>
        </div>
    );
};

export default Login;