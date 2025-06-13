
import type { InjectionKey, Ref } from "vue"

export const currentLevelKey = Symbol() as InjectionKey<Ref<number>>;
