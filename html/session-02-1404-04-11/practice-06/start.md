<!-- markdownlint-disable -->

# Practice 06: Build a Job Application Portal with Advanced Forms

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Creating multi-page form applications with data persistence
- Advanced form validation techniques and user feedback
- Working with complex form layouts and organization
- Implementing conditional form fields and dynamic interactions
- Building professional application forms with proper UX
- Understanding form accessibility and inclusive design principles

## 📋 Exercise Description

Create a comprehensive job application portal that includes job listings, detailed application forms, candidate profiles, and employer dashboards. This advanced exercise combines all HTML form elements in a realistic professional context.

## 🔧 Requirements

Your job application portal should include:

1. **Main Job Portal (index.html)**
   - Job search form with filters
   - Featured job listings
   - Quick application form
   - User login/registration options

2. **Detailed Job Application (application.html)**
   - Personal information form
   - Professional experience section
   - Education background form
   - Skills assessment with ratings
   - Cover letter and additional documents

3. **Candidate Profile (profile.html)**
   - Profile creation and editing form
   - Resume builder with multiple sections
   - Preference settings for job alerts
   - Portfolio and work samples upload

4. **Employer Dashboard (employer.html)**
   - Job posting form
   - Application review interface
   - Candidate filtering and search
   - Interview scheduling form

5. **Survey and Feedback (survey.html)**
   - User experience survey
   - Application process feedback
   - System improvement suggestions
   - Anonymous feedback option

## 🔧 Technical Requirements

### File Structure:
```
job-portal/
├── index.html
├── application.html
├── profile.html
├── employer.html
├── survey.html
├── styles/
│   └── portal-styles.css
└── scripts/
    └── form-interactions.js (placeholder)
```

### Advanced HTML Elements to Use:
- All form input types including newer HTML5 types
- Complex fieldset and legend structures
- Form validation with custom error messages
- Accessible form labels and descriptions
- Progressive disclosure with conditional fields
- Multiple file upload capabilities

## 📝 Step-by-Step Instructions

1. **Create Main Job Portal with Search**
   
   **Job Search and Filter Form:**
   ```html
   <form action="#" method="get" id="job-search">
     <fieldset>
       <legend>Find Your Dream Job</legend>
       
       <div class="search-row">
         <div>
           <label for="job-title">Job Title or Keywords:</label>
           <input type="search" id="job-title" name="jobTitle" 
                  placeholder="e.g., Software Developer, Marketing Manager">
         </div>
         
         <div>
           <label for="location">Location:</label>
           <input type="text" id="location" name="location" 
                  placeholder="City, State, or Remote">
         </div>
         
         <div>
           <button type="submit">Search Jobs</button>
         </div>
       </div>
       
       <details>
         <summary>Advanced Filters</summary>
         
         <div class="filter-section">
           <div>
             <label for="job-type">Employment Type:</label>
             <select id="job-type" name="jobType" multiple size="4">
               <option value="full-time">Full-time</option>
               <option value="part-time">Part-time</option>
               <option value="contract">Contract</option>
               <option value="freelance">Freelance</option>
               <option value="internship">Internship</option>
             </select>
           </div>
           
           <div>
             <label for="salary-min">Minimum Salary:</label>
             <input type="number" id="salary-min" name="salaryMin" 
                    min="0" max="500000" step="5000" placeholder="$50,000">
           </div>
           
           <div>
             <label for="experience-level">Experience Level:</label>
             <select id="experience-level" name="experienceLevel">
               <option value="">Any Level</option>
               <option value="entry">Entry Level (0-2 years)</option>
               <option value="mid">Mid Level (2-5 years)</option>
               <option value="senior">Senior Level (5-10 years)</option>
               <option value="executive">Executive (10+ years)</option>
             </select>
           </div>
           
           <div>
             <label for="remote-work">Remote Work Options:</label>
             <div>
               <input type="checkbox" id="remote-ok" name="remoteOptions" value="remote">
               <label for="remote-ok">Remote OK</label>
             </div>
             <div>
               <input type="checkbox" id="hybrid-ok" name="remoteOptions" value="hybrid">
               <label for="hybrid-ok">Hybrid Options</label>
             </div>
           </div>
         </div>
       </details>
     </fieldset>
   </form>
   
   <section>
     <h3>Quick Apply</h3>
     <form action="#" method="post">
       <div>
         <label for="quick-email">Email Address:</label>
         <input type="email" id="quick-email" name="email" required>
       </div>
       
       <div>
         <label for="quick-resume">Upload Resume:</label>
         <input type="file" id="quick-resume" name="resume" 
                accept=".pdf,.doc,.docx" required>
       </div>
       
       <div>
         <label for="target-position">Target Position:</label>
         <input type="text" id="target-position" name="targetPosition" required>
       </div>
       
       <div>
         <button type="submit">Quick Apply</button>
       </div>
     </form>
   </section>
   ```

