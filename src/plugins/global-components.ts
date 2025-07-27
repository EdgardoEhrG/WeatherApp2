import type { App } from "vue";

import Button from "../components/Button.vue";
import Field from "../components/Field.vue";
import Header from "../components/Header.vue";
import LocationInfo from "../components/LocationInfo.vue";
import LocationSelect from "../components/LocationSelect.vue";
import Statistic from "../components/Statistic.vue";

const components = {
  Button,
  Field,
  Header,
  LocationInfo,
  LocationSelect,
  Statistic,
};

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
