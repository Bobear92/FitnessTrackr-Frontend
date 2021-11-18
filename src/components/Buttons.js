import React, { useState, useEffect } from "react";

import { deleteRoutine } from "../api";
import { AddActivityForm, UpdateForm } from ".";

const Buttons = ({ id, allActivities }) => {
  const [update, setUpdate] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const [activityId, setActivityId] = useState(0);
  const [error, setError] = useState("");
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
      {update ? <UpdateForm id={id} /> : null}

      <form
        id="addActivityToRoutine"
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("submit");
          setAddActivity(true);
        }}
      >
        <label>
          Add an activity to a routine:
          <select
            onChange={(event) => {
              // console.log(event.target.value, "!!!!!!!!!!");
              setActivityId(event.target.value);
            }}
          >
            {allActivities.map((activity) => {
              // console.log(activity, "activity");

              return (
                <option
                  key={`allActivities id in button: ${activity.id}`}
                  value={activity.id}
                >
                  {activity.name}
                </option>
              );
            })}
          </select>
        </label>
        <input type="submit" value="Select Activity" />
      </form>
      {addActivity ? <AddActivityForm id={id} activityId={activityId} /> : null}

      {error && <p>{error.response.data.message}</p>}
    </>
  );
};

export default Buttons;
