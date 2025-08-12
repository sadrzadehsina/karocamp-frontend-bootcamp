# 🎯 چالش متوسط مرحله ۸-۰۱: سیستم مدیریت وظایف مدرن (مرحله ۸ - جاوااسکریپت مدرن)

## 📝 توضیحات

یک اپلیکیشن مدیریت وظایف با استفاده از ویژگی‌های پیشرفته ES6+ مانند destructuring پیچیده، spread پیشرفته، optional chaining و الگوهای مدرن بسازید.

## 🎯 اهداف

- تسلط بر destructuring پیچیده
- استفاده از تکنیک‌های پیشرفته spread
- پیاده‌سازی optional chaining قوی
- تمرین الگوهای مدرن جاوااسکریپت
- ساختاردهی کد حرفه‌ای

## 📋 الزامات

۱. ساختار داده پیچیده:

   ```javascript
   const taskData = {
     projects: [
       {
         id: 1,
         name: 'بازطراحی وبسایت',
         team: {
           lead: { name: 'آلیس', email: 'alice@company.com' },
           members: [
             { name: 'باب', role: 'برنامه‌نویس', skills: ['React', 'Node.js'] },
             { name: 'کارول', role: 'طراح', skills: ['Figma', 'Photoshop'] }
           ]
         },
         tasks: [
           {
             id: 101,
             title: 'ایجاد وایرفریم',
             status: 'completed',
             assignee: 'کارول',
             priority: 'high',
             deadlines: { start: '2024-01-01', end: '2024-01-15' },
             dependencies: [],
             comments: [
               { author: 'آلیس', text: 'عالیه!', timestamp: '2024-01-10' }
             ]
           }
         ]
       }
     ],
     settings: {
       notifications: { email: true, push: false },
       preferences: { theme: 'dark', language: 'fa' },
       filters: { status: 'all', priority: 'all' }
     }
   };
   ```

۲. قابلیت‌های پیشرفته:
   - استخراج و تبدیل داده پیچیده
   - به‌روزرسانی تو در تو با حفظ immutability
   - فیلتر و مرتب‌سازی پیشرفته
   - تجمیع و گزارش‌گیری داده
   - مدیریت وضعیت با الگوهای مدرن

## 💡 نمونه پیاده‌سازی پیشرفته

```javascript
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
    const [firstTask, secondTask, ...remainingTasks] = tasks;
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
      teamSize: members.length + 1,
      taskStats,
      upcomingDeadlines: extractUpcomingDeadlines(tasks)
    };
  });
  return { reportData, theme, filters: { statusFilter, priorityFilter } };
}

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

## 🚀 ویژگی‌های پیشرفته مورد انتظار

۱. **تبدیل داده پیچیده**:
   - destructuring چندسطحی با تغییر نام
   - destructuring شرطی با مقدار پیش‌فرض
   - destructuring آرایه با rest
   - ترکیب destructuring آبجکت و آرایه

۲. **به‌روزرسانی وضعیت immutably**:
   - به‌روزرسانی عمیق آبجکت با spread
   - به‌روزرسانی آرایه با حفظ ترتیب
   - spread شرطی پراپرتی
   - ترکیب آرایه/آبجکت تو در تو

۳. **دسترسی ایمن به پراپرتی**:
   - optional chaining برای تو در تو
   - nullish coalescing برای مقدار پیش‌فرض
   - short-circuit evaluation
   - استخراج داده ایمن

## ✅ سینتکس پیشرفته مورد انتظار

- destructuring پیچیده: `const { team: { lead: { name: leadName } } } = project`
- destructuring پارامتر: `function update({ id, ...updates })`
- destructuring آرایه با rest: `const [first, ...rest] = items`
- spread شرطی: `{ ...base, ...(condition && extraProps) }`
- optional chaining: `data?.projects?.[0]?.tasks?.length`
- nullish coalescing: `value ?? defaultValue`
- پراپرتی داینامیک: `{ [dynamicKey]: value }`

## 🌟 نکته تکمیلی

- پیاده‌سازی الگوی custom hooks با closure
- مدیریت وضعیت با Proxy
- استفاده از WeakMap برای داده خصوصی
- پیاده‌سازی observable pattern
- افزودن JSDoc برای تجربه بهتر توسعه‌دهنده
