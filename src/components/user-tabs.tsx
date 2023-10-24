import { Slot, component$ } from "@builder.io/qwik";
import { Tabs, TabList, TabPanel, Tab } from "@qwik-ui/headless";

export const MyTabs = (props: any) => {
  return <Tabs>{props.children}</Tabs>;
};

export const MyTabList = component$(() => {
  return (
    <TabList>
      <Slot />
    </TabList>
  );
});

export const MyTabPanel = component$(() => {
  return (
    <TabPanel>
      <Slot />
    </TabPanel>
  );
});

export const MyTab = component$(() => {
  return (
    <Tab>
      <Slot />
    </Tab>
  );
});
