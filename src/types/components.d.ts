declare module "vue" {
  export interface GlobalComponents {
    Button: typeof import("@/components/Button.vue")["default"];
    Field: typeof import("@/components/Field.vue")["default"];
    Header: typeof import("@/components/Header.vue")["default"];
    LocationInfo: typeof import("@/components/LocationInfo.vue")["default"];
    LocationSelect: typeof import("@/components/LocationSelect.vue")["default"];
    Statistic: typeof import("@/components/Statistic.vue")["default"];
  }
}
export {};
