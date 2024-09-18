type UserDetails = {
	_id:string,
	publicKey:string,
	courtName:string,
	policeStationName:string,
}


export type UserStore = {
	type: string;
	authorized: boolean;
	details: UserDetails;
    setUser: (user:Partial<UserStore>)=>void;
};