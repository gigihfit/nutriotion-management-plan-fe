import { ComponentType } from "react";

const layout = (Component: ComponentType) => {
    return function layout() {
        return (
            <div className="p-4 h-screen">
                <Component />
            </div>
        );
    };
};

export default layout;
