import * as React from "react";
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <div className={`rounded-md ${styles.root} p-2`}>
      This is new text. And more.
      {/* <a href="https://turbo.build/repo/docs">
        <div className="ui-flex ui-w-full ui-items-center ui-justify-center ui-rounded-md ui-border ui-border-transparent ui-px-8 ui-py-3 ui-text-base ui-font-medium ui-no-underline ui-bg-white ui-text-black hover:ui-bg-gray-300 md:ui-py-3 md:ui-px-10 md:ui-text-lg md:ui-leading-6">
          Read the docs. (If you want to)
          <span className="ui-ml-2 ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-bg-clip-text ui-text-transparent">
            →
          </span>
        </div>
      </a> */}
      <a href="https://turbo.build/repo/docs">
        <div className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium no-underline bg-white text-black hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
          Read the docs. (If you want to)
          <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            →
          </span>
        </div>
      </a>
    </div>
  );
};
