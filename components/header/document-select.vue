<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-[250px] justify-between"
      >
        {{
          currentDocument?.name
        }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50"/>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="dark w-[250px] p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Search document..."/>
        <CommandEmpty>No documents found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
                v-for="pdf in documentRoutes"
                :key="pdf.label"
                :value="pdf.value"
                @select="(ev) => selectDocument(ev)"
            >
              {{ pdf.label }}
              <Check
                  :class="cn(
                  'ml-auto h-4 w-4',
                  currentDocument?.name === pdf.value.name ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import {Check, ChevronsUpDown} from 'lucide-vue-next'
import {cn} from "~/lib/utils/ui";
import type {RouteLocationNormalizedLoaded, RouteRecordNormalized} from "vue-router";
const documentRoutes: Ref<{ value: RouteRecordNormalized, label: string }[]> = ref([])

const open = ref(false)
const currentDocument: Ref<RouteLocationNormalizedLoaded | undefined> = ref()


onMounted(() => {
  documentRoutes.value = useRouter().getRoutes()
      .filter(route => route.path.startsWith('/pdf/'))
      .map((route) => {
        return {value: route, label: route.name?.toString() || "unnamed"}
      })

  currentDocument.value = useRoute()
})

const selectDocument = (ev: any) => {
  navigateTo(`${(ev.detail.value as RouteRecordNormalized).path}#develop`, {external: true})
  open.value = false
}</script>

<style scoped>

</style>