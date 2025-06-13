<script setup lang="ts">
    import XpCalculator from "../../../core/src/xp-calculator";
    import type { Action } from "../../../core/src/actions/types/action";
    
    import { computed, inject } from "vue";
    import { currentLevelKey } from "../inject/current-level";
    import { targetLevelKey } from "../inject/target-level";

    const props = defineProps<{
        title: string,
        actions: Action[],
    }>();

    const currentLevel = inject(currentLevelKey);
    const targetLevel = inject(targetLevelKey);

    const joinSourcesTogether = (action: Action): string => {
        return action.sources.join(", ");
    };

    const getXpPerAction = (action: Action): string => {
        if (action.xpPerAction.type === "flat") {
            return action.xpPerAction.value.toString();
        }

        return `${action.xpPerAction.min} - ${action.xpPerAction.max}`
    };

    const getActionsNeeded = (action: Action): string => {
        if (targetLevel.value - currentLevel.value <= 0)
            return "-";

        if (action.xpPerAction.type === "flat") {
            const result = Math.ceil(XpCalculator.xpNeededToReachLevel(currentLevel.value, targetLevel.value) / action.xpPerAction.value); 
            return result.toString();
        }
        
        const min = Math.ceil(XpCalculator.xpNeededToReachLevel(currentLevel.value, targetLevel.value) / action.xpPerAction.min);
        const max = Math.ceil(XpCalculator.xpNeededToReachLevel(currentLevel.value, targetLevel.value) / action.xpPerAction.max);
        
        return `${max} - ${min}`;
    };
</script>

<template>
    <h4 class="font-bold text-2xl">{{ title }}</h4>

    <DataTable :value="actions">
        <Column header="Sources" field="sources">
            <template #body="action">
                {{ joinSourcesTogether(action.data) }}
            </template>
        </Column>

        <Column header="Xp per action" field="xpPerAction">
            <template #body="{ data }">
                {{ getXpPerAction(data) }}
            </template>
        </Column>

        <Column header="Actions needed">
            <template #body="{ data }">
                {{ getActionsNeeded(data) }}
            </template>
        </Column>
    </DataTable>
</template>
