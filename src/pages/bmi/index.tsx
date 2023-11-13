import { AiOutlineCalendar, AiOutlineColumnHeight } from "react-icons/ai";
import { RxColumnSpacing } from "react-icons/rx";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import layout from "../../components/hocs/layout";
import { Button, Divider, Input, Radio } from "antd-mobile";
import BackButton from "../../components/BackButton";
import { useState } from "react";

const BMIPage = () => {
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>("");
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);

    const [errorAge, setErrorAge] = useState<boolean>(false);
    const [errorGender, setErrorGender] = useState<boolean>(false);
    const [errorHeight, setErrorHeight] = useState<boolean>(false);
    const [errorWeight, setErrorWeight] = useState<boolean>(false);

    const handleAge = (val: number) => {
        setAge(val);
        setErrorAge(false);
    };

    const handleGender = (val: string) => {
        setGender(val);
        setErrorGender(false);
    };

    const handleHeight = (val: number) => {
        setHeight(val);
        setErrorHeight(false);
    };

    const handleWeight = (val: number) => {
        setWeight(val);
        setErrorWeight(false);
    };

    const handleSubmit = () => {
        console.log("Age:", age);
        console.log("Gender:", gender);
        console.log("Height:", height);
        console.log("Weight:", weight);

        if (age > 0 && gender.length > 0 && height > 0 && weight > 0) {
            console.log("BMI:", calculateBMI(height, weight));
        }

        if (age === 0) {
            setErrorAge(true);
        }

        if (gender.length === 0) {
            setErrorGender(true);
        }

        if (height === 0) {
            setErrorHeight(true);
        }

        if (weight === 0) {
            setErrorWeight(true);
        }
    };

    const calculateBMI = (height: number, weight: number) => {
        return weight / (height / 100) ** 2;
    };

    return (
        <div className="h-full relative">
            <div className="flex items-center justify-center relative">
                <div className="absolute left-0">
                    <BackButton redirectTo={"/"} />
                </div>
                <p className="text-2xl">Please Enter Your Info.</p>
            </div>
            <Divider className="bg-blue-500" />

            <p className="text-lg">Age.</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white">
                <AiOutlineCalendar size={24} />
                <Input
                    placeholder="Please Input Your Age"
                    className="px-2"
                    type="number"
                    onChange={(val) => handleAge(parseInt(val))}
                />
            </div>
            <p className="text-red-500 absolute mt-2" hidden={!errorAge}>
                Age cannot be empty!
            </p>

            <p className="text-lg mt-8">Gender.</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white justify-around">
                <Radio.Group onChange={(val) => handleGender(val.toString())}>
                    <Radio value="Male">
                        <div className="flex items-center">
                            Male&nbsp; <BsGenderMale />
                        </div>
                    </Radio>
                    <Radio value="Female">
                        <div className="flex items-center">
                            Female&nbsp; <BsGenderFemale />
                        </div>
                    </Radio>
                </Radio.Group>
            </div>
            <p className="text-red-500 absolute mt-2" hidden={!errorGender}>
                Please pick a gender!
            </p>

            <p className="text-lg mt-8">Height. (cm)</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white">
                <AiOutlineColumnHeight size={24} />
                <Input
                    placeholder="Please Input Your Height"
                    className="px-2"
                    type="number"
                    onChange={(val) => handleHeight(parseInt(val))}
                />
            </div>
            <p className="text-red-500 absolute mt-2" hidden={!errorHeight}>
                Height cannot be empty!
            </p>

            <p className="text-lg mt-8">Weight. (kg)</p>
            <div className="flex border-blue-500 rounded-xl h-12 border-2 items-center px-2 relative bg-white">
                <RxColumnSpacing size={24} />
                <Input
                    placeholder="Please Input Your Weight"
                    className="px-2"
                    type="number"
                    onChange={(val) => handleWeight(parseInt(val))}
                />
            </div>
            <p className="text-red-500 absolute mt-2" hidden={!errorWeight}>
                Weight cannot be empty!
            </p>

            <Button
                block
                type="submit"
                size="large"
                className="bg-blue-500 text-white rounded-xl absolute bottom-0"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
};

export default layout(BMIPage);
