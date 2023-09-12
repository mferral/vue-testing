// pnpm run test run posts/00_posts
import { fireEvent, render, screen, waitFor, within } from '@testing-library/vue'
import Posts from '@/views/Posts.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
import { debug, log } from 'console'
// import { useAuthStore } from "@/store/auth";

describe('Login', () => {
    it('Should have been a table element', async () => {
        render(Posts, {
            global: {
                plugins: [Quasar, createTestingPinia({ stubActions: false })],
            },
        })

        const row = within(screen.getAllByRole("row")[1]).getByText('Frozen Yogurt')

        expect(row).not.toBeNull

        const btns = screen.getAllByRole("button")
        await fireEvent.click(btns[btns.length - 1])

        const row_ = within(screen.getAllByRole("row")[1]).getByText('Jelly bean')

        expect(row_).not.toBeNull
        screen.debug(row_)
        // screen.debug(screen.getAllByRole("button"))


    })
})
