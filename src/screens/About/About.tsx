import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const About = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const navigationItems = [
    { label: "首页", href: "/", active: false },
    { label: "关于我", href: "/about", active: true },
    { label: "项目", href: "/project", active: false },
    { label: "博客", href: "/blog", active: false },
  ];

  const slides = [
    {
      id: 0,
      title: "个人简介",
      subtitle: "Personal Introduction",
      content: (
        <div className="space-y-12 text-center">
        
          
          {/* 个人信息 */}
          <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              {/* 个人简介标题 */}
              <div className="space-y-2">
                <h2 className="text-white text-3xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                  个人简介
                </h2>
                <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#ff6161] text-lg tracking-[2px]">
                  Personal Introduction
                </div>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                你好，我是葱油饼炒面，这里是个人简介。
              </p>
              
              {/* 技能标签 */}
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                {["算法/AI工程师","产品设计爱好者", "阅读爱好者","终身学习者"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium hover:bg-white/20 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

    
        </div>
      )
    },
    {
      id: 1,
      title: "教育背景",
      subtitle: "Education",
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff6161]/20 to-[#ff6161]/10 rounded-lg flex items-center justify-center">
                <span className="text-[#ff6161] text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-white text-xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                  设计学学士
                </h3>
                <p className="text-white/60 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  2018 - 2022
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
              专注于视觉传达设计和用户体验设计，培养了扎实的设计基础和创意思维。
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-xl">📚</span>
              </div>
              <div>
                <h3 className="text-white text-xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                  产品设计认证
                </h3>
                <p className="text-white/60 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  2022 - 2023
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
              深入学习产品设计方法论，掌握用户研究、原型设计和设计系统构建。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "工作经历",
      subtitle: "Experience",
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center">
                <span className="text-green-400 text-xl">💼</span>
              </div>
              <div>
                <h3 className="text-white text-xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                  高级产品设计师
                </h3>
                <p className="text-white/60 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  2023 - 至今
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
              负责核心产品的用户体验设计，参与产品策略制定，带领设计团队完成多个重要项目。
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center">
                <span className="text-purple-400 text-xl">🎨</span>
              </div>
              <div>
                <h3 className="text-white text-xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                  UI/UX 设计师
                </h3>
                <p className="text-white/60 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  2022 - 2023
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
              专注于移动端和Web端界面设计，参与用户研究，优化产品用户体验。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "技能专长",
      subtitle: "Skills",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "UI/UX Design", level: 90, color: "from-[#ff6161] to-[#ff8a80]" },
              { name: "Figma", level: 95, color: "from-blue-500 to-blue-400" },
              { name: "User Research", level: 85, color: "from-green-500 to-green-400" },
              { name: "Prototyping", level: 88, color: "from-purple-500 to-purple-400" },
              { name: "Design System", level: 82, color: "from-orange-500 to-orange-400" },
              { name: "Design Thinking", level: 90, color: "from-pink-500 to-pink-400" }
            ].map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                    {skill.name}
                  </span>
                  <span className="text-white/60 text-xs [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "兴趣爱好",
      subtitle: "Interests",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🎨", title: "艺术创作", desc: "热爱绘画和视觉艺术" },
              { icon: "📚", title: "阅读学习", desc: "持续学习新知识" },
              { icon: "🏃‍♀️", title: "运动健身", desc: "保持健康的生活方式" },
              { icon: "✈️", title: "旅行探索", desc: "发现世界的美好" }
            ].map((interest, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-white text-lg [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium mb-2">
                  {interest.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  // 处理滚轮事件
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;
    
    e.preventDefault();
    setIsScrolling(true);
    
    if (e.deltaY > 0) {
      // 向下滚动 - 下一页
      setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    } else {
      // 向上滚动 - 上一页
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
    
    // 防止快速滚动
    setTimeout(() => setIsScrolling(false), 800);
  };

  // 处理触摸事件
  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    const startY = touch.clientY;
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const endY = touch.clientY;
      const diff = startY - endY;
      
      if (Math.abs(diff) > 50) { // 最小滑动距离
        if (diff > 0) {
          // 向上滑动 - 下一页
          setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
        } else {
          // 向下滑动 - 上一页
          setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchend', handleTouchEnd);
  };

  // 添加事件监听器
  useEffect(() => {
    const container = document.getElementById('about-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, [isScrolling]);

  return (
    <div id="about-container" className="min-h-screen bg-[linear-gradient(180deg,rgba(20,20,20,1)_0%,rgba(10,10,10,1)_100%)] relative overflow-hidden flex flex-col">
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
      <main className="flex-1 flex flex-col px-8 py-8">

        {/* 分页容器 */}
        <div className="flex-1 relative overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="h-full flex items-center justify-center px-4">
                <div className="max-w-4xl w-full">
                  {/* 分页标题 - 只在非个人简介页面显示 */}
                  {slide.id !== 0 && (
                    <div className="text-center space-y-4 mb-12">
                      <h2 className="text-white text-3xl md:text-4xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                        {slide.title}
                      </h2>
                      <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#ff6161] text-lg tracking-[2px]">
                        {slide.subtitle}
                      </div>
                    </div>
                  )}
                  
                  {/* 分页内容 */}
                  <div className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}>
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};
