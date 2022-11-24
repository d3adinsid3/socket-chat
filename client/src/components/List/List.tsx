import React from "react";
import { useAppSelector } from "../../hooks/redux";
import "./list.scss";

const List = () => {
  const users = useAppSelector((state) => state.users.list);

  React.useEffect(() => {}, [users]);

  return (
    <div className="list">
      <div className="list__title">List online:</div>

      {users.length
        ? users.map((user) => {
            return (
              <div className="list__item" key={user.id}>
                {user.nickname}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default List;
