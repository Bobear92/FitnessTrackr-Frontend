import React, { useState } from "react";

import { deleteActivity } from "../api";
import { UpdateActivityForm } from ".";

const ActivityButtons = ({ id }) => {
  const [updateActivity, setUpdateActivity] = useState(false);

  return (
    <>
      <button onClick={() => setUpdateActivity(true)}>Update Activity</button>
      {updateActivity ? <UpdateActivityForm id={id} /> : null}

      <button
        className="deleteActivity-button"
        onClick={async (event) => {
          event.preventDefault();

          try {
            await deleteActivity(id);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Delete Activity
      </button>
    </>
  );
};
export default ActivityButtons;
