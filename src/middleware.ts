import { NextResponse, type NextRequest } from "next/server";
import { useUserStore } from "./store";

export function middleware(request: NextRequest) {
	// const authorized = useUserStore((state) => state.authorized);
	// if (!authorized) {
	// 	return NextResponse.redirect(new URL("/", request.url));
	// }
}

export const config = {
	matcher: ["/dashboard"],
};
