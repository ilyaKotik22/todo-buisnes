import React, {useEffect} from "react";
import {MyCheckbox} from "../../../shared/ui/myCheckbox/MyCheckbox.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addInFilter, createFilterSection, removeInFilter} from "../store/FilterSlice.ts";
import type {RootStore} from "../../../shared/store";

interface Props{
    ClassName?: string
    nameSection: string
    items: string[]
    onChange: ()=> void
    ChangeItems: string[]
}

export const FilterSection: React.FC<Props> = ({ ClassName,items,ChangeItems,nameSection }) => {
    const dispatch = useDispatch()
    const FilterSelectorItems = useSelector((state:RootStore)=> state.FilterSlice.filters[nameSection]?.items)
    const FilterSelectorChangedItems = useSelector((state:RootStore)=> state.FilterSlice.filters[nameSection]?.ChangedItems)

    useEffect(() => {
        dispatch(createFilterSection({name:nameSection, items: items, ChangedItems:ChangeItems}))
    }, []);
    return (
        <div className={ ClassName}>
            <div className={'Filter-Header'}>{nameSection}</div>
            {}
            {FilterSelectorItems && FilterSelectorItems.map((el)=>{
                if (FilterSelectorChangedItems.includes(el)){
                    return(
                        <MyCheckbox key={el} text={el} changed={true} onChange={()=>dispatch(removeInFilter({nameFilter: nameSection, value: el}))} />
                    )
                }
                else {
                    return(
                        <MyCheckbox key={el} text={el} changed={false} onChange={()=>dispatch(addInFilter({nameFilter: nameSection, value: el}))}/>
                    )
                }

            })}
        </div>);
};