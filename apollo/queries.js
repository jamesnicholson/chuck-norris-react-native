import gql from 'graphql-tag'

 const RANDOM_JOKE = gql`
 query randomJoke{
       random{
           id
           value
       }
   }`
export default RANDOM_JOKE