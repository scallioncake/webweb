import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Project = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<'systematic' | 'daily'>('systematic');
  
  const navigationItems = [
    { label: "首页", href: "/", active: false },
    { label: "关于我", href: "/about", active: false },
    { label: "项目", href: "/project", active: true },
    { label: "博客", href: "/blog", active: false },
  ];

  const systematicProjects = [
    {
      title: "智能推荐系统",
      description: "基于机器学习的个性化推荐算法设计与实现",
      category: "AI/ML",
      year: "2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "企业级数据平台",
      description: "构建可扩展的大数据处理和分析平台",
      category: "Backend",
      year: "2023",
      image: "/api/placeholder/400/300"
    },
    {
      title: "分布式系统架构",
      description: "微服务架构设计与容器化部署方案",
      category: "Architecture",
      year: "2023",
      image: "/api/placeholder/400/300"
    },
    {
      title: "机器学习平台",
      description: "端到端的机器学习模型训练与部署平台",
      category: "MLOps",
      year: "2024",
      image: "/api/placeholder/400/300"
    }
  ];

  const dailyPractices = [
    {
      title: "算法练习",
      description: "日常算法题解和数据结构练习",
      category: "Algorithm",
      year: "2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "UI组件库",
      description: "个人前端组件库的设计与开发",
      category: "Frontend",
      year: "2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "设计练习",
      description: "日常UI/UX设计练习和创意探索",
      category: "Design",
      year: "2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "技术博客",
      description: "技术学习和经验分享的博客文章",
      category: "Writing",
      year: "2024",
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
        <div className="max-w-7xl mx-auto pt-20">
          
          {/* 切换按钮 */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('systematic')}
                  className={`px-6 py-3 rounded-xl text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium transition-all duration-300 ${
                    activeTab === 'systematic'
                      ? 'bg-[#ff6161] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  系统性项目
                </button>
                <button
                  onClick={() => setActiveTab('daily')}
                  className={`px-6 py-3 rounded-xl text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium transition-all duration-300 ${
                    activeTab === 'daily'
                      ? 'bg-[#ff6161] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  日常小练习
                </button>
              </div>
            </div>
          </div>

          {/* 项目内容 */}
          <div className="space-y-6">
            {/* 系统性项目 */}
            {activeTab === 'systematic' && (
              <div className="space-y-6">              
                <div className="grid grid-cols-4 gap-6">
                  {systematicProjects.map((project, index) => (
                    <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                      {/* 项目图片占位 */}
                      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative">
                        <div className="text-white/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                          {project.title}
                        </div>
                        
                        {/* 悬浮时显示描述 */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] text-center">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* 项目信息 */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-[#ff6161]/20 border border-[#ff6161]/30 rounded-full text-[#ff6161] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-white text-lg [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* 年份显示 - 整个卡片的右下角 */}
                      <div className="absolute bottom-4 right-4 text-white/30 text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                        {project.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 日常小练习 */}
            {activeTab === 'daily' && (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-6">
                  {dailyPractices.map((project, index) => (
                    <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                      {/* 项目图片占位 */}
                      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative">
                        <div className="text-white/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                          {project.title}
                        </div>
                        
                        {/* 悬浮时显示描述 */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] text-center">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* 项目信息 */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-[#ff6161]/20 border border-[#ff6161]/30 rounded-full text-[#ff6161] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-white text-lg [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* 年份显示 - 整个卡片的右下角 */}
                      <div className="absolute bottom-4 right-4 text-white/30 text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                        {project.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
