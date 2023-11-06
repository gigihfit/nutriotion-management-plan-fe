import { useState } from "react";
import { Button, Divider, Input } from "antd-mobile";
import layout from "../components/hocs/layout";
import BackButton from "../components/BackButton";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
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
                    <BackButton />
                </div>
                <p className="text-2xl">Let's get you signed in.</p>
            </div>
            <Divider className="bg-blue-500" />

            <p className="text-lg">Username.</p>
            <Input
                placeholder="Please Input Your Username"
                className="border-blue-500 rounded-xl h-12 border-2 pl-2"
                onChange={(val) => handleUsername(val)}
            />
            <p className="text-red-500" hidden={!errorUsername}>
                Username cannot be empty!
            </p>

            <p className="text-lg mt-4">Password.</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2">
                <Input
                    placeholder="Please Input Your Password"
                    type={visible ? "text" : "password"}
                    onChange={(val) => handlePassword(val)}
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
            <p className="text-red-500" hidden={!errorPassword}>
                Password cannot be empty!
            </p>

            <Button
                block
                type="submit"
                size="large"
                className="bg-blue-500 rounded-xl text-white absolute bottom-0"
                onClick={handleLogin}
            >
                Sign In
            </Button>
        </div>
    );
};

export default layout(LoginPage);
