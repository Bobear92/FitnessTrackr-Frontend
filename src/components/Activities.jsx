import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Activities } from "../api";

const Activities = ({ allActivities }) => {
  return (
    <div>
      <h1>Activities</h1>

      {allActivities.length
        ? allActivities.map((e) => {
            return (
              <div className="activity-container" key={`activities${e.id}`}>
                {e.activities.length
                  ? e.activities.map((a) => {
                      return (
                        <p key={`activities-id${a.id}`}>{`Workouts ${a.name}`}</p>
                      );
                    })
                  : null}
                <p>{e.name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;

// If not logged in show all public activities
