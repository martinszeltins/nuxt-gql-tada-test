<template>
    <div>Hello gql.tada</div>
</template>

<script setup lang="ts">
    import { graphql } from 'gql.tada'

    /**
     * gql.tada is working here in Vue app! ヽ(•‿•)ノ
     * but it is not working inside server api routes  (-_-)
     */
    graphql(`
        fragment UserFields on User {
            company {
                name
                catchPhrase
            }
        }
    `)
</script>
