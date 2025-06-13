import type { InjectionKey, Ref } from "vue"

export const targetLevelKey = Symbol() as InjectionKey<Ref<number>>;
