import React from 'react';
import { NavigationMenu } from "@/components/ui/navigation-menu";
import MainNavbarMenus from './main-navigation/MainNavbarMenus';

const MainNavbar = () => {
  return (
    <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFont']">
      <NavigationMenu className="mx-auto max-w-screen-2xl">
        <MainNavbarMenus />
      </NavigationMenu>
    </div>
  );
};

export default MainNavbar;