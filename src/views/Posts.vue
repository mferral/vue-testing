<template>
    <q-card class="my-table">
        <q-card-section class="bg-secondary text-white q-pa-sm">
            <div class="text-h6">Empresas</div>
            <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-section>
            <q-breadcrumbs>
                <q-breadcrumbs-el label="Principal" icon="home" />
                <q-breadcrumbs-el label="Empresas" />
            </q-breadcrumbs>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-pa-none">
            <q-table class="no-shadow" dense separator="cell" :rows="posts.rows" :columns="columns" row-key="name"
                data-testid="table-posts" :loading="posts.loading" :filter="filter">
                <template v-slot:top>
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar" name="input-search"
                        data-testid="input-search">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                    <q-space />
                    <q-btn color="primary" label="Add" icon="add" />
                </template>
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td key="name" :props="props">
                            {{ props.row.name }}
                        </q-td>
                        <q-td key="calories" :props="props">
                            <!-- <q-badge color="green"> -->
                            {{ props.row.calories }}
                            <!-- </q-badge> -->
                        </q-td>
                        <q-td key="fat" :props="props">
                            {{ props.row.fat }}
                        </q-td>
                        <q-td key="carbs" :props="props">
                            {{ props.row.carbs }}
                        </q-td>
                        <q-td key="protein" :props="props">
                            {{ props.row.protein }}
                        </q-td>
                        <q-td key="sodium" :props="props">
                            {{ props.row.sodium }}
                        </q-td>
                        <q-td key="calcium" :props="props">
                            <q-badge color="accent">
                                {{ props.row.calcium }}
                            </q-badge>
                        </q-td>
                        <q-td key="iron" :props="props">
                            {{ props.row.iron }}
                        </q-td>
                        <q-td key="actions" :props="props">
                            <q-btn flat round color="primary" size="sm" icon="edit"></q-btn>
                        </q-td>
                    </q-tr>
                </template>
                <template v-slot:no-data="{ icon, message }">
                    <div class="full-width row flex-center text-primary q-gutter-sm">
                        <span>
                            Sin datos
                        </span>
                        <q-icon size="2em" :name="icon" />
                    </div>
                </template>
            </q-table>

        </q-card-section>
    </q-card>


    <div class="q-pa-md">

        <span role="log">{{ filter }}</span>

    </div>
</template>

<script lang="ts" setup>
import { QTableProps } from 'quasar';
import { postsStore } from "@/store/posts";
import { onMounted, ref } from 'vue'

const filter = ref('')

onMounted(() => {
    posts.getPosts()
})

const posts = postsStore();
const columns: QTableProps['columns'] = [
    {
        name: 'name',
        required: true,
        label: 'Dessert',
        align: 'left',
        field: (row: any): any => row.name,
        format: (val: any): any => `${val}`,
        sortable: true
    },
    { name: 'calories', label: 'Calories', field: 'calories', sortable: true, align: 'center' },
    { name: 'fat', label: 'Fat', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs', field: 'carbs' },
    { name: 'protein', label: 'Protein', field: 'protein' },
    { name: 'sodium', label: 'Sodium', field: 'sodium' },
    { name: 'calcium', label: 'Calcium', field: 'calcium', sortable: true, sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron', field: 'iron', sortable: true, sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'actions', label: 'Actions', field: 'actions', align: 'center' }
]
</script>