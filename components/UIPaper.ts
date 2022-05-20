import { h } from "vue";

export default {
  props: {
    tag: String,
  },
  setup(props: { tag?: string }, { slots }: { slots: any }) {
    return () =>
      h(
        props.tag ?? "div",
        {
          class:
            "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 shadow rounded-2xl",
        },
        slots.default()
      );
  },
};
