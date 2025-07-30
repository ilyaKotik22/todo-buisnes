import React from "react";
import {MyCheckbox} from "../../../shared/ui/myCheckbox/MyCheckbox.tsx";

interface Props{
    ClassName?: string
    nameSection: string
    items: string[]
    onChange: ()=> void
    ChangeItems: string[]
}

export const FilterSection: React.FC<Props> = ({ ClassName,items,ChangeItems,nameSection }) => {
    return (
        <div className={ ClassName}>
            <div className={'Filter-Header'}>{nameSection}</div>
            {}
            {items.map((el)=>{
                if (ChangeItems.includes(el)){
                    return(
                        <MyCheckbox text={el} changed={true} onChange={()=>console.log('w')} />
                    )
                }
                else {
                    return(
                        <MyCheckbox text={el} onChange={()=>console.log('w')} />
                    )
                }

            })}
        </div>);
};