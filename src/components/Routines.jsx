import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllRoutines } from "../api";

const Routines = ({ allRoutines }) => {
  console.log(allRoutines, "!!!!!!!!!!!!!");
  return (
    <div>
      <h1>Routines</h1>

      {allRoutines.length
        ? allRoutines.map((e) => {
            return (
              <div className="routine-container" key={`routines${e.id}`}>
                {e.activities.length
                  ? e.activities.map((a) => {
                      return (
                        <p key={`activity-id${a.id}`}>{`Workout ${a.name}`}</p>
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

export default Routines;

// If not logged in show all public routines
