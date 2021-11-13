// ___            ___
// /   \          /   \
// \_   \        /  __/
//  _\   \      /  /__
//  \___  \____/   __/
//      \_       _/
//        | @ @  \_
//        |
//      _/     /\
//     /o)  (o/\ \_
//     \_____/ /
//       \____/

import React, { useState, useEffect } from "react";

const Activities = ({ allActivities }) => {
  return (
    <div>
      <h1>Activities</h1>

      {allActivities.length
        ? allActivities.map((e) => {
            return (
              <div className="activity-container" key={`activities${e.id}`}>
                <p>{e.name}</p>
                <p>{e.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;

// If not logged in show all public activities
