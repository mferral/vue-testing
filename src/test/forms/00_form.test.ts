// pnpm run test run form/00_form
import { render, screen, fireEvent } from '@testing-library/vue'
import { Quasar } from 'quasar'
import Post from '@/views/Post.vue'


describe('Quasar Form', () => {
    it('Valitate form', async () => {
        const { container } = render(Post, {
            global: {
                plugins: [Quasar],
            },
        })

        const button = screen.getByRole("button", { name: /Guardar/i })
        await fireEvent.click(button)

        const row_text_alert = screen.getByTestId('row-text-1').querySelector('[role="alert"]')
        const group_toggles = screen.getByTestId('group-toggles').querySelector('[role="alert"]')

        expect(row_text_alert).exist
        expect(group_toggles).exist
        // When not existe
        // expect(slot).toBeNull 
    })
})

