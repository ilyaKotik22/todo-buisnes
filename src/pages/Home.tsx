import {Filter} from "../entiteis/filter/Filter.tsx";
import {TaskArea} from "../features/Task/components/TaskArea/TasksArea.tsx";

const Home = () => {
    return (
        <div style={{display:'flex',gap: 15}}>
            <Filter/>
            <TaskArea ClassName={'TaskArea'}/>
        </div>
    );
};

export default Home;