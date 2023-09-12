// pnpm run test run login - t "login"
// pnpm run test run login/00_login
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import Login from '@/views/Login.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
import { useAuthStore } from "@/store/auth";

describe('Login', () => {
    it('Should have been toket not null', async () => {
        render(Login, {
            global: {
                plugins: [Quasar, createTestingPinia({ stubActions: false })],
            },
        })
        const store = useAuthStore()
        const button = screen.getByRole("button", { name: /Sign in/i })
        const identifier = screen.getByRole("textbox", { name: /email/i })
        const password = screen.getByRole("textbox", { name: /password/i })

        await fireEvent.update(identifier, 'mferral@outlook.com')
        await fireEvent.update(password, 'supersecret')

        expect(button).toHaveProperty('disabled', false)

        await fireEvent.click(button)
        expect(button).toHaveProperty('disabled', true)

        await waitFor(async () => {
            expect(button).toHaveProperty('disabled', false)
            expect(store.loading).toBeFalsy()
            expect(localStorage.getItem("token")).not.toBeNull()
        }, { timeout: 3000 })
    })
})

