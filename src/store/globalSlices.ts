export type UserStore = {
	id: string;
	authorized: boolean;
	address: string;
	type: string;
    setUser: (user:Partial<UserStore>)=>void;
};