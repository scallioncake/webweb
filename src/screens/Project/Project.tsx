import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Project = (): JSX.Element => {
  const navigationItems = [
    { label: "首页", href: "/", active: false },
    { label: "关于我", href: "/about", active: false },
    { label: "项目", href: "/project", active: true },
    { label: "博客", href: "/blog", active: false },
  ];

  const projects = [
    {
      title: "移动应用设计",
      description: "一款专注于用户体验的移动应用界面设计",
      category: "UI/UX Design",
      image: "/api/placeholder/400/300"
    },
    {
      title: "企业官网重设计",
      description: "为企业打造现代化、响应式的官网设计",
      category: "Web Design",
      image: "/api/placeholder/400/300"
    },
    {
      title: "产品原型设计",
      description: "通过原型验证产品概念和用户流程",
      category: "Prototyping",
      image: "/api/placeholder/400/300"
    },
    {
      title: "品牌视觉设计",
      description: "完整的品牌视觉识别系统设计",
      category: "Branding",
      image: "/api/placeholder/400/300"
    }
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
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl leading-[normal] [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
              项目
            </h1>
            <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#ffffff75] text-xl md:text-2xl tracking-[2px] leading-[normal]">
              Projects
            </div>
          </div>

          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                {/* 项目图片占位 */}
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <div className="text-white/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {project.title}
                  </div>
                </div>
                
                {/* 项目信息 */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#ff6161]/20 border border-[#ff6161]/30 rounded-full text-[#ff6161] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-white text-xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {project.description}
                  </p>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-transparent border border-white/20 text-white text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
