import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "sidebar-nav-after": () =>
        h(
          "div",
          { class: "sidebar-copyright" },
          [
            h("div", "Copyright © 2026 DocuBench."),
            h("div", "All rights reserved."),
          ],
        ),
    });
  },
};
