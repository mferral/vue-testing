// pnpm run test run login - t "login"
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import Login from '@/views/Login.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
// import { useAuthStore } from "@/store/auth";

describe('login', () => {
    beforeEach(() => { })

    it('test 1.1', async () => {
        const { debug } = render(Login, {
            global: {
                plugins: [
                    Quasar,
                    createTestingPinia({
                        createSpy: vi.fn,
                        // initialState: {
                        //     auth: { loading: true, }
                        // },
                    })
                ],
            },
        })

        const button = screen.getByRole("button", { name: /Sign in/i })
        const identifier = screen.getByRole("textbox", { name: /email/i })
        const password = screen.getByRole("textbox", { name: /password/i })
        await fireEvent.update(identifier, 'mferral@outlook.com')
        await fireEvent.update(password, 'supersecret')

        await fireEvent.click(button)

        expect(button).toHaveProperty('disabled', false)

        await waitFor(async () => {
            expect(button).toHaveProperty('disabled', true)
            // expect(store.loading).toBeFalsy()

        }, { timeout: 3000 })
        // const load = screen.getByRole("loading")
        // const identifier = screen.getByRole("textbox", { name: /email/i })
        // expect(button).toHaveProperty('disabled', false)
        // expect(button).toHaveProperty('disabled', false)
        // await new Promise(resolve => setTimeout(resolve, 2500))

        debug()
    })
})

