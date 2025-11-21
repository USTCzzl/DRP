// LTL Formulas for Comparison Experiment (Scenario1-12)
const comparisonLTL = {
  1: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['deliver_light', 'grasp'] },
      { name: 'task_3', type: 'SCAN', formula: 'F(task_3_completed)', required_caps: ['aerial_photo'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed)'
  },
  2: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['deliver_light', 'grasp'] },
      { name: 'task_3', type: 'SCAN', formula: 'F(task_3_completed)', required_caps: ['aerial_photo'] },
      { name: 'task_4', type: 'PATROL', formula: 'F(task_4_completed)', required_caps: ['navigate_ground'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed)'
  },
  3: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['deliver_light', 'grasp'] },
      { name: 'task_3', type: 'SCAN', formula: 'F(task_3_completed)', required_caps: ['aerial_photo'] },
      { name: 'task_4', type: 'PATROL', formula: 'F(task_4_completed)', required_caps: ['navigate_ground'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed)'
  },
  4: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['deliver_light', 'grasp'] },
      { name: 'task_3', type: 'SCAN', formula: 'F(task_3_completed)', required_caps: ['aerial_photo'] },
      { name: 'task_4', type: 'PATROL', formula: 'F(task_4_completed)', required_caps: ['navigate_ground'] },
      { name: 'task_5', type: 'MONITOR', formula: 'F(task_5_completed)', required_caps: ['scan'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed)'
  },
  5: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['deliver_light', 'grasp'] },
      { name: 'task_3', type: 'SCAN', formula: 'F(task_3_completed)', required_caps: ['aerial_photo'] },
      { name: 'task_4', type: 'PATROL', formula: 'F(task_4_completed)', required_caps: ['navigate_ground'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed)'
  },
  6: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['deliver_light', 'grasp'] },
      { name: 'task_3', type: 'SCAN', formula: 'F(task_3_completed)', required_caps: ['aerial_photo'] },
      { name: 'task_4', type: 'PATROL', formula: 'F(task_4_completed)', required_caps: ['navigate_ground'] },
      { name: 'task_5', type: 'MONITOR', formula: 'F(task_5_completed)', required_caps: ['scan'] },
      { name: 'task_6', type: 'DELIVER', formula: 'F(task_6_completed)', required_caps: ['deliver_light'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed)'
  },
  7: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['grasp'] },
      { name: 'task_3', type: 'REPAIR', formula: 'F(task_3_completed)', required_caps: ['drill'] },
      { name: 'task_4', type: 'MONITOR', formula: 'F(task_4_completed)', required_caps: ['communicate'] },
      { name: 'task_5', type: 'REPAIR', formula: 'F(task_5_completed)', required_caps: ['repair'] },
      { name: 'task_6', type: 'REPAIR', formula: 'F(task_6_completed)', required_caps: ['unlock_door'] },
      { name: 'task_7', type: 'REPAIR', formula: 'F(task_7_completed)', required_caps: ['precise_manipulation'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed) ∧ F(task_7_completed)'
  },
  8: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['grasp'] },
      { name: 'task_3', type: 'REPAIR', formula: 'F(task_3_completed)', required_caps: ['drill'] },
      { name: 'task_4', type: 'MONITOR', formula: 'F(task_4_completed)', required_caps: ['communicate'] },
      { name: 'task_5', type: 'REPAIR', formula: 'F(task_5_completed)', required_caps: ['repair'] },
      { name: 'task_6', type: 'REPAIR', formula: 'F(task_6_completed)', required_caps: ['unlock_door'] },
      { name: 'task_7', type: 'REPAIR', formula: 'F(task_7_completed)', required_caps: ['precise_manipulation'] },
      { name: 'task_8', type: 'MONITOR', formula: 'F(task_8_completed)', required_caps: ['signal_relay'] },
      { name: 'task_9', type: 'REPAIR', formula: 'F(task_9_completed)', required_caps: ['clear_debris'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed) ∧ F(task_7_completed) ∧ F(task_8_completed) ∧ F(task_9_completed)'
  },
  9: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['grasp'] },
      { name: 'task_3', type: 'REPAIR', formula: 'F(task_3_completed)', required_caps: ['drill'] },
      { name: 'task_4', type: 'MONITOR', formula: 'F(task_4_completed)', required_caps: ['communicate'] },
      { name: 'task_5', type: 'REPAIR', formula: 'F(task_5_completed)', required_caps: ['repair'] },
      { name: 'task_6', type: 'REPAIR', formula: 'F(task_6_completed)', required_caps: ['unlock_door'] },
      { name: 'task_7', type: 'REPAIR', formula: 'F(task_7_completed)', required_caps: ['precise_manipulation'] },
      { name: 'task_8', type: 'MONITOR', formula: 'F(task_8_completed)', required_caps: ['signal_relay'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed) ∧ F(task_7_completed) ∧ F(task_8_completed)'
  },
  10: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['grasp'] },
      { name: 'task_3', type: 'REPAIR', formula: 'F(task_3_completed)', required_caps: ['drill'] },
      { name: 'task_4', type: 'MONITOR', formula: 'F(task_4_completed)', required_caps: ['communicate'] },
      { name: 'task_5', type: 'REPAIR', formula: 'F(task_5_completed)', required_caps: ['repair'] },
      { name: 'task_6', type: 'REPAIR', formula: 'F(task_6_completed)', required_caps: ['unlock_door'] },
      { name: 'task_7', type: 'REPAIR', formula: 'F(task_7_completed)', required_caps: ['precise_manipulation'] },
      { name: 'task_8', type: 'MONITOR', formula: 'F(task_8_completed)', required_caps: ['signal_relay'] },
      { name: 'task_9', type: 'REPAIR', formula: 'F(task_9_completed)', required_caps: ['clear_debris'] },
      { name: 'task_10', type: 'SCAN', formula: 'F(task_10_completed)', required_caps: ['aerial_photo'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed) ∧ F(task_7_completed) ∧ F(task_8_completed) ∧ F(task_9_completed) ∧ F(task_10_completed)'
  },
  11: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['grasp'] },
      { name: 'task_3', type: 'REPAIR', formula: 'F(task_3_completed)', required_caps: ['drill'] },
      { name: 'task_4', type: 'MONITOR', formula: 'F(task_4_completed)', required_caps: ['communicate'] },
      { name: 'task_5', type: 'REPAIR', formula: 'F(task_5_completed)', required_caps: ['repair'] },
      { name: 'task_6', type: 'REPAIR', formula: 'F(task_6_completed)', required_caps: ['unlock_door'] },
      { name: 'task_7', type: 'REPAIR', formula: 'F(task_7_completed)', required_caps: ['precise_manipulation'] },
      { name: 'task_8', type: 'MONITOR', formula: 'F(task_8_completed)', required_caps: ['signal_relay'] },
      { name: 'task_9', type: 'REPAIR', formula: 'F(task_9_completed)', required_caps: ['clear_debris'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed) ∧ F(task_7_completed) ∧ F(task_8_completed) ∧ F(task_9_completed)'
  },
  12: {
    tasks: [
      { name: 'task_1', type: 'SCAN', formula: 'F(task_1_completed)', required_caps: ['scan'] },
      { name: 'task_2', type: 'DELIVER', formula: 'F(task_2_completed)', required_caps: ['grasp'] },
      { name: 'task_3', type: 'REPAIR', formula: 'F(task_3_completed)', required_caps: ['drill'] },
      { name: 'task_4', type: 'MONITOR', formula: 'F(task_4_completed)', required_caps: ['communicate'] },
      { name: 'task_5', type: 'REPAIR', formula: 'F(task_5_completed)', required_caps: ['repair'] },
      { name: 'task_6', type: 'REPAIR', formula: 'F(task_6_completed)', required_caps: ['unlock_door'] },
      { name: 'task_7', type: 'REPAIR', formula: 'F(task_7_completed)', required_caps: ['precise_manipulation'] },
      { name: 'task_8', type: 'MONITOR', formula: 'F(task_8_completed)', required_caps: ['signal_relay'] },
      { name: 'task_9', type: 'REPAIR', formula: 'F(task_9_completed)', required_caps: ['clear_debris'] },
      { name: 'task_10', type: 'SCAN', formula: 'F(task_10_completed)', required_caps: ['aerial_photo'] },
      { name: 'task_11', type: 'SCAN', formula: 'F(task_11_completed)', required_caps: ['scan'] },
    ],
    combined: 'F(task_1_completed) ∧ F(task_2_completed) ∧ F(task_3_completed) ∧ F(task_4_completed) ∧ F(task_5_completed) ∧ F(task_6_completed) ∧ F(task_7_completed) ∧ F(task_8_completed) ∧ F(task_9_completed) ∧ F(task_10_completed) ∧ F(task_11_completed)'
  },
};


