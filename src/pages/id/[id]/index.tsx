import { useRouter } from "next/router";
import Connect from "../../../components/Connect";
import { useUserStore } from "../../../store";

export default function IdPage() {
    const {type}=useUserStore();
    return (
        <div className="h-full w-screen flex flex-col items-center bg-emerald-300/10">
            <h1>Welcome {type}!</h1>
        </div>
    );
}