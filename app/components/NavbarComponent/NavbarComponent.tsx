'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavbarComponent.module.scss"
import { logToDevTools, RouteLink } from '@/app/app.config';
import { useEffect } from 'react';

const NavbarComponent = ({links}: { links: RouteLink[]}) => {
    const pathname = usePathname();
    const preventRelog = null;
    
    useEffect(() => logToDevTools(), [preventRelog]);
    
    return (
        <div className={styles.host}>
            <nav className={styles.navbar}>
                {
                    links.map((link: RouteLink) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link href={link.path} className={isActive ? styles.activeNav : styles.nav} key={`${link.label}-${link.path}`}>{link.label}</Link>
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default NavbarComponent;