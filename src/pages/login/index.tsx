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

const LoginPage = () => {
    const navigate = useNavigate();

    const [visible, setVisible] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorUsername, setErrorUsername] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        if (username.length > 0 && password.length > 0) {
            navigate("/home");
        }

        if (username.length === 0) {
            setErrorUsername(true);
        }

        if (password.length === 0) {
            setErrorPassword(true);
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

    return (
        <div className="relative h-full">
            <div className="flex items-center justify-center relative">
                <div className="absolute left-0">
                    <BackButton redirectTo={"/"} />
                </div>
                <p className="text-2xl">Let's get you signed in.</p>
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

            <div className="w-full absolute mt-2 text-right">
                <a>Forgot Password.</a>
            </div>

            <div className="absolute bottom-0 w-full">
                <div className="flex justify-center mb-2">
                    <p className="text-gray-500">
                        Don't Have an Account Yet?&nbsp;
                    </p>
                    <a onClick={() => navigate("/register")}>Register.</a>
                </div>
                <Button
                    block
                    type="submit"
                    size="large"
                    className="bg-blue-500 rounded-xl text-white"
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default layout(LoginPage);