// Scenario Details:

// Scenario1 (nature_simple_simple):
// Environment: 40×40, Obstacles: 133 cells
// Robots: 2 (UAV, UGV)
// Tasks: 3
//   Task 1: task_1 (scan) @ (12, 22)
//   Task 2: task_2 (deliver) @ (15, 15)
//   Task 3: task_3 (scan) @ (31, 29)

// Scenario2 (nature_simple_medium):
// Environment: 40×40, Obstacles: 189 cells
// Robots: 2 (UAV, UGV)
// Tasks: 4
//   Task 1: task_1 (scan) @ (15, 15)
//   Task 2: task_2 (deliver) @ (31, 29)
//   Task 3: task_3 (scan) @ (27, 5)
//   Task 4: task_4 (patrol) @ (26, 30), depends on: ['task_3']

// Scenario3 (nature_medium_simple):
// Environment: 50×50, Obstacles: 345 cells
// Robots: 2 (UAV, UGV)
// Tasks: 4
//   Task 1: task_1 (scan) @ (29, 11)
//   Task 2: task_2 (deliver) @ (27, 5)
//   Task 3: task_3 (scan) @ (44, 5)
//   Task 4: task_4 (patrol) @ (41, 35), depends on: ['task_3']

// Scenario4 (nature_medium_medium):
// Environment: 50×50, Obstacles: 413 cells
// Robots: 2 (UAV, UGV)
// Tasks: 5
//   Task 1: task_1 (scan) @ (27, 5)
//   Task 2: task_2 (deliver) @ (44, 5)
//   Task 3: task_3 (scan) @ (41, 35)
//   Task 4: task_4 (patrol) @ (18, 8), depends on: ['task_3']
//   Task 5: task_5 (monitor) @ (22, 12)

