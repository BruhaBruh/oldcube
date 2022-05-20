import { PropType } from "nuxt/dist/app/compat/capi";
import { h } from "vue";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b1"
  | "b2"
  | "btn"
  | "ht";

export default {
  props: {
    tag: String,
    variant: {
      type: String as PropType<TypographyVariant>,
      required: true,
    },
  },
  setup(
    props: { variant: TypographyVariant; tag?: string },
    { slots }: { slots: any }
  ) {
    const computedClass = computed<Record<string, boolean>>(() => ({
      "transition ease-in duration-75": true,
      "text-4xl font-bold": props.variant === "h1",
      "text-3xl font-bold": props.variant === "h2",
      "text-2xl font-bold": props.variant === "h3",
      "text-xl font-bold": props.variant === "h4",
      "text-lg font-bold": props.variant === "h5",
      "text-base font-bold": props.variant === "h6",
      "text-base": props.variant === "b1",
      "text-sm": props.variant === "b2",
      "text-base font-semibold": props.variant === "btn",
      "text-xs": props.variant === "ht",
    }));

    return () =>
      h(props.tag ?? "p", { class: computedClass.value }, slots.default());
  },
};
