import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Screen = (): JSX.Element => {
  const navigationItems = [
    { label: "首页", href: "/", active: true },
    { label: "关于我", href: "/about", active: false },
    { label: "作品", href: "/portfolio", active: false },
    { label: "博客", href: "/blog", active: false },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(20,20,20,1)_0%,rgba(10,10,10,1)_100%)] relative overflow-hidden flex flex-col">
      {/* 导航栏 */}
      <header className="w-full h-20 px-8 py-4 relative z-10">
        <NavigationMenu className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="inline-flex items-center justify-center gap-[19px]">
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <NavigationMenuItem className="flex-col h-20 justify-center gap-2.5 relative flex-[0_0_auto] inline-flex items-center">
                  <NavigationMenuLink
                    href={item.href}
                    className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]"
                  >
                    <div
                      className={`relative w-fit mt-[-1.00px] text-base leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0] ${
                        item.active ? "text-[#ff6161]" : "text-white"
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="relative self-stretch w-full h-0.5" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {index < navigationItems.length - 1 && (
                  <div className="relative w-fit text-white text-base leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
                    /
                  </div>
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="gap-1 px-2.5 py-1.5 absolute top-[18px] right-8 bg-black/50 border border-white/20 rounded-lg inline-flex items-center h-auto hover:bg-black/70 transition-colors">
          <span className="relative w-fit text-white text-base leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
            下载简历
          </span>
        </Button>

        <Link to="/u39318u39029">
      
        </Link>
      </header>

      {/* 主要内容区域 - 居中显示 */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="text-center space-y-8 max-w-4xl">
          {/* 问候语 */}
          <div className="space-y-6">
            <div className="text-white text-5xl md:text-6xl lg:text-7xl leading-[normal] [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
              你好👋
            </div>
            <div className="space-y-2">
              {/* <div className="text-white text-5xl md:text-6xl lg:text-7xl leading-[normal] [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
                我是葱油饼炒面
              </div> */}
              {/* 英文描述 */}
              <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#ffffff75] text-xl md:text-2xl tracking-[2px] leading-[normal]">
                {/* A brave climber in the world of product design */}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};