// Scenario5 (nature_complex_simple):
// Environment: 60×60, Obstacles: 682 cells
// Robots: 2 (UAV, UGV)
// Tasks: 4
//   Task 1: task_1 (scan) @ (44, 5)
//   Task 2: task_2 (deliver) @ (41, 35)
//   Task 3: task_3 (scan) @ (18, 54)
//   Task 4: task_4 (patrol) @ (39, 21), depends on: ['task_3']

// Scenario6 (nature_complex_medium):
// Environment: 60×60, Obstacles: 868 cells
// Robots: 2 (UAV, UGV)
// Tasks: 6
//   Task 1: task_1 (scan) @ (41, 35)
//   Task 2: task_2 (deliver) @ (18, 54)
//   Task 3: task_3 (scan) @ (39, 21)
//   Task 4: task_4 (patrol) @ (37, 10), depends on: ['task_3']
//   Task 5: task_5 (monitor) @ (22, 35)
//   Task 6: task_6 (deliver) @ (38, 17)

// Scenario7 (nature_simple_complex):
// Environment: 40×40, Obstacles: 139 cells
// Robots: 2 (UAV, UGV)
// Tasks: 7
//   Task 1: task_1 (scan) @ (33, 32) → rewards communicate
//   Task 2: task_2 (deliver) @ (24, 14) → rewards drill, depends on: ['task_1']
//   Task 3: task_3 (repair) @ (21, 30) → rewards repair, depends on: ['task_2']
//   Task 4: task_4 (monitor) @ (12, 10) → rewards unlock_door, depends on: ['task_3']
//   Task 5: task_5 (repair) @ (26, 31) → rewards precise_manipulation, depends on: ['task_4']
//   Task 6: task_6 (repair) @ (21, 26) → rewards signal_relay, depends on: ['task_5']
//   Task 7: task_7 (repair) @ (24, 28) → rewards clear_debris, depends on: ['task_6']

// Scenario8 (nature_simple_verylong):
// Environment: 40×40, Obstacles: 172 cells
// Robots: 2 (UAV, UGV)
// Tasks: 9
//   Task 1: task_1 (scan) @ (24, 14) → rewards communicate
//   Task 2: task_2 (deliver) @ (21, 30) → rewards drill, depends on: ['task_1']
//   Task 3: task_3 (repair) @ (12, 10) → rewards repair, depends on: ['task_2']
//   Task 4: task_4 (monitor) @ (18, 32) → rewards unlock_door, depends on: ['task_3']
//   Task 5: task_5 (repair) @ (21, 26) → rewards precise_manipulation, depends on: ['task_4']
//   Task 6: task_6 (repair) @ (24, 28) → rewards signal_relay, depends on: ['task_5']
//   Task 7: task_7 (repair) @ (27, 23) → rewards clear_debris, depends on: ['task_6']
//   Task 8: task_8 (monitor) @ (8, 11), depends on: ['task_7']
//   Task 9: task_9 (repair) @ (27, 31), depends on: ['task_8']

