const scoringChart = [
  {
    ageRange: [18, 24],
    gender: 'M',
    run: {
      thresholds: [
        552, 574, 585, 598, 610, 623, 637, 651, 666, 682, 698, 716, 734, 753,
        773, 794, 816, 840, 864, 892, 920, 950,
      ],
      points: [
        60.0, 59.5, 59, 58.5, 58, 57.5, 57, 56.5, 56, 55.5, 55.0, 54.5, 54.0,
        53.5, 52, 50.5, 49.0, 46.5, 44, 41, 38, 35,
      ],
      minimum: 35,
    },
    hamr: {
      thresholds: [
        100, 94, 92, 88, 86, 83, 80, 77, 74, 71, 68, 65, 62, 59, 56, 54, 51, 48,
        45, 42, 39, 36,
      ],
      points: [
        60.0, 59.5, 59, 58.5, 58, 57.5, 57, 56.5, 56, 55.5, 55.0, 54.5, 54.0,
        53.5, 52, 50.5, 49.0, 46.5, 44, 41, 38, 35,
      ],
      minimum: 36,
    },
  },
];

const hamrLevelsShuttles = {
  1: 7,
  2: 15,
  3: 23,
  4: 32,
  5: 41,
  6: 50,
  7: 60,
  8: 70,
  9: 81,
  10: 92,
  11: 104,
  12: 116,
  13: 129,
  14: 142,
  15: 155,
};

// Export this function to be used in the calculator component
export const calculateRunPoints = (
  minutes: number,
  seconds: number,
  age: number | string,
  gender: string,
) => {
  const totalSeconds = minutes * 60 + seconds;
  let ageNumeric = typeof age === 'number' ? age : parseInt(age, 10);

  // Find the corresponding entry in the scoring chart
  const entry = scoringChart.find(
    entry =>
      entry.ageRange[0] <= ageNumeric &&
      ageNumeric <= entry.ageRange[1] &&
      entry.gender === gender,
  );

  if (entry) {
    for (let i = 0; i < entry.run.thresholds.length; i++) {
      if (totalSeconds <= entry.run.thresholds[i]) {
        return entry.run.points[i];
      }
    }
  }

  return 0;
};

export const calculateHamrPoints = (
  level: number,
  shuttle: number,
  age: number | string,
  gender: string,
) => {
  let ageNumeric = typeof age === 'number' ? age : parseInt(age, 10);
  let hamrPoints = calculateHAMRPoints(level, shuttle);

  // Find the corresponding entry in the scoring chart
  const entry = scoringChart.find(
    entry =>
      entry.ageRange[0] <= ageNumeric &&
      ageNumeric <= entry.ageRange[1] &&
      entry.gender === gender,
  );

  if (entry) {
    for (let i = 0; i < entry.hamr.thresholds.length; i++) {
      if (hamrPoints >= entry.hamr.thresholds[i]) {
        return entry.hamr.points[i];
      }
    }
  }

  return 0;
};

export function calculateRunMinimum(age: number | string, gender: string) {
  let ageNumeric = typeof age === 'number' ? age : parseInt(age, 10);

  // Find the corresponding entry in the scoring chart
  const entry = scoringChart.find(
    entry =>
      entry.ageRange[0] <= ageNumeric &&
      ageNumeric <= entry.ageRange[1] &&
      entry.gender === gender,
  );

  if (!entry) return [0, 0];
}

/**
 * Calculates the HAMR points based on the level and shuttle
 * @param level
 * @param shuttle
 * @returns {number} points
 */
export function calculateHAMRPoints(level: number, shuttle: number): number {
  // By calculating points of previous levels and adding the current level's shuttle
  // we get the total points
  return hamrLevelsShuttles[level - 1] + shuttle;
}

/**
 * Calculates the HAMR level and shuttle based on the minimum points
 * @param minimumPoints
 * @returns
 */
export function calculateHAMRMinimum(age: number | string, gender: string) {
  let ageNumeric = typeof age === 'number' ? age : parseInt(age, 10);

  // Find the corresponding entry in the scoring chart
  const entry = scoringChart.find(
    entry =>
      entry.ageRange[0] <= ageNumeric &&
      ageNumeric <= entry.ageRange[1] &&
      entry.gender === gender,
  );

  if (!entry) return [0, 0];

  let level = 1;
  let minimumShuttles = entry.hamr.thresholds[entry.hamr.thresholds.length - 1];
  while (hamrLevelsShuttles[level] < minimumShuttles) {
    level++;
  }
  if (hamrLevelsShuttles[level] === minimumShuttles) {
    return [level + 1, 1];
  } else {
    return [level, minimumShuttles - hamrLevelsShuttles[level - 1]];
  }
}

/**
 * Calculates the maximum shuttle for a given level
 * @param level
 * @returns
 */
export function maxShuttlePerLevel(level: number) {
  if (level === 1) return hamrLevelsShuttles[level];
  return hamrLevelsShuttles[level] - hamrLevelsShuttles[level - 1];
}
