import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Button fill="none" onClick={handleBack}>
                <IoIosArrowBack />
            </Button>
        </>
    );
};

export default BackButton;
