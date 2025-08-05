import {Bar, Line, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Title, BarElement, ArcElement
} from 'chart.js';
import './BodyForStatistic.css'
import {useDispatch, useSelector} from "react-redux";
import type {RootStore} from "../../shared/store";
import {useEffect, useState} from "react";
import {getTasks} from "../../features/Task/store/TasksSlice.ts";


type Items = {
    data:number[]
    labelss:string[]
}
type Counter = {
    [key:string]: number
}

const BodyForStatistic = () => {
    const itemSelector = useSelector((state:RootStore)=> state.TasksSlice.tasks)
    const dispatch = useDispatch()

    const [items, setItems] = useState<Items>({data: [], labelss: []})
    const [itemStatus,setItemStatus] = useState<Items>({data: [], labelss: []})
    const [itemsType, setItemType] = useState<Items>({data: [], labelss: []})
    function forStatistic(value:string[]){
        const labelss:string[] = []
        const data:number[] = []
        const counter:Counter = {}
        for (const ItemValue of value) {
            counter[ItemValue] = (counter[ItemValue] || 0) + 1
            if (!labelss.includes(ItemValue)){
                labelss.push(ItemValue)
            }
        }
        for (const counterKey in counter) {
            data.push(counter[counterKey])
        }

        return {data:data,labelss:labelss}
    }

    useEffect(() => {
        dispatch(getTasks())
    }, []);
    useEffect(() => {

        const data = forStatistic(itemSelector.map((el=>el.timePeriod.split('-')[1])))
        const dataStatus = forStatistic(itemSelector.map((el)=> el.status))
        const datatype = forStatistic(itemSelector.map((el)=> el.typeTask))
        setItems(data)
        setItemStatus(dataStatus)
        setItemType(datatype)
        console.log(items)

    }, [itemSelector]);
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,ArcElement);

    const data2 = {
        labels: itemStatus.labelss,
        datasets: [
            {
                label: 'Количество задач',
                data: itemStatus.data,
                backgroundColor: [
                    'rgb(39,51,128)',
                    'rgba(84, 106, 255, 1)',
                ],
                borderColor:[
                    'rgb(39,51,128)',
                    'rgba(84, 106, 255, 1)',
                ]

            },
        ],
    };
    const data = {
        labels: items.labelss,
        datasets: [
            {
                label: 'Активность пользователя',
                data: items.data,
                borderColor: 'rgba(84, 106, 255, 1)',
                tension: 0.1,

            },
        ],
    };
    const data3 = {
        labels: itemsType.labelss,
        datasets: [
            {
                label: 'Количество задач',
                data: itemsType.data,
                backgroundColor: 'rgba(84, 106, 255, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
    };
    return (
        <div className={'statistic'}>

            <div className="statistic-block">
                <div className="statistic-header">
                    Активность пользователя
                </div>
                <div className="">Показывает количество задач к определенному месяцу</div>
                <Line data={data} options={options}/>
            </div>
            <div className="statistic-block">
                <div className="statistic-header">
                    Типы задач
                </div>
                <div className="">Показывает количество задач по типу</div>

                <Bar data={data3}/>

            </div>
            <div style={{ width: '300px', height: '300px' }} className="statistic-block">
                <div className="statistic-header">
                    Количество задач
                </div>
                <div className="">Показывает количество задач по статусу</div>
                <Pie data={data2}/>

            </div>


        </div>
    );
};

export default BodyForStatistic;