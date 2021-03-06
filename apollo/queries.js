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
export const GET_JOKE_BY_CATEGORY = gql`
  query getTheJoke($category: String!) {
    getJoke(category: $category) {
      id
      icon_url
      value
    }
  }
`
export const SEARCH_FOR_JOKES = gql`
query searchJokes($searchTerm: String!) {
    search(searchTerm: $searchTerm){
      total
      result{
          id
          value
      }
  }
}
`



export default RANDOM_JOKE