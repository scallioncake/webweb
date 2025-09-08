import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const About = (): JSX.Element => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const navigationItems = [
    { label: "首页", href: "/", active: false },
    { label: "关于我", href: "/about", active: true },
    { label: "项目", href: "/project", active: false },
    { label: "博客", href: "/blog", active: false },
  ];

  // 滚动动画观察器
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // 添加ref到数组的辅助函数
  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F5F5F7' }}>
      {/* 导航栏 */}
      <header className="w-full h-20 px-4 sm:px-8 py-4 relative z-10 sticky top-0 backdrop-blur-sm" style={{ backgroundColor: '#F5F5F7' }}>
        {/* 手机端：左对齐导航栏 */}
        <NavigationMenu className="absolute top-0 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <NavigationMenuList className="inline-flex items-center justify-start sm:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label} className="flex-col h-20 justify-center relative flex-[0_0_auto] inline-flex items-center">
                <NavigationMenuLink
                  href={item.href}
                  className="inline-flex flex-col items-center gap-1 sm:gap-2 relative flex-[0_0_auto] group"
                >
                  <div className="relative w-fit text-sm sm:text-base md:text-sm leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0] text-[#1D1D1F] transition-colors duration-300 group-hover:text-[#1D1D1F]/70">
                    {item.label}
                  </div>
                  <div 
                    className={`relative h-1 transition-all duration-300 ${
                      item.active 
                        ? "w-4 sm:w-5 md:w-6 bg-black" 
                        : "w-0 bg-transparent"
                    }`}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 下载简历按钮 - 隐藏手机端，平板和桌面端显示 */}
        <button className="hidden sm:inline-flex absolute top-[16px] sm:top-[18px] right-4 sm:right-8 items-center h-auto transition-colors duration-300 hover:opacity-70">
          <span className="relative w-fit text-[#1D1D1F] text-sm sm:text-base md:text-sm leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
            下载简历
          </span>
        </button>
      </header>

      {/* 主要内容区域 - 长页面滚动 */}
      <main className="px-8 py-16 space-y-32">
        {/* 个人简介 */}
        <section 
          ref={(el) => addToRefs(el, 0)}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="backdrop-blur-sm border border-black/10 rounded-2xl p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#fff' }}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-[#1D1D1F] text-4xl md:text-5xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                    个人简介
                  </h2>
                  <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#1D1D1F]/70 text-xl tracking-[3px]">
                    Personal Introduction
                  </div>
                </div>
                
                <p className="text-[#1D1D1F]/80 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] max-w-2xl mx-auto">
                  你好，我是葱油饼炒面，这里是个人简介。
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  {["11","11","11"].map((skill, index) => (
                    <span 
                      key={skill} 
                      className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-[#1D1D1F] text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 教育背景 */}
        <section 
          ref={(el) => addToRefs(el, 1)}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-[#1D1D1F] text-4xl md:text-5xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                教育背景
              </h2>
              <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#1D1D1F]/70 text-xl tracking-[3px]">
                Education
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-50 hover:scale-105 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6161]/20 to-[#ff6161]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#1D1D1F] text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                      设计学学士
                    </h3>
                    <p className="text-[#1D1D1F]/60 text-lg [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                      2018 - 2022
                    </p>
                  </div>
                </div>
                <p className="text-[#1D1D1F]/70 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  专注于视觉传达设计和用户体验设计，培养了扎实的设计基础和创意思维。
                </p>
              </div>
              
              <div className="bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-50 hover:scale-105 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-400 text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                      产品设计认证
                    </h3>
                    <p className="text-[#1D1D1F]/60 text-lg [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                      2022 - 2023
                    </p>
                  </div>
                </div>
                <p className="text-[#1D1D1F]/70 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  深入学习产品设计方法论，掌握用户研究、原型设计和设计系统构建。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section 
          ref={(el) => addToRefs(el, 2)}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-[#1D1D1F] text-4xl md:text-5xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                工作经历
                      </h2>
              <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#1D1D1F]/70 text-xl tracking-[3px]">
                Experience
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-50 hover:scale-105 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-green-400 text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                      高级产品设计师
                    </h3>
                    <p className="text-[#1D1D1F]/60 text-lg [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                      2023 - 至今
                    </p>
                      </div>
                    </div>
                <p className="text-[#1D1D1F]/70 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  负责核心产品的用户体验设计，参与产品策略制定，带领设计团队完成多个重要项目。
                </p>
              </div>
              
              <div className="bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-50 hover:scale-105 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-purple-400 text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                      UI/UX 设计师
                    </h3>
                    <p className="text-[#1D1D1F]/60 text-lg [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                      2022 - 2023
                    </p>
                  </div>
                </div>
                <p className="text-[#1D1D1F]/70 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                  专注于移动端和Web端界面设计，参与用户研究，优化产品用户体验。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 技能专长 */}
        <section 
          ref={(el) => addToRefs(el, 3)}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-[#1D1D1F] text-4xl md:text-5xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                技能专长
              </h2>
              <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#1D1D1F]/70 text-xl tracking-[3px]">
                Skills
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "UI/UX Design", level: 90, color: "from-[#ff6161] to-[#ff8a80]" },
                { name: "Figma", level: 95, color: "from-blue-500 to-blue-400" },
                { name: "User Research", level: 85, color: "from-green-500 to-green-400" },
                { name: "Prototyping", level: 88, color: "from-purple-500 to-purple-400" },
                { name: "Design System", level: 82, color: "from-orange-500 to-orange-400" },
                { name: "Design Thinking", level: 90, color: "from-pink-500 to-pink-400" }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gray-50 hover:scale-105 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#1D1D1F] text-lg [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[#1D1D1F]/60 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-2000 ease-out group-hover:shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
              </div>
            </div>
          ))}
        </div>
          </div>
        </section>

        {/* 兴趣爱好 */}
        <section 
          ref={(el) => addToRefs(el, 4)}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-32"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-[#1D1D1F] text-4xl md:text-5xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                兴趣爱好
              </h2>
              <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#1D1D1F]/70 text-xl tracking-[3px]">
                Interests
              </div>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "🎨", title: "艺术创作", desc: "热爱绘画和视觉艺术" },
                { icon: "📚", title: "阅读学习", desc: "持续学习新知识" },
                { icon: "🏃‍♀️", title: "运动健身", desc: "保持健康的生活方式" },
                { icon: "✈️", title: "旅行探索", desc: "发现世界的美好" }
              ].map((interest, index) => (
                <div 
                  key={index} 
                  className="bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-50 hover:scale-105 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h3 className="text-[#1D1D1F] text-xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium mb-3">
                    {interest.title}
                  </h3>
                  <p className="text-[#1D1D1F]/70 text-lg leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
