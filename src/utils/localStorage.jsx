const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 3,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare project report",
        description: "Compile and submit the quarterly project report",
        date: "2025-08-30",
        category: "Work",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client meeting",
        description: "Discuss project requirements with client",
        date: "2025-08-20",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix server bug",
        description: "Resolve issue with authentication on server",
        date: "2025-08-22",
        category: "Urgent",
      },
    ],
  },
  {
    id: 2,
    firstname: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design homepage",
        description: "Create a responsive homepage layout",
        date: "2025-09-01",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit timesheet",
        description: "Fill and send weekly timesheet",
        date: "2025-08-25",
        category: "Admin",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team brainstorming",
        description: "Plan Q4 product roadmap with team",
        date: "2025-09-02",
        category: "Meetings",
      },
    ],
  },
  {
    id: 3,
    firstname: "Kabir",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop login feature",
        description: "Implement OAuth login for users",
        date: "2025-09-03",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug fixes",
        description: "Fix UI alignment issues",
        date: "2025-08-26",
        category: "Bugfix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data migration",
        description: "Migrate data to new database schema",
        date: "2025-08-21",
        category: "Database",
      },
       {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data migration",
        description: "Migrate data to new database schema",
        date: "2025-08-21",
        category: "Database",
      },
    ],
  },
  {
    id: 4,
    firstname: "Advait",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Write unit tests",
        description: "Add unit tests for API endpoints",
        date: "2025-08-31",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update documentation",
        description: "Document setup process for new devs",
        date: "2025-08-19",
        category: "Docs",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Refactor code",
        description: "Improve readability of service layer",
        date: "2025-09-04",
        category: "Development",
      },
    ],
  },
  {
    id: 5,
    firstname: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare training material",
        description: "Create slides for team workshop",
        date: "2025-09-05",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "System backup",
        description: "Perform weekly system backup",
        date: "2025-08-23",
        category: "Admin",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy app",
        description: "Deploy application to production server",
        date: "2025-08-24",
        category: "Deployment",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
   
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
