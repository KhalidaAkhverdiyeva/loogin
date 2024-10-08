'use client'; 

import { usePathname } from 'next/navigation';
import Navbar from './navbar'; 



export default function ClientNavbar() {
  const pathname = usePathname();
  
 
  return pathname !== '/' && pathname !== '/register' ? <Navbar /> : null;
}