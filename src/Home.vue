<template>
    <q-card class="q-pa-md">
        <q-infinite-scroll @load="onLoad" :offset="250">
            <div class="q-gutter-sm row items-start">
                <div v-for="(item, index) in items.array" :key="index" class="caption">
                    <q-img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
                        style="min-height: 300px; min-width: 290px" :ratio="1" />
                    <p>{{ item.name }}</p>
                </div>
            </div>
            <template v-slot:loading>
                <div class="row justify-center q-my-md">
                    <q-spinner-dots color="primary" size="40px" />
                </div>
            </template>
        </q-infinite-scroll>
    </q-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import axios from "axios";

const items = reactive<any>({ array: [] })
let offset = 0
const onLoad = async (_index: number, _done: any) => {
    setTimeout(async () => {
        const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=40&offset=${offset}&ts=1000&apikey=53f485bc8b535b7df47f5aa04513dd76&hash=6e055da3fb93998d0295bf83ac5c66e8`)
        items.array = [
            ...items.array,
            ...res.data.data.results
        ]
        offset += 40
        _done()
    }, 2000)
}
</script>

