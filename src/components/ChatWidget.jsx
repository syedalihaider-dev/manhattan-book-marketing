import Script from "next/script";

export default function ChatWidget() {
  return (
    <>
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10"
        strategy="afterInteractive"
      />

      <Script id="zendesk-custom" strategy="afterInteractive">
        {`
          window.$zopim || function (a, d) {
              var b = $zopim = function (a) {
                      b._.push(a)
                  },
                  c = b.s = a.createElement(d);
              a = a.getElementsByTagName(d)[0];
              b.set = function (a) {
                  b.set._.push(a)
              };
              b._ = [];
              b.set._ = [];
              c.async = true;
              c.setAttribute("charset", "utf-8");
              c.src = "https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10";
              b.t = +new Date;
              c.type = "text/javascript";
              a.parentNode.insertBefore(c, a)
          }(document, "script");

          $zopim(function () {
              function a(count) {
                  if (count >= 1) $zopim.livechat.window.show();
              }
              $zopim.livechat.setOnUnreadMsgs(a);
          });

          window.setButtonURL = function() {
              $zopim.livechat.window.show();
          }

          window.toggleChat = function() {
              $zopim.livechat.window.toggle();
          }
        `}
      </Script>
    </>
  );
}