2. **Build Comprehensive Job Application Form**
   
   ```html
   <form action="#" method="post" enctype="multipart/form-data">
     <fieldset>
       <legend>Personal Information</legend>
       
       <div class="form-row">
         <div>
           <label for="first-name">First Name:</label>
           <input type="text" id="first-name" name="firstName" required>
         </div>
         
         <div>
           <label for="last-name">Last Name:</label>
           <input type="text" id="last-name" name="lastName" required>
         </div>
       </div>
       
       <div class="form-row">
         <div>
           <label for="email">Email Address:</label>
           <input type="email" id="email" name="email" required>
         </div>
         
         <div>
           <label for="phone">Phone Number:</label>
           <input type="tel" id="phone" name="phone" required>
         </div>
       </div>
       
       <div>
         <label for="address">Address:</label>
         <textarea id="address" name="address" rows="3" cols="50" required></textarea>
       </div>
       
       <div class="form-row">
         <div>
           <label for="city">City:</label>
           <input type="text" id="city" name="city" required>
         </div>
         
         <div>
           <label for="state">State/Province:</label>
           <input type="text" id="state" name="state" required>
         </div>
         
         <div>
           <label for="zip">ZIP/Postal Code:</label>
           <input type="text" id="zip" name="zipCode" required>
         </div>
       </div>
       
       <div>
         <label for="date-of-birth">Date of Birth:</label>
         <input type="date" id="date-of-birth" name="dateOfBirth">
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Professional Experience</legend>
       
       <div id="experience-container">
         <div class="experience-entry">
           <h4>Current/Most Recent Position</h4>
           
           <div class="form-row">
             <div>
               <label for="job-title-1">Job Title:</label>
               <input type="text" id="job-title-1" name="jobTitle1" required>
             </div>
             
             <div>
               <label for="company-1">Company Name:</label>
               <input type="text" id="company-1" name="company1" required>
             </div>
           </div>
           
           <div class="form-row">
             <div>
               <label for="start-date-1">Start Date:</label>
               <input type="month" id="start-date-1" name="startDate1" required>
             </div>
             
             <div>
               <label for="end-date-1">End Date:</label>
               <input type="month" id="end-date-1" name="endDate1">
               <label>
                 <input type="checkbox" name="currentJob1" value="yes"> Current Job
               </label>
             </div>
           </div>
           
           <div>
             <label for="responsibilities-1">Key Responsibilities:</label>
             <textarea id="responsibilities-1" name="responsibilities1" 
                       rows="4" cols="50" required></textarea>
           </div>
           
           <div>
             <label for="salary-1">Salary Range:</label>
             <select id="salary-1" name="salary1">
               <option value="">Prefer not to say</option>
               <option value="30k-40k">$30,000 - $40,000</option>
               <option value="40k-50k">$40,000 - $50,000</option>
               <option value="50k-60k">$50,000 - $60,000</option>
               <option value="60k-80k">$60,000 - $80,000</option>
               <option value="80k-100k">$80,000 - $100,000</option>
               <option value="100k+">$100,000+</option>
             </select>
           </div>
         </div>
       </div>
       
       <button type="button" id="add-experience">Add Another Position</button>
     </fieldset>
     
     <fieldset>
       <legend>Education Background</legend>
       
       <div>
         <label for="education-level">Highest Education Level:</label>
         <select id="education-level" name="educationLevel" required>
           <option value="">Select education level...</option>
           <option value="high-school">High School Diploma</option>
           <option value="associate">Associate Degree</option>
           <option value="bachelor">Bachelor's Degree</option>
           <option value="master">Master's Degree</option>
           <option value="doctorate">Doctorate/PhD</option>
           <option value="other">Other</option>
         </select>
       </div>
       
       <div class="form-row">
         <div>
           <label for="school-name">School/University Name:</label>
           <input type="text" id="school-name" name="schoolName" required>
         </div>
         
         <div>
           <label for="graduation-year">Graduation Year:</label>
           <input type="number" id="graduation-year" name="graduationYear" 
                  min="1950" max="2030">
         </div>
       </div>
       
       <div>
         <label for="field-of-study">Field of Study:</label>
         <input type="text" id="field-of-study" name="fieldOfStudy">
       </div>
       
       <div>
         <label for="gpa">GPA (Optional):</label>
         <input type="number" id="gpa" name="gpa" min="0" max="4" step="0.01">
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Skills Assessment</legend>
       
       <div class="skills-section">
         <h4>Technical Skills</h4>
         
         <div class="skill-item">
           <label for="programming">Programming Languages:</label>
           <div>
             <input type="checkbox" id="javascript" name="skills" value="javascript">
             <label for="javascript">JavaScript</label>
           </div>
           <div>
             <input type="checkbox" id="python" name="skills" value="python">
             <label for="python">Python</label>
           </div>
           <div>
             <input type="checkbox" id="java" name="skills" value="java">
             <label for="java">Java</label>
           </div>
           <div>
             <input type="checkbox" id="csharp" name="skills" value="csharp">
             <label for="csharp">C#</label>
           </div>
         </div>
         
         <div class="skill-rating">
           <label for="communication">Communication Skills (1-10):</label>
           <input type="range" id="communication" name="communicationSkill" 
                  min="1" max="10" value="5">
           <output for="communication">5</output>
         </div>
         
         <div class="skill-rating">
           <label for="leadership">Leadership Experience (1-10):</label>
           <input type="range" id="leadership" name="leadershipSkill" 
                  min="1" max="10" value="5">
           <output for="leadership">5</output>
         </div>
         
         <div class="skill-rating">
           <label for="problem-solving">Problem Solving (1-10):</label>
           <input type="range" id="problem-solving" name="problemSolvingSkill" 
                  min="1" max="10" value="5">
           <output for="problem-solving">5</output>
         </div>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Additional Information</legend>
       
       <div>
         <label for="cover-letter">Cover Letter:</label>
         <textarea id="cover-letter" name="coverLetter" rows="8" cols="50" 
                   placeholder="Tell us why you're the perfect fit for this position..."></textarea>
       </div>
       
       <div>
         <label for="portfolio">Portfolio Website:</label>
         <input type="url" id="portfolio" name="portfolioUrl" 
                placeholder="https://yourportfolio.com">
       </div>
       
       <div>
         <label for="linkedin">LinkedIn Profile:</label>
         <input type="url" id="linkedin" name="linkedinUrl" 
                placeholder="https://linkedin.com/in/yourprofile">
       </div>
       
       <div>
         <label for="resume-upload">Upload Resume:</label>
         <input type="file" id="resume-upload" name="resumeFile" 
                accept=".pdf,.doc,.docx" required>
       </div>
       
       <div>
         <label for="references">References Available:</label>
         <div>
           <input type="radio" id="references-yes" name="referencesAvailable" value="yes">
           <label for="references-yes">Yes, upon request</label>
         </div>
         <div>
           <input type="radio" id="references-no" name="referencesAvailable" value="no">
           <label for="references-no">No</label>
         </div>
         <div>
           <input type="radio" id="references-attached" name="referencesAvailable" value="attached">
           <label for="references-attached">Attached with application</label>
         </div>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Work Preferences</legend>
       
       <div>
         <label for="availability">Available Start Date:</label>
         <input type="date" id="availability" name="availableStartDate" required>
       </div>
       
       <div>
         <label for="salary-expectation">Salary Expectation:</label>
         <input type="number" id="salary-expectation" name="salaryExpectation" 
                min="0" step="1000" placeholder="Annual salary expectation">
       </div>
       
       <div>
         <label for="work-location">Preferred Work Location:</label>
         <div>
           <input type="radio" id="onsite" name="workLocation" value="onsite">
           <label for="onsite">On-site</label>
         </div>
         <div>
           <input type="radio" id="remote" name="workLocation" value="remote">
           <label for="remote">Remote</label>
         </div>
         <div>
           <input type="radio" id="hybrid" name="workLocation" value="hybrid">
           <label for="hybrid">Hybrid</label>
         </div>
         <div>
           <input type="radio" id="flexible" name="workLocation" value="flexible">
           <label for="flexible">Flexible</label>
         </div>
       </div>
       
       <div>
         <label for="travel-willingness">Willingness to Travel:</label>
         <select id="travel-willingness" name="travelWillingness">
           <option value="none">No travel</option>
           <option value="minimal">Minimal (less than 10%)</option>
           <option value="moderate">Moderate (10-25%)</option>
           <option value="frequent">Frequent (25-50%)</option>
           <option value="extensive">Extensive (more than 50%)</option>
         </select>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Legal and Compliance</legend>
       
       <div>
         <label for="work-authorization">Work Authorization:</label>
         <div>
           <input type="radio" id="citizen" name="workAuth" value="citizen" required>
           <label for="citizen">U.S. Citizen</label>
         </div>
         <div>
           <input type="radio" id="permanent-resident" name="workAuth" value="permanent">
           <label for="permanent-resident">Permanent Resident</label>
         </div>
         <div>
           <input type="radio" id="visa-holder" name="workAuth" value="visa">
           <label for="visa-holder">Visa Holder</label>
         </div>
         <div>
           <input type="radio" id="need-sponsorship" name="workAuth" value="sponsorship">
           <label for="need-sponsorship">Need Sponsorship</label>
         </div>
       </div>
       
       <div>
         <input type="checkbox" id="background-check" name="backgroundCheck" value="agreed" required>
         <label for="background-check">I consent to a background check</label>
       </div>
       
       <div>
         <input type="checkbox" id="drug-test" name="drugTest" value="agreed">
         <label for="drug-test">I consent to drug testing if required</label>
       </div>
       
       <div>
         <input type="checkbox" id="terms-agreement" name="termsAgreement" value="agreed" required>
         <label for="terms-agreement">I agree to the terms and conditions</label>
       </div>
     </fieldset>
     
     <div class="form-actions">
       <button type="submit">Submit Application</button>
       <button type="button">Save as Draft</button>
       <button type="reset">Clear Form</button>
     </div>
   </form>
   ```

