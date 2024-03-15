<template>
    <div class="q-pa-md">
        <q-table title="Post List" dense separator="cell" :rows="posts.rows" :columns="columns" row-key="name"
            data-testid="table-posts" :loading="posts.loading">
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
    </div>
</template>

<script lang="ts" setup>
import { QTableProps } from 'quasar';
import { postsStore } from "@/store/posts";
import { onMounted } from 'vue'

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