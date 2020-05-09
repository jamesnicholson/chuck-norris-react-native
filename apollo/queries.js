import gql from 'graphql-tag'
 const RANDOM_JOKE = gql`
    query {
        random{
            id
            value
    }
 }`
export default RANDOM_JOKE