<script setup lang="ts">
    import Converter from "./components/XpConverter.vue";
    import XpTable from "./components/XpTable.vue";
    import { bosses, mining, mobs, other, smeltingAndCooking } from "../../core/src/actions/";

    import { ref, provide } from "vue";
    import { currentLevelKey } from "./inject/current-level";
    import { targetLevelKey } from "./inject/target-level";

    const currentLevel = ref(0);
    const targetLevel = ref(0);

    provide(currentLevelKey, currentLevel);
    provide(targetLevelKey, targetLevel);
</script>

<template>
    <main class="flex flex-col gap-7">
        <h1 class="bg-emphasis text-primary font-bold text-3xl p-3 text-center">Minecraft XP Calculator</h1>
        
        <section class="flex flex-col items-center gap-5">
            <h3 class="text-zinc-300 font-bold text-2xl">Converters</h3>

            <div class="flex gap-4">
                <Converter title="Xp points to Levels" inputUnit="xp points" outputUnit="levels" :conversion="(number) => number * 2" >
                    <template #default="result">
                        <p class="mt-2">Equals the amount in xp in levels <span class="font-bold">0 to {{ result.result }}</span></p>
                    </template>
                </Converter>

                <Converter title="Levels to Xp points" inputUnit="levels" outputUnit="xp points" :conversion="(number) => number * 2" />
            </div>
        </section>

        <section class="flex flex-col items-center gap-5">
            <div class="bg-emphasis p-4 w-fit rounded-md">
                <h4 class="text-primary-emphasis font-bold text-center">How many levels do you want?</h4>

                <div>
                    <label for="currentLevel" class="text-primary-400 font-bold w-100 block capitalize mb-2">Current level</label>
                    <InputNumber v-model="currentLevel" inputId="currentLevel" showButtons :min="0" class="w-100" />
                </div>

                <div class="mt-2">
                    <label for="targetLevel" class="text-primary-400 font-bold w-100 block capitalize mb-2">Target level</label>
                    <InputNumber v-model="targetLevel" inputId="targetLevel" showButtons :min="0" class="w-100" />
                </div>
            </div>

            <h3 class="text-zinc-300 font-bold text-3xl">Xp Calculator</h3>

            <XpTable title="Bosses" :actions="bosses" />
            <XpTable title="Mining" :actions="mining" />
            <XpTable title="Mobs" :actions="mobs" />
            <XpTable title="Other" :actions="other" />
            <XpTable title="Smelting and Cooking" :actions="smeltingAndCooking" />
        </section>
    </main>
</template>

<style scoped>
</style>
