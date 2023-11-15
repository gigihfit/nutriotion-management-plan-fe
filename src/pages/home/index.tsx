import { Button, Divider, Swiper, TabBar } from "antd-mobile";
import layout from "../../components/hocs/layout";
import { IoHomeOutline, IoFastFoodOutline } from "react-icons/io5";
import { MdSportsVolleyball, MdAccountBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div className="h-full p-4" style={{ background: color }}>
                {index + 1}
            </div>
        </Swiper.Item>
    ));

    const tabs = [
        {
            key: "home",
            title: "Home",
            icon: <IoHomeOutline />,
        },
        {
            key: "exercise",
            title: "Exercise",
            icon: <MdSportsVolleyball />,
        },
        {
            key: "nutrition",
            title: "Nutrition",
            icon: <IoFastFoodOutline />,
        },
        {
            key: "account",
            title: "Account",
            icon: <MdAccountBox />,
        },
    ];

    const handleTab = (tab: string) => {
        navigate(`/${tab}`);
    };

    const handleRecalculate = () => {
        navigate("/bmi");
    };

    return (
        <>
            <div className="flex items-center justify-center relative">
                <p className="text-2xl">GIGIH Fit.</p>
            </div>
            <Divider className="border rounded-xl border-blue-500" />

            <p className="text-center text-4xl">Your BMI is...</p>
            <p className="text-center text-8xl mt-2">20,1</p>
            <div className="flex w-full text-center mt-2 justify-center">
                <p className="text-lg">You are&nbsp;</p>
                <p className="text-lg">Normal!</p>
            </div>

            <Button
                block
                size="large"
                className="rounded-xl bg-blue-500 text-white mt-4"
                onClick={handleRecalculate}
            >
                Recalculate!
            </Button>

            <p className="text-xl mt-16 text-center">
                Check out the exercises below to reach your fitness goal!
            </p>
            <Swiper autoplay loop className="mt-4 rounded-xl h-1/3">
                {items}
            </Swiper>

            <TabBar
                className="absolute bottom-0 w-full left-0 outline outline-blue-500"
                onChange={(val) => handleTab(val)}
            >
                {tabs.map((item) => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                        className="mt-2"
                    />
                ))}
            </TabBar>
        </>
    );
};

export default layout(HomePage);
