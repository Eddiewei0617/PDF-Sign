import React from "react";
import Link from "next/link";
import classes from "./AllFunctions.module.css";
import Test from "./test";

const AllFunctions = () => {
  return (
    <ul className={`${classes["container"]}`}>
      <li className={`${classes["item"]} ${classes["btn"]}`}>
        <Link href="/create-task/prepare-doc">
          <a>Create new task</a>
        </Link>
      </li>
      <li>
        <Test desp="測試"></Test>
      </li>
    </ul>
  );
};

export default AllFunctions;