3. **Create Survey and Feedback Form**
   
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>Application Experience Survey</legend>
       
       <div>
         <label for="overall-experience">Overall Application Experience:</label>
         <select id="overall-experience" name="overallExperience" required>
           <option value="">Rate your experience...</option>
           <option value="excellent">Excellent</option>
           <option value="very-good">Very Good</option>
           <option value="good">Good</option>
           <option value="fair">Fair</option>
           <option value="poor">Poor</option>
         </select>
       </div>
       
       <div>
         <label for="ease-of-use">How easy was it to complete the application?</label>
         <div>
           <input type="radio" id="very-easy" name="easeOfUse" value="very-easy">
           <label for="very-easy">Very Easy</label>
         </div>
         <div>
           <input type="radio" id="easy" name="easeOfUse" value="easy">
           <label for="easy">Easy</label>
         </div>
         <div>
           <input type="radio" id="neutral" name="easeOfUse" value="neutral">
           <label for="neutral">Neutral</label>
         </div>
         <div>
           <input type="radio" id="difficult" name="easeOfUse" value="difficult">
           <label for="difficult">Difficult</label>
         </div>
         <div>
           <input type="radio" id="very-difficult" name="easeOfUse" value="very-difficult">
           <label for="very-difficult">Very Difficult</label>
         </div>
       </div>
       
       <div>
         <label for="time-to-complete">Time to Complete Application:</label>
         <select id="time-to-complete" name="timeToComplete">
           <option value="under-15">Under 15 minutes</option>
           <option value="15-30">15-30 minutes</option>
           <option value="30-45">30-45 minutes</option>
           <option value="45-60">45-60 minutes</option>
           <option value="over-60">Over 1 hour</option>
         </select>
       </div>
       
       <div>
         <label for="improvements">What could we improve?</label>
         <div>
           <input type="checkbox" id="improve-layout" name="improvements" value="layout">
           <label for="improve-layout">Page layout and design</label>
         </div>
         <div>
           <input type="checkbox" id="improve-instructions" name="improvements" value="instructions">
           <label for="improve-instructions">Instructions clarity</label>
         </div>
         <div>
           <input type="checkbox" id="improve-speed" name="improvements" value="speed">
           <label for="improve-speed">Page loading speed</label>
         </div>
         <div>
           <input type="checkbox" id="improve-mobile" name="improvements" value="mobile">
           <label for="improve-mobile">Mobile experience</label>
         </div>
         <div>
           <input type="checkbox" id="improve-validation" name="improvements" value="validation">
           <label for="improve-validation">Form validation</label>
         </div>
       </div>
       
       <div>
         <label for="additional-comments">Additional Comments:</label>
         <textarea id="additional-comments" name="additionalComments" 
                   rows="5" cols="50" 
                   placeholder="Please share any additional feedback..."></textarea>
       </div>
       
       <div>
         <input type="checkbox" id="anonymous-feedback" name="anonymousFeedback" value="yes">
         <label for="anonymous-feedback">Submit feedback anonymously</label>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">Submit Feedback</button>
     </div>
   </form>
   ```

## 💡 Pro Tips

- Use progressive disclosure to manage complex forms
- Implement real-time validation feedback
- Group related fields logically with fieldsets
- Provide clear progress indicators for multi-step forms
- Use appropriate input types for better mobile experience
- Include helpful placeholder text and instructions
- Test forms thoroughly for accessibility compliance

## 🚀 Bonus Challenges

1. **Add Form Analytics**
   - Track completion rates for different sections
   - Identify where users drop off
   - Measure time spent on each section

2. **Implement Auto-Save**
   - Save form progress automatically
   - Allow users to return to incomplete applications
   - Provide session timeout warnings

3. **Create Dynamic Form Fields**
   - Add/remove experience entries dynamically
   - Show/hide fields based on selections
   - Implement conditional validation

4. **Build Advanced File Handling**
   - Multiple file uploads with preview
   - File type and size validation
   - Drag-and-drop file upload interface

## ✅ Completion Checklist

- [ ] Created comprehensive job search form
- [ ] Built detailed multi-section application form
- [ ] Implemented candidate profile creation
- [ ] Added employer dashboard functionality
- [ ] Created user experience survey
- [ ] Used all major HTML form elements
- [ ] Implemented proper form validation
- [ ] Added accessibility features throughout
- [ ] Created logical form organization
- [ ] Tested forms across different devices
- [ ] Included file upload capabilities
- [ ] Added proper form labels and descriptions
- [ ] Implemented progressive disclosure patterns

This advanced exercise provides comprehensive experience with professional-level HTML forms while building a realistic job application system!
