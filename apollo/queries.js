import gql from 'graphql-tag'
import client from './client'
export const RANDOM_ROKE = gql`{
    random{
        id
        value
    }
}`
