export default defineNuxtConfig({
    devtools: { enabled: true },

    // gql.tada
    typescript: {
        tsConfig: {
            compilerOptions: {
                plugins: [{
                    "name": "@0no-co/graphqlsp",
                    "schema": "https://graphqlzero.almansi.me/api",
                    "tadaOutputLocation": "../graphql-env.d.ts"
                }]
            }
        }
    }
})
