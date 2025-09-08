import { useState } from "react";
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
    <div className="min-h-screen relative overflow-hidden flex flex-col" style={{ backgroundColor: '#F5F5F7' }}>
      {/* 导航栏 */}
      <header className="w-full h-20 px-4 sm:px-8 py-4 relative z-10">
        <NavigationMenu className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="inline-flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label} className="flex-col h-20 justify-center relative flex-[0_0_auto] inline-flex items-center">
                <NavigationMenuLink
                  href={item.href}
                  className="inline-flex flex-col items-center gap-1 sm:gap-2 relative flex-[0_0_auto] group"
                >
                  <div className="relative w-fit text-xs sm:text-sm md:text-base leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0] text-[#1D1D1F] transition-colors duration-300 group-hover:text-[#1D1D1F]/70">
                    {item.label}
                  </div>
                  <div 
                    className={`relative h-1 transition-all duration-300 ${
                      item.active 
                        ? "w-3 sm:w-4 md:w-5 bg-black" 
                        : "w-0 bg-transparent"
                    }`}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 absolute top-[18px] right-2 sm:right-4 md:right-8 bg-black/10 border border-black/20 rounded-lg inline-flex items-center h-auto hover:bg-black/20 transition-colors">
          <span className="relative w-fit text-[#1D1D1F] text-xs sm:text-sm md:text-base leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
            下载简历
          </span>
        </Button>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto pt-12 sm:pt-16 md:pt-20">
          
          {/* 切换按钮 */}
          <div className="flex justify-start mb-8 sm:mb-12 md:mb-16">
            <div className="relative">
              {/* 底部横线 */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#1D1D1F]/20"></div>
              
              <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
                <button
                  onClick={() => setActiveTab('systematic')}
                  className="group relative flex items-center space-x-2 sm:space-x-3 pb-3 sm:pb-4 transition-all duration-300"
                >
                  {/* 图标 */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        activeTab === 'systematic' 
                          ? 'text-[#1D1D1F]' 
                          : 'text-[#1D1D1F]/60 group-hover:text-[#1D1D1F]'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  
                  {/* 文字 */}
                  <span className={`text-sm sm:text-base [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium transition-colors duration-300 ${
                    activeTab === 'systematic' 
                      ? 'text-[#1D1D1F]' 
                      : 'text-[#1D1D1F]/60 group-hover:text-[#1D1D1F]'
                  }`}>
                    系统性项目
                  </span>
                  
                  {/* 激活状态底部横线 */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1D1D1F] transition-all duration-300 ${
                    activeTab === 'systematic' ? 'w-full' : 'w-0'
                  }`}></div>
                </button>
                
                <button
                  onClick={() => setActiveTab('daily')}
                  className="group relative flex items-center space-x-2 sm:space-x-3 pb-3 sm:pb-4 transition-all duration-300"
                >
                  {/* 图标 */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        activeTab === 'daily' 
                          ? 'text-[#1D1D1F]' 
                          : 'text-[#1D1D1F]/60 group-hover:text-[#1D1D1F]'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* 文字 */}
                  <span className={`text-sm sm:text-base [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium transition-colors duration-300 ${
                    activeTab === 'daily' 
                      ? 'text-[#1D1D1F]' 
                      : 'text-[#1D1D1F]/60 group-hover:text-[#1D1D1F]'
                  }`}>
                    日常小练习
                  </span>
                  
                  {/* 激活状态底部横线 */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#1D1D1F] transition-all duration-300 ${
                    activeTab === 'daily' ? 'w-full' : 'w-0'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* 项目内容 */}
          <div className="space-y-6">
            {/* 系统性项目 */}
            {activeTab === 'systematic' && (
              <div className="space-y-6">              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {systematicProjects.map((project, index) => (
                    <div key={index} className="group relative bg-white backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                      {/* 项目图片占位 */}
                      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative">
                        <div className="text-[#1D1D1F]/50 text-xs sm:text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] text-center px-2">
                          {project.title}
                        </div>
                        
                        {/* 悬浮时显示描述 */}
                        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-[#1D1D1F] text-xs sm:text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] text-center">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* 项目信息 */}
                      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-[#1D1D1F]/20 border border-[#1D1D1F]/20 rounded-full text-[#1D1D1F] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-[#1D1D1F] text-sm sm:text-base lg:text-lg [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* 年份显示 - 整个卡片的右下角 */}
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-[#1D1D1F]/30 text-lg sm:text-xl lg:text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {dailyPractices.map((project, index) => (
                    <div key={index} className="group relative bg-white backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                      {/* 项目图片占位 */}
                      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative">
                        <div className="text-[#1D1D1F]/50 text-xs sm:text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] text-center px-2">
                          {project.title}
                        </div>
                        
                        {/* 悬浮时显示描述 */}
                        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-[#1D1D1F] text-xs sm:text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] text-center">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* 项目信息 */}
                      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-[#1D1D1F]/20 border border-[#1D1D1F]/20 rounded-full text-[#1D1D1F] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-[#1D1D1F] text-sm sm:text-base lg:text-lg [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* 年份显示 - 整个卡片的右下角 */}
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-[#1D1D1F]/30 text-lg sm:text-xl lg:text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
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
