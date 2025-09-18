<script setup lang="ts">
interface Props {
  title: string
  count: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'No title available',
  count: 0,
})

// some colors for tags
const colors = [
  '#dc2626',
  '#d97706',
  '#65a30d',
  '#059669',
  '#0891b2',
  '#0284c7',
  '#4f46e5',
  '#7c3aed',
  '#c026d3',
  '#db2777',
]

// get a deterministic color based on title
function getColorFromTitle(title: string) {
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    const char = title.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return colors[Math.abs(hash) % colors.length]
}

const picAColor = computed(() => getColorFromTitle(props.title))
</script>

<template>
  <div
    class="text-[#F1F2F4] px-5 py-3 rounded hover:underline rand-bg-color hover:scale-[1.05] transition-all duration-500"
  >
    <NuxtLink :to="`/categories/${title?.toLocaleLowerCase() || ''}`" class="text-lg font-extrabold">
      <h1>#{{ title }}({{ count }})</h1>
    </NuxtLink>
  </div>
</template>

<style scoped>
.rand-bg-color {
  background-color: v-bind(picAColor);
}
</style>
