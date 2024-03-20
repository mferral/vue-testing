<template>
    <q-card class="my-card">
        <q-form :greedy="true">
            <q-card-section class="bg-secondary text-white q-pa-sm">
                <div class="text-h6">Formulario</div>
            </q-card-section>
            <q-card-section>
                <q-breadcrumbs>
                    <q-breadcrumbs-el label="Principal" icon="home" />
                    <q-breadcrumbs-el label="Post" />
                </q-breadcrumbs>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
                <div class="col-3 text-weight-medium">Image</div>
                <div class="col-9">
                    <ProfilePhoto v-model="image" />
                    {{ image?.name }}
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
                <div class="col-3 text-weight-medium">Input Textfields</div>
                <div class="col-9 q-gutter-md">
                    <div class="row">
                        <q-input outlined v-model="text" label="Text" dense class="col-3" hint="Field is required"
                            :rules="[(val: any) => !!val || 'Field is required']" />
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="text-caption">Input text.</div>
                            <q-input outlined v-model="text" label="Text" dense hint="Field is required"
                                :rules="[(val: any) => !!val || 'Field is required']" />
                        </div>
                    </div>
                    <div class="row">
                        <q-input outlined v-model="text" type="password" label="Password" dense class="col-3"
                            hint="Field is required" :rules="[(val: any) => !!val || 'Field is required']" />
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
                <div class="col-3 text-weight-medium">Selects</div>
                <div class="col-9 q-gutter-md">
                    <div class="row">
                        <q-select outlined v-model="select" :options="options" label="Outlined" dense class="col-4"
                            :rules="[(select: any) => !!select || 'Field is required']" />
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
                <div class="col-3 text-weight-medium">Toggles</div>
                <div class="col-9 q-gutter-md">
                    <div class="row">
                        <q-field hide-bottom-space borderless class="q-pa-none" v-model="toggle"
                            :rules="[(toggle: any) => !!toggle || 'Field is required']">
                            <q-toggle v-model="toggle" label="Agreed" class="col-4" />
                        </q-field>
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <div class="row">
                                <div class="text-caption col-12">
                                    Select a least one option.
                                </div>
                                <q-field hide-bottom-space borderless class="q-pa-none" v-model="group" dense
                                    color="dark" :rules="[() => group.length > 0 || 'Field is required']"
                                    hint="Field is required">
                                    <q-option-group v-model="group" :options="options_group" color="green"
                                        type="toggle" />
                                </q-field>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
                <div class="col-3 text-weight-medium">Datepickers</div>
                <div class="col-9 q-gutter-md">
                    <div class="row">
                        <q-input outlined dense readonly v-model="date">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date" mask="YYYY-MM-DD">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                </div>
            </q-card-section>
            <q-separator class="q-my-md" />
            <q-card-actions class="row justify-end">
                <q-btn flat label="Cancelar" />
                <q-btn color="primary" type="submit" label="Guardar" />
            </q-card-actions>
        </q-form>
    </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProfilePhoto from '@/components/ProfilePhoto.vue';
const text = ref('')
const image = ref<any>(null)
const toggle = ref(false)
const date = ref('2019-02-01')
const select = ref(null)
const options = [
    'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
const group = ref([])
const options_group = [
    {
        label: 'Option 1',
        value: 'op1'
    },
    {
        label: 'Option 2',
        value: 'op2'
    },
    {
        label: 'Option 3',
        value: 'op3'
    }
]
// const image = ref<any>(null);
// const imageUrl = ref('https://cdn.quasar.dev/logo-v2/svg/logo.svg');
// const file = ref<any>(null)


// const handleUploadBtnClick = () => {
//     file.value.pickFiles()
// }

// const handleUpload = (img: any) => {
//     console.log('handleUpload is triggered');
//     image.value = img
//     console.log(image.value.name);

//     if (img) {
//         imageUrl.value = URL.createObjectURL(img)
//     }
// }
// const handleRemove = () => {
//     image.value = null
//     imageUrl.value = 'https://cdn.quasar.dev/logo-v2/svg/logo.svg'
// }
</script>(: any)(: any)(: any)(: any)(: any)(: any)(: any)(: any)(: any)(: any)(: any)(: any)
