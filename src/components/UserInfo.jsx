import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NewActivity, NewRoutine, UserRoutine } from ".";

const UserInfo = ({
  allActivities,
  setAllActivities,
  allRoutines,
  setAllRoutines,
  allUserRoutines,
}) => {
  return (
    <div>
      <h1>User Stuff</h1>

      <NewActivity
        allActivities={allActivities}
        setAllActivities={setAllActivities}
      />
      <NewRoutine allRoutines={allRoutines} setAllRoutines={setAllRoutines} />

      <UserRoutine
        allUserRoutines={allUserRoutines}
        allActivities={allActivities}
      />
    </div>
  );
};

export default UserInfo;

// if logged in show all your routines which you can update along with a form to create a new routine and delete routines

// if logged in show all your activities which you can update along with a form to create a new activity and delete activities
