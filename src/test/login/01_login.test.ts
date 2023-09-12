// pnpm run test run login - t "login"
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import Login from '@/views/Login.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
import { useAuthStore } from "@/store/auth";

describe('login', () => {
    it('test 1', async () => {

        render(Login, {
            global: {
                plugins: [
                    Quasar,
                    createTestingPinia({ stubActions: false })
                    // createTestingPinia({ stubActions: false })
                    // createTestingPinia({
                    //     createSpy: vitest.fn,
                    //     initialState: {
                    //         auth: { loading: true, }
                    //     },
                    // })                    
                ],
            },
        })

        // const button = screen.getByText('Sign in.')
        // const button = screen.getByRole("button", { name: /btn-signin/i })
        // const button = screen.getByText('Sign up').closest('button')
        const store = useAuthStore()
        const button = screen.getByRole("button", { name: /Sign in/i })
        // const load = screen.getByRole("loading")
        const identifier = screen.getByRole("textbox", { name: /email/i })
        const password = screen.getByRole("textbox", { name: /password/i })

        await fireEvent.update(identifier, 'mferral@outlook.com')

        await fireEvent.update(password, 'supersecret')

        // console.log(password);
        expect(button).toHaveProperty('disabled', false)

        // await fireEvent.click(button)

        // expect(button).toHaveProperty('disabled', true)

        // await new Promise(resolve => setTimeout(resolve, 3500))
        // fireEvent.click(button)        
        await fireEvent.click(button)
        console.log(store.loading);

        expect(button).toHaveProperty('disabled', true)

        await waitFor(async () => {
            // expect(button).toHaveProperty('disabled', false)
            expect(store.loading).toBeFalsy()

        }, { timeout: 3000 })

        console.log(store.loading);
        expect(localStorage.getItem("token")).not.toBeNull()

        expect(screen.getByText("Sign in below to access your account")).not.toBeNull()

        // expect(store.loading).toBeTruthy()
        // await expect(button).toHaveProperty('disabled', false)
        // console.log(localStorage.getItem("token"));
        // console.log(button.textContent);
        // const password = screen.getByRole("textbox", { name: /password/i })        
        // await expect(button).toHaveProperty('name', 'btn-signin')
        // expect(button).toHaveProperty('disabled', true)
        // console.log(button);
    })
})

