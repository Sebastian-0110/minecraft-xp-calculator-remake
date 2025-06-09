<script setup lang="ts">
    import { ref, defineProps, computed } from "vue";

    const props = defineProps<{
        title: string,
        inputUnit: string,
        outputUnit: string,
        conversion: (value: number) => number,
    }>();

    const value = ref(0);
    const result = computed(() => props.conversion(value.value));
</script>

<template>
    <div class="bg-emphasis p-4 w-fit rounded-md">
        <h4 class="text-primary-emphasis font-bold text-center">{{ title }}</h4>

        <div>
            <div>
                <label for="value" class="text-primary-400 font-bold w-100 block capitalize mb-2">{{ inputUnit }}</label>
                <InputNumber v-model="value" inputId="value" showButtons :min="0" class="w-100" />
            </div>
            
            <slot :result>
                <p class="mt-2">Equals to: <span class="font-bold">{{ result }} {{ outputUnit }}</span></p>
            </slot>
        </div>
    </div>
</template>
