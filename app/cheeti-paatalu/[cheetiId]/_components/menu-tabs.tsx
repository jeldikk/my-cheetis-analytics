"use client";
import { Tabs } from "flowbite-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HiUserCircle,
  HiAdjustments,
  HiClipboardList,
  HiHome,
} from "react-icons/hi";
import { IconType } from "react-icons";

type TabStateType = {
  match: string;
  display: string;
  icon: IconType;
  name: string;
} | null;

const TABSTATE: TabStateType[] = [
  {
    match: "",
    display: "Home",
    icon: HiHome,
    name: "home",
  },
  {
    match: "payment",
    display: "Add Payment",
    icon: HiUserCircle,
    name: "add-payment",
  },
  {
    match: "summary",
    display: "Summary",
    icon: HiClipboardList,
    name: "summary",
  },
  {
    match: "analysis",
    display: "Analysis",
    icon: HiAdjustments,
    name: "analysis",
  },
];

function MenuTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [activeTab, setActiveTab] = useState<TabStateType>(null);

  useEffect(() => {
    const splittedPath = pathname.split("/");
    const variant = splittedPath.pop();
    if (variant === params.cheetiId) {
      setActiveTab({
        match: "",
        display: "Home",
        icon: HiHome,
        name: "home",
      });
    } else {
      const selectedTab = TABSTATE.find((t) => t?.match === variant);
      if (selectedTab) {
        setActiveTab(selectedTab);
      }
    }
  }, [pathname, params]);

  const handleTabClick = (tabIndex: number) => {
    const selectedTab = TABSTATE[tabIndex];
    if (activeTab?.name !== selectedTab?.name) {
      setActiveTab(activeTab);
      router.push(`/cheeti-paatalu/${params.cheetiId}/${selectedTab?.match}`);
    }
  };
  return (
    <Tabs
      aria-label="Menu Tabs"
      style="pills"
      onActiveTabChange={handleTabClick}
    >
      {TABSTATE.map((item) => (
        <Tabs.Item
          key={item?.name}
          title={item?.display}
          icon={item?.icon}
          active={activeTab?.name === item?.name ? true : false}
        >
          {}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}

export default MenuTabs;
