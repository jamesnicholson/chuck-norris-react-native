import gql from 'graphql-tag'
 const RANDOM_JOKE = gql`
    query {
        random{
            id
            value
    }
 }`
export const GET_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`


export default RANDOM_JOKE