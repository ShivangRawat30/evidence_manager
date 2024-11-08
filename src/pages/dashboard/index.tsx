import Connect from "../../components/Connect";
import { useUserStore } from "../../store";
import DashboardMenu from "../../components/DashboardMenu";
import Window from "./Window"

export default function DashBoard() {
    const user = useUserStore();
    const authorized = user.authorized; 
    return  (
        <div className="bg-gradient-to-tr from-teal-200/10 via-emerald-200/10 to-cyan-200/10 border-white/5 backdrop-blur-xl border-[1px] h-full w-full rounded-[11px] p-[11px] absolute grid grid-cols-10">
            {/* {JSON.stringify(user)} */}
            <DashboardMenu />
            <Window user={user}/>
        </div>
    )
}