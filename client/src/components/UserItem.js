import React from 'react';
// import { Card } from 'react-bootstrap';

const UserItem = (props) => {

  const {username, age} = props;
  return (
    <body className="user">
      <tbody>
        <tr className="user__details">
          <td>
            <strong>Username:</strong> {username}
          </td>
          <td>
            <strong>Age:</strong> {age}
          </td>
        </tr>
      </tbody>
    </body>
  );
};

export default UserItem;