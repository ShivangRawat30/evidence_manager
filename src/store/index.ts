"use client"
import { create } from "zustand";
import { UserStore } from "./globalSlices";

export const useUserStore = create<UserStore>(set=>({
	type: "",
	authorized: false,
	details: {_id: "", publicKey: "", courtName:"",policeStationName:""},	
    setUser: (user) => set(state => ({...state,...user})), 
    // Example of setting user to authorized and type to "user"
    // Add more functions for managing user state here like logout, login, etc.
    
}))
