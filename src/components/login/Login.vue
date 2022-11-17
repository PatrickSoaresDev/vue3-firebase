<template>
  <section class="h-screen">
    <div class="px-6 h-full bg-gray-800 text-white">
      <div
        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div
          class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full"
            alt="Sample image"
          />
        </div>
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form>
            <div
              class="flex flex-row items-center justify-center lg:justify-start"
            >
              <p class="text-lg mb-0 mr-4">Entrar com</p>
              <button
                title="Entre com o Facebook"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-white text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <!-- Facebook -->
                <FacebookIcon class="h-4 w-4 text-blue-600" />
              </button>

              <button
                title="Entre com o Google"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-white text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <!-- Google -->
                <GoogleIcon class="h-4 w-4" />
              </button>
            </div>

            <div
              class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p class="text-center font-semibold mx-4 mb-0">Ou</p>
            </div>

            <!-- Email input -->
            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email"
                v-model="email"
              />
            </div>

            <!-- Password input -->
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Senha"
                v-model="password"
              />
            </div>

            <div class="flex justify-between items-center mb-6">
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label class="form-check-label inline-block" for="exampleCheck2"
                  >Lembrar-me</label
                >
              </div>
              <a href="#!">Esqueceu sua senha?</a>
            </div>

            <div class="text-center lg:text-left">
              <button
                type="button"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click.prevent="authUser"
              >
                Login
              </button>
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                Não tem conta?
                <a
                  href="#!"
                  class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Registrar</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import FacebookIcon from '../icons/FacebookIcon.vue'
import GoogleIcon from '../icons/GoogleIcon.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const loggedIn = computed<boolean>(() => store.state.auth.status.loggedIn)

onMounted(() => {
  if (loggedIn.value) {
    router.push('/')
  }
})

const loading = ref<boolean>(false)
const message = ref<string>('')

const store = useStore()
const router = useRouter()

let email = ref<string>(''),
  password = ref<string>('')

const authUser = async () => {
  try {
    const login = await store.dispatch('auth/login', {
      email: email.value,
      password: password.value,
    })
    if (login == 'ok') await router.push('/')
    else {
      //TO DO message error
    }
  } catch (error: any) {
    loading.value = false
    message.value =
      error?.response?.data?.message || error.message || error.toString()
  }
}
</script>
<style scoped></style>
