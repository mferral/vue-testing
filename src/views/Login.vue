<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-form :greedy="true" @submit="login()">
            <q-card-section class="text-center">
              <div class="text-grey-9 text-h5 text-weight-bold" data-testid="title">Sign in</div>
              <div class="text-grey-8">Sign in below to access your account</div>
            </q-card-section>
            <q-card-section>
              <q-input dense outlined v-model="form.identifier" label="*Email Address" name="email"
                :disable="auth.loading" :rules="rulesEmail.validate()">
                <template v-slot:error>
                  <ErrorInputSlot id_slot="email-error" :message="rulesEmail.message()" />
                </template>
              </q-input>
              <q-input dense outlined v-model="form.password" class="q-mt-md" type="password" label="Password"
                name="password" role="textbox" :disable="auth.loading" :rules="rulesPassword.validate()">
                <template v-slot:error>
                  <ErrorInputSlot id_slot="password-error" :message="rulesPassword.message()" />
                </template>
              </q-input>
              <q-toggle v-model="accept" label="I accept the license and terms" />
              <div class="row" style="padding: 8px 12px 0; font-size: 11px;">
                <div class="col text-negative"><span id="">Please type something</span></div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn style="border-radius: 8px;" color="dark" rounded size="md" label="Sign in" no-caps
                class="full-width" :loading="auth.loading" :disable="auth.loading" type="submit" role="button"
                name="btn-signin"></q-btn>
            </q-card-section>
            <q-card-section class="text-center q-pt-none">
              <div class="text-grey-8">Don't have an account yet?
                <a href="#" class="text-dark text-weight-bold" style="text-decoration: none">Sign up.</a>
              </div>
              <div role="loading">Loading: {{ auth.loading }}</div>
            </q-card-section>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useQuasar } from 'quasar'
import ErrorInputSlot from "@/components/InputErrorSlots/ErrorInputSlot.vue"
import { IsRequired } from "@/utils/validate";

const $q = useQuasar()

interface Form {
  identifier: string
  password: string
}
const form = reactive<Form>({
  identifier: "",
  password: ""
})
const accept = ref(false)
const auth = useAuthStore();
const rulesEmail = new IsRequired()
const rulesPassword = new IsRequired()

const login = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first'
    })
  }
  else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
    auth.login(form.identifier, form.password);
  }

};
</script>