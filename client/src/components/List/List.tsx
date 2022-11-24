import React from "react";
import { socket } from "../../constants/api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loadUsers } from "../../redux/reducers/usersSlice";
import "./list.scss";

const List = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);

  React.useEffect(() => {
    socket.on("update_user_list", (users) => {
      dispatch(loadUsers(users));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

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
