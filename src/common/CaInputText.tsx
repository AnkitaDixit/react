import React from "react";

interface CaInputTextProps{
    label: string;
    id: string;
    onChange: () => {};
    value: string;

}
export const dummyOnChange = () => {

}
export const CaInputText: React.FC<CaInputTextProps> = ({label, value, id, onChange}) => {
    return (
        <>
            <label className="custom-control-label" htmlFor="defaultInline1">{label}</label>
            <input type="text" className="custom-control-input"
                   id="defaultInline1" onChange={onChange}/>
        </>

    );
}
