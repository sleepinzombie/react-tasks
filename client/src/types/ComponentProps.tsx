import {Image, NavMenuItem } from './Types';



export type FabBtnProps = {
    icon?: string;
    className?: string;
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export type SearchBarProps = {
    title?: string;
    inputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    btnSearchClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    btnCloseClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export type ButtonIconProps = {
    icon: string;
    clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



export type UserPanelProps = {
    name: string;
    image: Image;
}


export type LogoProps = {
    text: string;
    url?: string;
    className?: string;
}


export type NavBarProps = {
    className?: string;
}

export type NavBarMenuProps = {
    className?: string;
    menuItems: NavMenuItem[];
    isNavLinks: boolean;
}

