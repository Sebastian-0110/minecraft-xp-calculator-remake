<script setup lang="ts">
    import Converter from "./components/XpConverter.vue";
</script>

<template>
    <main class="flex flex-col gap-5">
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

        <section>
        </section>
    </main>
</template>

<style scoped>
</style>
