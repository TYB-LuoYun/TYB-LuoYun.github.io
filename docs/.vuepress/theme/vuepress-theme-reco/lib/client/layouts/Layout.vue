<template>
  <div class="theme-container"  > 
     <ClientOnly  v-if ="frontmatter.home === true &&  route.hash != '#/home'" >
       <MyHome></MyHome>
     </ClientOnly>
    <Common  v-else> 
      <Home  v-if="route.hash == '#/home'" /> 
      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page
          :key="page.path"
        />
      </Transition>
    </Common> 
   
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePageFrontmatter, usePageData } from '@vuepress/client'

import Home from '../components/Home/index.vue'
import Page from '../components/Page/index.vue'
import Common from '../components/Common/index.vue'
import MyHome from "../components/search/MyHome.vue"
import { useScrollPromise, useMagicCard } from '../composables'

const page = usePageData()
const frontmatter = usePageFrontmatter()

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

const { initMagicCard } = useMagicCard()
onMounted(() => {
  initMagicCard()
})

const route = useRoute()
watch(route, () => {
  initMagicCard()
})
</script>
