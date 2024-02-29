import { expect, test } from '@playwright/experimental-ct-react';
import {ComponentTest} from "./Component.uitest.render";
import {componentMock} from "./Component.uitest.shared";

/**
 * This runs in Node only. This module can import only browser independent code.
 */
test('Component renders', async ({ mount }) => {
  const component = await mount(<ComponentTest />);

  await expect(component).toContainText(componentMock.content)
})
