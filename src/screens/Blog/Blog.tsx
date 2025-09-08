import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Blog = (): JSX.Element => {
  const navigationItems = [
    { label: "首页", href: "/", active: false },
    { label: "关于我", href: "/about", active: false },
    { label: "项目", href: "/project", active: false },
    { label: "博客", href: "/blog", active: true },
  ];

  const blogPosts = [
    {
      title: "设计思维在产品开发中的应用",
      excerpt: "探讨如何将设计思维融入产品开发流程，提升用户体验和产品价值。",
      date: "2024-01-15",
      category: "设计思考",
      readTime: "5 分钟阅读"
    },
    {
      title: "用户体验设计的未来趋势",
      excerpt: "分析当前UX设计的发展趋势，以及AI时代下设计师需要具备的新技能。",
      date: "2024-01-10",
      category: "行业洞察",
      readTime: "8 分钟阅读"
    },
    {
      title: "从0到1：我的设计学习之路",
      excerpt: "分享从设计小白到专业设计师的成长经历，以及学习过程中的心得体会。",
      date: "2024-01-05",
      category: "个人成长",
      readTime: "6 分钟阅读"
    },
    {
      title: "移动端界面设计的最佳实践",
      excerpt: "总结移动端界面设计中的关键原则和实用技巧，帮助设计师创造更好的移动体验。",
      date: "2024-01-01",
      category: "设计技巧",
      readTime: "7 分钟阅读"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col" style={{ backgroundColor: '#F5F5F7' }}>
      {/* 导航栏 */}
      <header className="w-full h-20 px-4 sm:px-8 py-4 relative z-10">
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

        {/* 下载简历按钮 - 与导航栏文字完美对齐 */}
        <button className="hidden sm:inline-flex absolute top-[20px] right-4 sm:right-8 items-center h-auto transition-colors duration-300 hover:opacity-70">
          <span className="relative w-fit text-[#1D1D1F] text-sm sm:text-base md:text-sm leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
            下载简历
          </span>
        </button>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1 px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-[#1D1D1F] text-5xl md:text-6xl lg:text-7xl leading-[normal] [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
              博客
            </h1>
            <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#ffffff75] text-xl md:text-2xl tracking-[2px] leading-[normal]">
              Blog
            </div>
          </div>

          {/* 博客文章列表 */}
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-50 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#1D1D1F]/10 border border-[#1D1D1F]/20 rounded-full text-[#1D1D1F] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                    {post.category}
                  </span>
                  <span className="text-[#1D1D1F]/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {post.date}
                  </span>
                  <span className="text-[#1D1D1F]/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-[#1D1D1F] text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium mb-4 group-hover:text-[#1D1D1F] transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-[#1D1D1F]/70 text-base leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] mb-6">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-[#1D1D1F] text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium hover:text-[#1D1D1F] transition-colors duration-300">
                  阅读更多
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </article>
            ))}
          </div>

          {/* 加载更多按钮 */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-transparent border border-white/20 text-[#1D1D1F] text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium rounded-lg hover:bg-gray-50 transition-all duration-300">
              加载更多文章
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
