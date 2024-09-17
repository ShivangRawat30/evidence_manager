import { useRouter } from "next/router";
import Connect from "../../../components/Connect";


export default function IdPage() {
    const router = useRouter();
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1>Your ID: {router.pathname}</h1>
            <p>Welcome to your personalized storage space.</p>
            <Connect/>
        </div>
    );
}