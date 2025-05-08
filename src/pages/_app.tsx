import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import Topbar from "@/components/modules/Topbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, useEffect, useMemo, useState } from "react";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { MenuContextProvider, MenusContext } from "@/contexts/MenuContext";
import { BasketContextProvider } from "@/contexts/BasketContext";
import { Toaster } from 'react-hot-toast'
import Sidebar from "@/components/modules/Sidebar";


export default function App({ Component, pageProps }: AppProps) {
  const [init, setInit] = useState(false);
  const menuContext = useContext(MenusContext);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#000",
        },
        links: {
          color: "#000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <MenuContextProvider>
          <BasketContextProvider>
            <Topbar />
            <Navbar />
            <Sidebar/>
            <Component {...pageProps} />
            <Footer />
            <Particles id="tsparticles" options={options} />
            <Toaster position="top-left" reverseOrder={false} />
          </BasketContextProvider>
        </MenuContextProvider>
      </>
    );
  }

  return <></>;
}
