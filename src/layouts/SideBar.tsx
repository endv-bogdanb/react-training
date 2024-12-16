import { BqSideMenu, BqSideMenuItem } from "@beeq/react";
import type { FC } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const SideBar: FC = () => {
  const navigate = useNavigate();
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
      </BqSideMenu>
      <Outlet />
    </>
  );
};
