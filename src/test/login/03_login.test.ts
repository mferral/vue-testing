// pnpm run test run login - t "Test 1.3"
// pnpm run test run login/03_login
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import Login from '@/views/Login.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
import { useAuthStore } from "@/store/auth"

describe('Login Pinia Store', () => {

    const changeProp = async (store: any, obj: any) => {
        store.$patch(obj)
    }

    it('Enabled button test', async () => {
        render(Login, {
            global: {
                plugins: [Quasar, createTestingPinia()],
            },
        })
        const store = useAuthStore()
        const button = screen.getByRole("button", { name: /Sign in/i })
        const identifier = screen.getByRole("textbox", { name: /email/i })
        const password = screen.getByRole("textbox", { name: /password/i })
        await fireEvent.update(identifier, 'mferral@outlook.com')
        await fireEvent.update(password, 'supersecret')

        expect(button).toHaveProperty('disabled', false)
        await changeProp(store, { loading: true })
        expect(button).toHaveProperty('disabled', true)
    })
})

