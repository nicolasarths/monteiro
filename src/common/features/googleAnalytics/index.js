import Script from "next/script";

export const GoogleAnalyticsComponent = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=G-Z4MDETTHNV"}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z4MDETTHNV');
        `}
      </Script>
    </>
  );
};
