import Connect from "../../components/Connect";
import { useUserStore } from "../../store";
import DashboardMenu from "./DashboardMenu";
import Window from "./Window"

export default function DashBoard() {
    const user = useUserStore();
    return (
        <div className="bg-teal-950/10 border-white/5 backdrop-blur-xl border-[1px] h-full w-full rounded-[11px] p-[11px] absolute grid grid-cols-10">
            {/* {JSON.stringify(user)} */}
            <DashboardMenu/>
            <Window user={user}/>
        </div>
    );
}