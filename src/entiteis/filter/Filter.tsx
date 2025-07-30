import React from "react";
import {FilterSection} from "./filterSection/FilterSection.tsx";
import './Filter.css'
interface Props{
    ClassName?: string
}

export const Filter: React.FC<Props> = ( ) => {
    return (
        <div className={'Filter'}>
            <div className="FilterInput">
                <div className="Filter-hed">Поиск по названию задачи</div>
                <input placeholder={'название задачи...'}/>
            </div>
            <FilterSection
                ClassName={'FilterSection'}
                nameSection={'Тип Задачи:'}
                items={["Все типы", 'Личная', 'Срочная', 'Работа']}
                ChangeItems={["Все типы"]}
                onChange={() => console.log('ad')}
            />
            <FilterSection
                ClassName={'FilterSection'}
                nameSection={'Приоритет задачи:'}
                items={["Все приоритеты", 'Высокий', 'Средний', 'Низкий']}
                ChangeItems={["Все приоритеты"]}
                onChange={() => console.log('ad')}
            />
            <FilterSection
                ClassName={'FilterSection'}
                nameSection={'Статус задачи:'}
                items={["Все статусы", 'Активна', 'Закончина', 'Пропущена']}
                ChangeItems={["Все статусы"]}
                onChange={() => console.log('ad')}
            />
            <div className="FilterInput">
                <div className="Filter-hed">Дедлайн задачи</div>
                <div className="FilterInput-time">
                    <input/>
                    дней
                </div>

            </div>
        </div>);
};