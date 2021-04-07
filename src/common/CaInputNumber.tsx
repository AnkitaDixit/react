import React from "react";

interface CaInputTextProps{
    label: string;
    id: string;
    onChange: () => {};
    value: string;

}
export const dummyOnChange = () => {

}
export const CaInputNumber: React.FC<CaInputTextProps> = ({label, value, id, onChange}) => {
    return (
        <>

        </>

    );
}
