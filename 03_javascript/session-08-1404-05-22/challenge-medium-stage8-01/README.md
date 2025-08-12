# 🎯 Challenge Medium Stage 8-01: Modern Task Management System (Stage 8 - ES6+ Modern JavaScript)

## 📝 Description

Build a comprehensive task management application that showcases advanced ES6+ features including complex destructuring, advanced spread patterns, optional chaining, and modern JavaScript design patterns.

## 🎯 Objectives

- Master complex destructuring patterns
- Use advanced spread operator techniques
- Implement robust optional chaining
- Practice modern JavaScript patterns
- Create production-ready code structure

## 📋 Requirements

1. Complex data structure:

   ```javascript
   const taskData = {
     projects: [
       {
         id: 1,
         name: 'Website Redesign',
         team: {
           lead: { name: 'Alice', email: 'alice@company.com' },
           members: [
             { name: 'Bob', role: 'developer', skills: ['React', 'Node.js'] },
             { name: 'Carol', role: 'designer', skills: ['Figma', 'Photoshop'] }
           ]
         },
         tasks: [
           {
             id: 101,
             title: 'Create wireframes',
             status: 'completed',
             assignee: 'Carol',
             priority: 'high',
             deadlines: { start: '2024-01-01', end: '2024-01-15' },
             dependencies: [],
             comments: [
               { author: 'Alice', text: 'Looks great!', timestamp: '2024-01-10' }
             ]
           }
         ]
       }
     ],
     settings: {
       notifications: { email: true, push: false },
       preferences: { theme: 'dark', language: 'en' },
       filters: { status: 'all', priority: 'all' }
     }
   };
   ```

2. Advanced functionality:
   - Complex data extraction and transformation
   - Nested object updates with immutability
   - Advanced filtering and sorting
   - Data aggregation and reporting
   - State management with modern patterns

## 💡 Advanced Implementation Examples

```javascript
// Complex destructuring with renaming and defaults
function generateProjectReport({
  projects = [],
  settings: {
    preferences: { theme = 'light' } = {},
    filters: { status: statusFilter = 'all', priority: priorityFilter = 'all' } = {}
  } = {}
} = {}) {
  
  const reportData = projects.map(({
    id: projectId,
    name: projectName,
    team: { lead: { name: leadName } = {}, members = [] } = {},
    tasks = []
  }) => {
    
    // Advanced array destructuring with rest
    const [firstTask, secondTask, ...remainingTasks] = tasks;
    
    // Complex calculations with optional chaining
    const taskStats = {
      total: tasks.length,
      completed: tasks.filter(({ status }) => status === 'completed').length,
      overdue: tasks.filter(({ deadlines: { end } = {} }) => 
        end && new Date(end) < new Date()
      ).length,
      highPriority: tasks.filter(({ priority }) => priority === 'high').length
    };
    
    return {
      projectId,
      projectName,
      leadName,
      teamSize: members.length + 1, // +1 for lead
      taskStats,
      upcomingDeadlines: extractUpcomingDeadlines(tasks)
    };
  });
  
  return { reportData, theme, filters: { statusFilter, priorityFilter } };
}

// Advanced spread patterns for deep updates
function updateTaskInProject(taskData, projectId, taskId, updates) {
  return {
    ...taskData,
    projects: taskData.projects.map(project => 
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.map(task =>
              task.id === taskId
                ? {
                    ...task,
                    ...updates,
                    // Merge nested objects carefully
                    deadlines: {
                      ...task.deadlines,
                      ...updates.deadlines
                    },
                    comments: updates.comments 
                      ? [...(task.comments || []), ...updates.comments]
                      : task.comments
                  }
                : task
            )
          }
        : project
    )
  };
}

// Advanced array methods with destructuring
function analyzeTeamWorkload(projects) {
  const workloadAnalysis = projects.flatMap(({ 
    name: projectName, 
    team: { members = [] } = {},
    tasks = []
  }) => 
    members.map(({ name: memberName, role, skills = [] }) => {
      const assignedTasks = tasks.filter(({ assignee }) => assignee === memberName);
      const { completed = 0, pending = 0, overdue = 0 } = assignedTasks.reduce(
        (acc, { status, deadlines: { end } = {} }) => {
          const category = status === 'completed' 
            ? 'completed'
            : (end && new Date(end) < new Date()) 
              ? 'overdue' 
              : 'pending';
          
          return { ...acc, [category]: acc[category] + 1 };
        },
        { completed: 0, pending: 0, overdue: 0 }
      );
      
      return {
        memberName,
        role,
        skillCount: skills.length,
        projectName,
        workload: { completed, pending, overdue },
        efficiency: completed / (completed + pending + overdue) || 0
      };
    })
  );
  
  return workloadAnalysis;
}

// Optional chaining with complex nested access
function getTaskDetails(taskData, projectId, taskId) {
  const project = taskData.projects?.find(p => p.id === projectId);
  const task = project?.tasks?.find(t => t.id === taskId);
  
  if (!task) return null;
  
  const assigneeDetails = project?.team?.members?.find(
    member => member.name === task.assignee
  ) || project?.team?.lead;
  
  return {
    taskInfo: {
      title: task.title,
      status: task.status,
      priority: task.priority,
      isOverdue: task.deadlines?.end && new Date(task.deadlines.end) < new Date()
    },
    assigneeInfo: {
      name: assigneeDetails?.name,
      role: assigneeDetails?.role,
      email: assigneeDetails?.email,
      skills: assigneeDetails?.skills || []
    },
    projectInfo: {
      name: project.name,
      leadName: project.team?.lead?.name
    },
    collaboration: {
      commentCount: task.comments?.length || 0,
      lastComment: task.comments?.[task.comments.length - 1]?.text,
      dependencyCount: task.dependencies?.length || 0
    }
  };
}
```

## 🚀 Expected Advanced Features

1. **Complex Data Transformation**:
   - Multi-level destructuring with renaming
   - Conditional destructuring with defaults
   - Array destructuring with rest patterns
   - Mixed object/array destructuring

2. **Immutable State Updates**:
   - Deep object updates with spread
   - Array updates preserving order
   - Conditional property spreading
   - Nested array/object combinations

3. **Safe Property Access**:
   - Optional chaining for deep nesting
   - Nullish coalescing for defaults
   - Short-circuit evaluation patterns
   - Error-safe data extraction

## ✅ Expected Advanced Syntax Usage

- Complex destructuring: `const { team: { lead: { name: leadName } } } = project`
- Parameter destructuring: `function update({ id, ...updates })`
- Array destructuring with rest: `const [first, ...rest] = items`
- Conditional spreading: `{ ...base, ...(condition && extraProps) }`
- Optional chaining: `data?.projects?.[0]?.tasks?.length`
- Nullish coalescing: `value ?? defaultValue`
- Dynamic property names: `{ [dynamicKey]: value }`

## 🌟 Bonus

- Implement custom hooks pattern with closures
- Add proxy-based state management
- Use WeakMap for private data
- Implement observable pattern with modern syntax
- Add TypeScript-style JSDoc for better developer experience
