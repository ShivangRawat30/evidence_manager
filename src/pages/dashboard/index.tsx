import Connect from "../../components/Connect";
import { useUserStore } from "../../store";

export default function DashBoard() {
    const user = useUserStore();
    return (
        <div>
            {JSON.stringify(user)}
            {/* <h1>Dashboard</h1>
            <p>Welcome to your personalized storage space.</p>
            <button>Connect your wallet</button>
            <button>Create a new ID</button>
            <button>View your ID</button>
            <button>Logout</button>
            <button>Settings</button> */}
        </div>
    );
}