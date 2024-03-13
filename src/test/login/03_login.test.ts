// pnpm run test run login - t "Test 1.3"
// pnpm run test run login/03_login
import { render, screen, fireEvent } from '@testing-library/vue'

import Login from '@/views/Login.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
import { useAuthStore } from "@/store/auth"
import { updateStore } from '@/test/store'

describe('Login Pinia Store', () => {
    it('Enabled button test', async () => {
        render(Login, {
            global: {
                plugins: [Quasar, createTestingPinia()],
            },
        })
        const store = useAuthStore()
        const button = screen.getByRole("button", { name: /Sign in/i })
        const email = screen.getByRole("textbox", { name: /email/i })
        const password = screen.getByRole("textbox", { name: /password/i })
        await fireEvent.update(email, 'mferral@outlook.com')
        await fireEvent.update(password, 'supersecret')

        expect(button).toHaveProperty('disabled', false)
        await updateStore(store, { loading: true })
        expect(button).toHaveProperty('disabled', true)
    })
    it('Valitate texts test', async () => {
        const { container } = render(Login, {
            global: {
                plugins: [Quasar, createTestingPinia()],
            },
        })
        const button = screen.getByRole("button", { name: /Sign in/i })        
        await fireEvent.click(button)
        const email_error = container.querySelector("#email-error")
        const password_error = container.querySelector("#password-error")        
        // expect(slot?.textContent).toContain('Please use maximum 3 characters.')
        
        expect(email_error).exist
        expect(password_error).exist
        // When not existe
        // expect(slot).toBeNull 
    })
})

