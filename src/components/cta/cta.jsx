"use client";

export default function CTA({
  text = "Get Started",
  link = "#",
  icon = "chat",
  css = "bg-gradient"
}) {
  const handleClick = (e) => {
    e.preventDefault();

    try {
      // preferred: use your custom global wrapper defined in ChatWidget
      if (typeof window !== "undefined" && typeof window.toggleChat === "function") {
        window.toggleChat();
        return;
      }

      // fallback to legacy $zopim API if present
      if (typeof window !== "undefined" && window.$zopim && window.$zopim.livechat) {
        window.$zopim.livechat.window.show();
        return;
      }

      console.warn("Chat widget not ready: window.toggleChat or $zopim not available");
    } catch (err) {
      console.error("Error opening chat:", err);
    }
  };

  const renderIcon = () => {
    if (icon === "chat") return <img loading="lazy" alt="chat" className="transition-all duration-300" src="/icons/chat.png" width="16" height="16" />;
    if (icon === "chat-pink") return <img loading="lazy" alt="chat-pink" className="transition-all duration-300" src="/icons/chat-pink.png" width="17" height="17" />;
    if (icon === "call") return <img loading="lazy" alt="call" className="transition-all duration-300" src="/icons/call-pink.png" width="17" height="16" />;
    if (icon === "call-pink") return <img loading="lazy" alt="call-pink" className="transition-all duration-300" src="/icons/call-pink.png" width="17" height="16" />;
    if (icon === "chevron-white") return <img loading="lazy" alt="chevron-white" className="transition-all duration-300" src="/icons/right-chevron.png" />;
    if (icon === "chevron-pink") return <img loading="lazy" alt="chevron-pink" className="transition-all duration-300" src="/icons/chevron-up.png" />;
    return null;
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={`inline-flex items-center text-sm md:text-base leading-none w-max px-3 md:px-0 h-[40px] md:w-[200px] md:h-[50px] rounded-xl ${css} justify-center gap-2 uppercase transition-all duration-300`}
    >
      {["chat","chat-pink","call","call-pink"].includes(icon) && renderIcon()}
      <span>{text}</span>
      {["chevron-white","chevron-pink"].includes(icon) && renderIcon()}
    </a>
  );
}
