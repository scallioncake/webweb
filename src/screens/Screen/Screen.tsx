import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Screen = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const navigationItems = [
    { label: "首页", href: "/", active: true },
    { label: "关于我", href: "/about", active: false },
    { label: "项目", href: "/project", active: false },
    { label: "博客", href: "/blog", active: false },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // 尝试自动播放视频
      const handleCanPlay = () => {
        video.play().catch(() => {
          // 如果自动播放失败，静默处理（通常是浏览器策略限制）
        });
      };

      video.addEventListener('canplay', handleCanPlay);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  // 点击页面时尝试播放视频（用于兼容严格的浏览器自动播放策略）
  const handlePageClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {
        // 静默处理播放失败
      });
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex flex-col bg-[linear-gradient(180deg,rgba(20,20,20,1)_0%,rgba(10,10,10,1)_100%)]"
      onClick={handlePageClick}
    >
      {/* 视频背景 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        您的浏览器不支持视频标签。
      </video>
      
      {/* 背景遮罩层，确保文字可读性 */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* 导航栏 */}
      <header className="w-full h-20 px-8 py-4 relative z-20">
        <NavigationMenu className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="inline-flex items-center justify-center gap-8">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label} className="flex-col h-20 justify-center relative flex-[0_0_auto] inline-flex items-center">
                <NavigationMenuLink
                  href={item.href}
                  className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto] group"
                >
                  <div className="relative w-fit text-base leading-[normal] whitespace-nowrap [font-family:'HarmonyOS_Sans_SC-Medium',Helvetica] font-medium tracking-[0] text-white transition-colors duration-300 group-hover:text-white/80">
                    {item.label}
                  </div>
                  <div 
                    className={`relative w-full h-0.5 transition-all duration-300 ${
                      item.active 
                        ? "bg-white" 
                        : "bg-transparent group-hover:bg-white/30"
                    }`}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
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
      <main className="flex-1 flex items-center justify-center px-8 relative z-20">
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
