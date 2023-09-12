<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold" data-testid="title">Sign in</div>
            <div class="text-grey-8">Sign in below to access your account</div>
          </q-card-section>
          <q-card-section>
            <q-input dense outlined v-model="form.identifier" label="Email Address" name="email"
              :disable="auth.loading"></q-input>
            <q-input dense outlined v-model="form.password" class="q-mt-md" type="password" label="Password"
              name="password" role="textbox" :disable="auth.loading"></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn style="border-radius: 8px;" color="dark" rounded size="md" label="Sign in" no-caps class="full-width"
              :loading="auth.loading" :disable="auth.loading" @click="login()" role="button" name="btn-signin"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">Don't have an account yet?
              <a href="#" class="text-dark text-weight-bold" style="text-decoration: none">Sign up.</a>
            </div>
            <div role="loading">Loading: {{ auth.loading }}</div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useAuthStore } from "@/store/auth";

interface Form {
  identifier: string
  password: string
}
const form = reactive<Form>({
  identifier: "",
  password: ""
})

const auth = useAuthStore();

const login = () => {
  auth.login(form.identifier, form.password);
};
</script>