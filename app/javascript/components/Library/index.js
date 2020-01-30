import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SimpleCard from "../Layout/SimpleCard"

const LibraryQuery = gql`
  {
    items {
      id
      title
      user {
        fullName
      }
    }
  }
`;


export default () => (
  <div>
    <Query query={LibraryQuery}>
      {({ data, loading }) => (
        <div>
          {loading
            ? 'loading...'
            : data.items.map((item) => (
                <SimpleCard
                  key={item.id}
                  item={item}
                />
              ))}
        </div>
      )}
    </Query>
  </div>
);
