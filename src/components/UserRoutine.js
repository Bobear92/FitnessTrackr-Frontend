import React, { useState, useEffect } from "react";
import { deleteRoutine } from "../api";
import { getUser } from "../auth";
import { Buttons } from ".";

const UserRoutine = ({ allUserRoutines, allActivities }) => {
  const user = getUser();

  const [update, setUpdate] = useState(false);

  return (
    <>
      <h1 className="user-routine-header">User: {user}'s Routines</h1>
      <div className="user-routine-main-container">
        {allUserRoutines && allUserRoutines.length
          ? allUserRoutines.map((e) => {
              return (
                <div
                  key={`User-routines${e.id}`}
                  className="user-routine-single-container"
                >
                  <div className="user-routine-container">
                    <p>{e.name}</p>
                    <p>By {e.creatorName}</p>
                    <p>Routine Goal</p>
                    <p>{e.goal}</p>
                  </div>
                  {e.activities && e.activities.length
                    ? e.activities.map((a) => {
                        return (
                          <div
                            className="user-routine_activity-container"
                            key={`user-activity-id${a.id}`}
                          >
                            <p>Routine Activity</p>
                            <p>{a.name}</p>
                            <p>Routine Description</p>
                            <p>{a.description}</p>
                            <p>Routine Info</p>
                            <p>
                              Count: {a.count} and Duration:
                              {a.duration}
                            </p>
                          </div>
                        );
                      })
                    : null}
                  <div className="user-routine-buttons">
                    <Buttons
                      id={e.id}
                      setUpdate={setUpdate}
                      update={update}
                      allActivities={allActivities}
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default UserRoutine;
