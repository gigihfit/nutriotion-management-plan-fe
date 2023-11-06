import { Button, Image } from "antd-mobile";
import layout from "../components/hocs/layout";

import gym from "../assets/gym.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };

    const content = {
        image: gym,
        subheading: "Welcome to GIGIH FIT!",
        text: "Let's take that first step to achieving your dream body!",
    };

    return (
        <>
            <div className="h-3/4 flex flex-col justify-center">
                <Image
                    src={content.image}
                    width={300}
                    height={300}
                    className="w-full mx-auto mb-4"
                />
                <p className="text-center text-4xl my-2">
                    {content.subheading}
                </p>
                <p className="text-center text-lg mt-2">{content.text}</p>
            </div>
            <div className="h-1/4 justify-end flex flex-col">
                <Button
                    block
                    className="mb-2 rounded-xl border-blue-500 bg-white"
                    size="large"
                    onClick={handleRegister}
                >
                    Register
                </Button>
                <Button
                    block
                    className="rounded-xl bg-blue-500 text-white"
                    size="large"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
        </>
    );
};

export default layout(HomePage);
