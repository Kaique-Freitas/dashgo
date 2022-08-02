import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderbarDrawerProviderProps {
  children: ReactNode;
}

type SiderbarDrawerContextData = UseDisclosureReturn;

const SiderbarDrawerContext = createContext({} as SiderbarDrawerContextData);

export function SiderbarDrawerProvider(props: SiderbarDrawerProviderProps) {
  const { children } = props;

  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <SiderbarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderbarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SiderbarDrawerContext);
