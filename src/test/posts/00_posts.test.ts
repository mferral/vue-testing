// pnpm run test run posts/00_posts
import { fireEvent, render, screen, within } from '@testing-library/vue'
import Posts from '@/views/Posts.vue'
import { Quasar } from 'quasar'
import { createTestingPinia } from '@pinia/testing'
import { updateStore } from '@/test/store'
import { postsStore } from '@/store/posts'

const obj = {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
}

const name_headers = ['Dessert', 'Calories', 'Fat', 'Carbs', 'Protein', 'Sodium', 'Calcium', 'Iron', 'Actions']

describe('My posts', () => {
    it('Should have been a table element', async () => {
        render(Posts, {
            global: {
                plugins: [Quasar, createTestingPinia()],
            },
        })
        const store = postsStore()

        const table = screen.getByTestId("table-posts")
        const headers = within(table).getAllByRole('columnheader')

        // screen.debug(within(table).getByText('Sin datos'))
        // console.log(headers[0].textContent)
        // console.log(Object.values(obj))

        // check name headers 
        headers.forEach((header, i) => expect(header.textContent).contain(name_headers[i]))
        // Load data
        await updateStore(store, { rows: [obj] })
        // Get rows and cols
        const rows = within(table).getAllByRole('row')
        const cols = within(rows[1]).getAllByRole('cell')
        const values = Object.values(obj)
        // exists data in table 
        expect(rows.length).toBeGreaterThan(0)
        // check row values
        values.forEach((val, i) => expect(cols[i].textContent).contain(val))

        // const row = within(screen.getAllByRole("row")[1]).getByText('Frozen Yogurt')
        // expect(row).not.toBeNull
        // const btns = screen.getAllByRole("button")
        // await fireEvent.click(btns[btns.length - 1])
        // const row_ = within(screen.getAllByRole("row")[1]).getByText('Jelly bean')\
        // expect(row_).not.toBeNull
        // screen.debug(row_)
        // screen.debug(screen.getAllByRole("button"))

    })
    it('Should have been a table element with data', async () => {
        render(Posts, {
            global: {
                plugins: [Quasar, createTestingPinia()],
            },
        })
        const store = postsStore()
        const table = screen.getByTestId("table-posts")
        const headers = within(table).getAllByRole('columnheader')

        expect(within(table).getByText('Sin datos')).exist
        // check name headers 
        headers.forEach((header, i) => expect(header.textContent).contain(name_headers[i]))
        // Load data
        await updateStore(store, { loading: true })
        expect(within(table).getByRole('progressbar')).exist
        await updateStore(store, { rows: [obj] })
        await updateStore(store, { loading: false })
        expect(within(table).queryByRole('progressbar')).toBeNull
        // Get rows and cols
        const rows = within(table).getAllByRole('row')
        const cols = within(rows[1]).getAllByRole('cell')
        const values = Object.values(obj)
        // exists data in table 
        expect(rows.length).toBeGreaterThan(0)
        // check row values
        values.forEach((val, i) => expect(cols[i].textContent).contain(val))

    })
})
