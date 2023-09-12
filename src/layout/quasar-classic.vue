
<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />
                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
            <q-list>
                <q-item-label header>Essential Menu</q-item-label>
                <q-item clickable rel="noopener" to="/">
                    <q-item-section avatar>
                        <q-icon name="home" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Home</q-item-label>
                        <q-item-label caption>Go Home</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" to="/posts">
                    <q-item-section avatar>
                        <q-icon name="library_books" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Posts</q-item-label>
                        <q-item-label caption>Post list</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable target="_blank" rel="noopener" href="http://chat.quasar.dev">
                    <q-item-section avatar>
                        <q-icon name="chat" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Discord Chat Channel</q-item-label>
                        <q-item-label caption>https://chat.quasar.dev</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable target="_blank" rel="noopener" href="https://forum.quasar.dev">
                    <q-item-section avatar>
                        <q-icon name="record_voice_over" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Forum</q-item-label>
                        <q-item-label caption>https://forum.quasar.dev</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable target="_blank" rel="noopener" href="https://twitter.quasar.dev">
                    <q-item-section avatar>
                        <q-icon name="rss_feed" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Twitter</q-item-label>
                        <q-item-label caption>@quasarframework</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable target="_blank" rel="noopener" href="https://facebook.quasar.dev">
                    <q-item-section avatar>
                        <q-icon name="public" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Facebook</q-item-label>
                        <q-item-label caption>@QuasarFramework</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <q-page padding>
                <router-view />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>