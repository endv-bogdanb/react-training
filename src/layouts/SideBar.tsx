import { BqSideMenu, BqSideMenuItem } from "@beeq/react";
import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const SideBar: FC = () => {
  return (
    <>
      <BqSideMenu>
        <BqSideMenuItem>
          Local
          <Link to="/local/use-state">
            <BqSideMenuItem>
              <span>State</span>
            </BqSideMenuItem>
          </Link>
          <Link to="/local/use-state-update">
            <BqSideMenuItem>
              <span>State update</span>
            </BqSideMenuItem>
          </Link>
          <Link to="/local/use-reducer">
            <BqSideMenuItem>
              <span>Reducer</span>
            </BqSideMenuItem>
          </Link>
        </BqSideMenuItem>
        <BqSideMenuItem>
          <span>Global</span>
          <Link to="/global/context">
            <BqSideMenuItem>
              <span>Context</span>
            </BqSideMenuItem>
          </Link>
          <Link to="/global/sync-external-store">
            <BqSideMenuItem>
              <span>External Store</span>
            </BqSideMenuItem>
          </Link>
        </BqSideMenuItem>
        <BqSideMenuItem>
          <span>Libraries</span>
          <Link to="/libraries/react-router">
            <BqSideMenuItem>
              <span>ReactRouter</span>
            </BqSideMenuItem>
          </Link>
          <Link to="/libraries/hook-form">
            <BqSideMenuItem>
              <span>Hook form</span>
            </BqSideMenuItem>
          </Link>
          <Link to="/libraries/react-query">
            <BqSideMenuItem>
              <span>React query</span>
            </BqSideMenuItem>
          </Link>
        </BqSideMenuItem>
      </BqSideMenu>
      <Outlet />
    </>
  );
};
