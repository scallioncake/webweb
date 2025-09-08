import React from "react";
import { Link } from "react-router-dom";
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
    { label: "作品", href: "/portfolio", active: false },
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
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl leading-[normal] [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0]">
              博客
            </h1>
            <div className="[font-family:'Bebas-Regular',Helvetica] font-normal text-[#ffffff75] text-xl md:text-2xl tracking-[2px] leading-[normal]">
              Blog
            </div>
          </div>

          {/* 博客文章列表 */}
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#ff6161]/20 border border-[#ff6161]/30 rounded-full text-[#ff6161] text-xs [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium">
                    {post.category}
                  </span>
                  <span className="text-white/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {post.date}
                  </span>
                  <span className="text-white/50 text-sm [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica]">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-white text-2xl [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium mb-4 group-hover:text-[#ff6161] transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-white/70 text-base leading-relaxed [font-family:'HarmonyOS_Sans_SC-Regular',Helvetica] mb-6">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-[#ff6161] text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium hover:text-white transition-colors duration-300">
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
            <button className="px-8 py-3 bg-transparent border border-white/20 text-white text-sm [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
              加载更多文章
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
