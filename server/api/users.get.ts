import { graphql } from 'gql.tada'

export default defineEventHandler(() => {
    /**
     * gql.tada is not working here in server API route 
     * but it works in app.vue ¯\_(ツ)_/¯
     */
    graphql(`
        fragment UserFields on User {
            company {
                name
                catchPhrase
            }
        }
    `)

    return 'Hello, world! API is working!'
})
