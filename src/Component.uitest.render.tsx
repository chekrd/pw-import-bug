import {Component} from "./Component";
import {componentMock} from "./Component.uitest.shared";

/**
 * This runs in browser only. This module can import anything that depends on browser.
 * We often use *.uitest.render.tsx for defining tested component props, that cannot be
 * serialised, thus passed from *.uitest.tsx.
 */
export const ComponentTest = () => {
  return <Component content={componentMock.content} />;
}
