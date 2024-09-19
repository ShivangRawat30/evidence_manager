import {  UserStore } from "../../../store/globalSlices";
export default function Page({ user }: { user: UserStore }) {
    return (
        <div className=" col-span-9 grid grid-rows-12">
            <div className="text-[200%] font-black">
                {user.details.courtName || user.details.policeStationName}
            </div>
            <div className="bg-emerald-900/5 row-span-11 rounded-[11px]">
                {user.details.publicKey}
            </div>
        </div>
    );
}