// Scenario9 (nature_medium_complex):
// Environment: 50×50, Obstacles: 367 cells
// Robots: 2 (UAV, UGV)
// Tasks: 8
//   Task 1: task_1 (scan) @ (41, 24) → rewards communicate
//   Task 2: task_2 (deliver) @ (12, 10) → rewards drill, depends on: ['task_1']
//   Task 3: task_3 (repair) @ (26, 18) → rewards repair, depends on: ['task_2']
//   Task 4: task_4 (monitor) @ (44, 34) → rewards unlock_door, depends on: ['task_3']
//   Task 5: task_5 (repair) @ (24, 7) → rewards precise_manipulation, depends on: ['task_4']
//   Task 6: task_6 (repair) @ (31, 12) → rewards signal_relay, depends on: ['task_5']
//   Task 7: task_7 (repair) @ (40, 11) → rewards clear_debris, depends on: ['task_6']
//   Task 8: task_8 (monitor) @ (16, 24), depends on: ['task_7']

// Scenario10 (nature_medium_verylong):
// Environment: 50×50, Obstacles: 397 cells
// Robots: 2 (UAV, UGV)
// Tasks: 10
//   Task 1: task_1 (scan) @ (12, 10) → rewards communicate
//   Task 2: task_2 (deliver) @ (26, 18) → rewards drill, depends on: ['task_1']
//   Task 3: task_3 (repair) @ (44, 34) → rewards repair, depends on: ['task_2']
//   Task 4: task_4 (monitor) @ (24, 7) → rewards unlock_door, depends on: ['task_3']
//   Task 5: task_5 (repair) @ (31, 12) → rewards precise_manipulation, depends on: ['task_4']
//   Task 6: task_6 (repair) @ (40, 11) → rewards signal_relay, depends on: ['task_5']
//   Task 7: task_7 (repair) @ (16, 24) → rewards clear_debris, depends on: ['task_6']
//   Task 8: task_8 (monitor) @ (5, 29), depends on: ['task_7']
//   Task 9: task_9 (repair) @ (40, 26), depends on: ['task_8']
//   Task 10: task_10 (scan) @ (8, 25), depends on: ['task_9']

// Scenario11 (nature_complex_complex):
// Environment: 60×60, Obstacles: 716 cells
// Robots: 2 (UAV, UGV)
// Tasks: 9
//   Task 1: task_1 (scan) @ (26, 18) → rewards communicate
//   Task 2: task_2 (deliver) @ (53, 44) → rewards drill, depends on: ['task_1']
//   Task 3: task_3 (repair) @ (24, 50) → rewards repair, depends on: ['task_2']
//   Task 4: task_4 (monitor) @ (12, 28) → rewards unlock_door, depends on: ['task_3']
//   Task 5: task_5 (repair) @ (24, 39) → rewards precise_manipulation, depends on: ['task_4']
//   Task 6: task_6 (repair) @ (16, 24) → rewards signal_relay, depends on: ['task_5']
//   Task 7: task_7 (repair) @ (5, 29) → rewards clear_debris, depends on: ['task_6']
//   Task 8: task_8 (monitor) @ (34, 9), depends on: ['task_7']
//   Task 9: task_9 (repair) @ (8, 25), depends on: ['task_8']

// Scenario12 (nature_complex_verylong):
// Environment: 60×60, Obstacles: 826 cells
// Robots: 2 (UAV, UGV)
// Tasks: 11
//   Task 1: task_1 (scan) @ (53, 44) → rewards communicate
//   Task 2: task_2 (deliver) @ (24, 50) → rewards drill, depends on: ['task_1']
//   Task 3: task_3 (repair) @ (40, 31) → rewards repair, depends on: ['task_2']
//   Task 4: task_4 (monitor) @ (40, 11) → rewards unlock_door, depends on: ['task_3']
//   Task 5: task_5 (repair) @ (16, 24) → rewards precise_manipulation, depends on: ['task_4']
//   Task 6: task_6 (repair) @ (50, 31) → rewards signal_relay, depends on: ['task_5']
//   Task 7: task_7 (repair) @ (51, 42) → rewards clear_debris, depends on: ['task_6']
//   Task 8: task_8 (monitor) @ (8, 25), depends on: ['task_7']
//   Task 9: task_9 (repair) @ (43, 36), depends on: ['task_8']
//   Task 10: task_10 (scan) @ (8, 43), depends on: ['task_9']
//   Task 11: task_11 (scan) @ (25, 50) → rewards communicate, depends on: ['task_10']
