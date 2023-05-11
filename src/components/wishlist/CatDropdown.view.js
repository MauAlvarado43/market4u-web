import { useQuery, gql } from '@apollo/client';
import React from "react";

const GET_CATEGORIES = gql`
  {
    categories {
      id
      name
    }
  }
`;

function CategoryDropdown() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          Todos los productos
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {data.categories.map(category => (
            <button key={category.id} className="dropdown-item" type="button">{category.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDropdown;
