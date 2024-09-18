import { NextResponse, type NextRequest } from 'next/server'
import { useUserStore } from './store';


const checkAuth = () => {
  const {authorized} = useUserStore();
  return authorized  
}
export function middleware(request: NextRequest){
  const authorized = checkAuth();
  if (!authorized) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/dashboard'],
}