import React, { useState, useEffect } from "react";

import { deleteRoutine } from "../api";
import { UpdateForm } from ".";

const Buttons = ({ id, setUpdate, update, allActivities }) => {
  const [activity, setActivity] = useState("");
  return (
    <>
      <button
        className="deleteRoutine-button"
        onClick={async (event) => {
          event.preventDefault();

          try {
            await deleteRoutine(id);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Delete
      </button>

      <button onClick={() => setUpdate(true)}>Update Routine</button>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
        }}
      >
        <label>
          Add an activity to a routine:
          <select>
            {allActivities.map((activity) => {
              <option value={activity.name}>{activity.name}</option>;
            })}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

      {update ? <UpdateForm id={id} /> : null}
    </>
  );
};

export default Buttons;
