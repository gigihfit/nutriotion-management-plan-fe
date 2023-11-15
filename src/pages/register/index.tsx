import { useState } from "react";
import { Button, Divider, Input } from "antd-mobile";
import layout from "../../components/hocs/layout";
import BackButton from "../../components/BackButton";
import {
    AiFillEyeInvisible,
    AiFillEye,
    AiOutlineUser,
    AiOutlineLock,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [visible, setVisible] = useState<boolean>(false);
    const [visible2, setVisible2] = useState<boolean>(false);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [errorUsername, setErrorUsername] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [errorConfirmPassword, setErrorConfirmPassword] =
        useState<boolean>(false);
    const [errorSamePassword, setErrorSamePassword] = useState<boolean>(false);

    const handleRegister = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

        if (
            username.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0
        ) {
            if (password != confirmPassword) {
                setErrorSamePassword(true);
            } else {
                navigate("/bmi");
            }
        }

        if (username.length === 0) {
            setErrorUsername(true);
        }

        if (password.length === 0) {
            setErrorPassword(true);
        }

        if (confirmPassword.length === 0) {
            setErrorConfirmPassword(true);
        }
    };

    const handleUsername = (val: string) => {
        setUsername(val);
        setErrorUsername(false);
    };

    const handlePassword = (val: string) => {
        setPassword(val);
        setErrorPassword(false);
    };

    const handleConfirmPassword = (val: string) => {
        setConfirmPassword(val);
        setErrorConfirmPassword(false);
        setErrorSamePassword(false);
    };

    return (
        <div className="relative h-full">
            <div className="flex items-center justify-center relative">
                <div className="absolute left-0">
                    <BackButton redirectTo={"/"} />
                </div>
                <p className="text-2xl">Let's get you registered.</p>
            </div>
            <Divider className="border rounded-xl border-blue-500" />

            <p className="text-lg">Username.</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white">
                <AiOutlineUser size={24} />
                <Input
                    placeholder="Please Input Your Username"
                    onChange={(val) => handleUsername(val)}
                    className="px-2"
                />
            </div>
            <p className="text-red-500 absolute mt-2" hidden={!errorUsername}>
                Username cannot be empty!
            </p>

            <p className="text-lg mt-8">Password.</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white">
                <AiOutlineLock size={24} />
                <Input
                    placeholder="Please Input Your Password"
                    type={visible ? "text" : "password"}
                    onChange={(val) => handlePassword(val)}
                    className="px-2"
                />
                {!visible ? (
                    <AiFillEyeInvisible
                        onClick={() => setVisible(true)}
                        size={24}
                    />
                ) : (
                    <AiFillEye onClick={() => setVisible(false)} size={24} />
                )}
            </div>
            <p className="text-red-500 absolute mt-2" hidden={!errorPassword}>
                Password cannot be empty!
            </p>

            <p className="text-lg mt-8">Confirm Password.</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white">
                <AiOutlineLock size={24} />
                <Input
                    placeholder="Please Input Your Password"
                    type={visible2 ? "text" : "password"}
                    onChange={(val) => handleConfirmPassword(val)}
                    className="px-2"
                />
                {!visible2 ? (
                    <AiFillEyeInvisible
                        onClick={() => setVisible2(true)}
                        size={24}
                    />
                ) : (
                    <AiFillEye onClick={() => setVisible2(false)} size={24} />
                )}
            </div>
            <p
                className="text-red-500 absolute mt-2"
                hidden={!errorConfirmPassword}
            >
                Password cannot be empty!
            </p>
            <p
                className="text-red-500 absolute mt-2"
                hidden={!errorSamePassword}
            >
                Passwords do not match!
            </p>

            <div className="absolute bottom-0 w-full">
                <div className="flex justify-center mb-2">
                    <p className="text-gray-500">
                        Alreaady Have an Account?&nbsp;
                    </p>
                    <a onClick={() => navigate("/login")}>Login.</a>
                </div>
                <Button
                    block
                    type="submit"
                    size="large"
                    className="bg-white rounded-xl border-blue-500 border-2"
                    onClick={handleRegister}
                >
                    Register
                </Button>
            </div>
        </div>
    );
};

export default layout(RegisterPage);
