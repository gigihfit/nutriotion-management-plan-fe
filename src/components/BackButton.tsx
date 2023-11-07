import { Button } from "antd-mobile";
import { To, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
    redirectTo?: To
}

const BackButton = (props : Props) => {
    const navigate = useNavigate();

    const handleBack = () => {
        props.redirectTo ? navigate(props.redirectTo) : navigate(-1);
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
