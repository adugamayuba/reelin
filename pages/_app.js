import { useEffect } from 'react';
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script';


// <!-- Google tag (gtag.js) -->
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0SZQE7CST"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q0SZQE7CST');
</script> */}

export default function App({ Component, pageProps }) {


    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   return (
     <ThemeProvider enableSystem={false} attribute="class">
       <Component {...pageProps} />
       <Analytics />
       <ToastContainer
         position="top-right"
         autoClose={8000}
         hideProgressBar={false}
         newestOnTop={false}
         draggable={false}
         pauseOnVisibilityChange
         closeOnClick
         pauseOnHover
       />
       <Script
         id="google"
         src={`https://www.googletagmanager.com/gtag/js?id=GTM-T32WDD8H`}
         type="text/javascript"
         strategy="lazyOnload"
       />
       <Script strategy="lazyOnload" id="googler">
         {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config','GTM-T32WDD8H' );`}
       </Script>
     </ThemeProvider>
   );
}
