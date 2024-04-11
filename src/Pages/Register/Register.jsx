import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import SubBanner from "../../ReUseableComponent/SubBanner/SubBanner";

const Register = () => {
    return (
        <div>
            <SubBanner title={"Register"}/>
            <RegisterForm/>
        </div>
    );
};

export default Register;