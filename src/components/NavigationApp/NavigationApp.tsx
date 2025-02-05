import React, { useState } from "react";
import { UsersApp } from "../UsersApp";
import { TodoApp } from "../TodoApp";
interface TabContent {
  tab: string;
  content: React.ReactNode;
}
const renderableTabContent: TabContent[] = [
  { tab: "todos", content: <TodoApp /> },
  { tab: "users", content: <UsersApp /> },
  { tab: "invoices", content: <div>Invoices</div> },
  { tab: "settings", content: <div>Settings</div> },
];
export function NavigationApp() {
  const [activeTab, setActiveTab] = useState("todos");
  let tabContent = null;
  for (const tab of renderableTabContent) {
    if (tab.tab === activeTab) {
      tabContent = tab.content;
      break;
    }
  }

  return (
    <div>
      <ul>
        <li onClick={() => setActiveTab("todos")}>Todos</li>
        <li onClick={() => setActiveTab("users")}>Users</li>
        <li onClick={() => setActiveTab("invoices")}>Invoices</li>
        <li onClick={() => setActiveTab("settings")}>Settings</li>
      </ul>
      {tabContent}
    </div>
  );
}
