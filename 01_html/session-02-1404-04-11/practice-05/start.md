<!-- markdownlint-disable -->

# Practice 05: Create a Comprehensive Event Registration Form

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- How to create and structure HTML forms (`<form>`)
- Working with various input types and their specific attributes
- Using labels properly for form accessibility
- Creating dropdown menus and select options
- Building textarea elements for longer text input
- Understanding form validation and user experience
- Organizing complex forms with fieldsets and legends

## 📋 Exercise Description

Build a comprehensive event registration system with multiple forms for different types of events. This exercise covers all essential HTML form elements and demonstrates real-world form design patterns.

## 🔧 Requirements

Your event registration system should include:

1. **Main Registration Page (index.html)**
   - Event overview and description
   - Quick registration form with essential fields
   - Links to detailed registration forms

2. **Conference Registration (conference.html)**
   - Personal information form
   - Session preferences with checkboxes
   - Meal preferences with radio buttons
   - Special requirements textarea

3. **Workshop Registration (workshop.html)**
   - Participant details form
   - Skill level selection dropdown
   - Multiple workshop selection
   - Equipment needs checklist

4. **Contact and Feedback (contact.html)**
   - Contact information form
   - Event feedback form with ratings
   - Suggestion box with textarea
   - Newsletter subscription options

## 🔧 Technical Requirements

### File Structure:
```
event-registration/
├── index.html
├── conference.html
├── workshop.html
├── contact.html
└── styles/
    └── form-styles.css (optional)
```

### HTML Elements to Use:
- `<form>` with proper action and method attributes
- `<input>` with various types: text, email, tel, date, number, checkbox, radio, submit
- `<label>` with proper for attributes
- `<select>` and `<option>` for dropdown menus
- `<textarea>` for multi-line text input
- `<fieldset>` and `<legend>` for form organization
- `<button>` for form submission and actions

## 📝 Step-by-Step Instructions

1. **Create Main Registration Page**
   
   **Quick Registration Form:**
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>Quick Registration</legend>
       
       <div>
         <label for="quick-name">Full Name:</label>
         <input type="text" id="quick-name" name="fullName" required>
       </div>
       
       <div>
         <label for="quick-email">Email Address:</label>
         <input type="email" id="quick-email" name="email" required>
       </div>
       
       <div>
         <label for="event-type">Event Type:</label>
         <select id="event-type" name="eventType" required>
           <option value="">Choose an event...</option>
           <option value="conference">Tech Conference</option>
           <option value="workshop">Hands-on Workshop</option>
           <option value="seminar">Professional Seminar</option>
         </select>
       </div>
       
       <div>
         <button type="submit">Register Now</button>
       </div>
     </fieldset>
   </form>
   ```

2. **Build Conference Registration Form**
   
   **Personal Information Section:**
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>Personal Information</legend>
       
       <div>
         <label for="conf-first-name">First Name:</label>
         <input type="text" id="conf-first-name" name="firstName" required>
       </div>
       
       <div>
         <label for="conf-last-name">Last Name:</label>
         <input type="text" id="conf-last-name" name="lastName" required>
       </div>
       
       <div>
         <label for="conf-email">Email Address:</label>
         <input type="email" id="conf-email" name="email" required>
       </div>
       
       <div>
         <label for="conf-phone">Phone Number:</label>
         <input type="tel" id="conf-phone" name="phone">
       </div>
       
       <div>
         <label for="conf-company">Company/Organization:</label>
         <input type="text" id="conf-company" name="company">
       </div>
       
       <div>
         <label for="conf-title">Job Title:</label>
         <input type="text" id="conf-title" name="jobTitle">
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Session Preferences</legend>
       <p>Select all sessions you'd like to attend:</p>
       
       <div>
         <input type="checkbox" id="ai-session" name="sessions" value="ai">
         <label for="ai-session">Artificial Intelligence in Business</label>
       </div>
       
       <div>
         <input type="checkbox" id="cloud-session" name="sessions" value="cloud">
         <label for="cloud-session">Cloud Computing Strategies</label>
       </div>
       
       <div>
         <input type="checkbox" id="security-session" name="sessions" value="security">
         <label for="security-session">Cybersecurity Best Practices</label>
       </div>
       
       <div>
         <input type="checkbox" id="data-session" name="sessions" value="data">
         <label for="data-session">Data Science Applications</label>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Meal Preferences</legend>
       
       <div>
         <input type="radio" id="regular-meal" name="mealType" value="regular" checked>
         <label for="regular-meal">Regular Menu</label>
       </div>
       
       <div>
         <input type="radio" id="vegetarian-meal" name="mealType" value="vegetarian">
         <label for="vegetarian-meal">Vegetarian</label>
       </div>
       
       <div>
         <input type="radio" id="vegan-meal" name="mealType" value="vegan">
         <label for="vegan-meal">Vegan</label>
       </div>
       
       <div>
         <input type="radio" id="gluten-free-meal" name="mealType" value="gluten-free">
         <label for="gluten-free-meal">Gluten-Free</label>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Special Requirements</legend>
       
       <div>
         <label for="accessibility">Accessibility Needs:</label>
         <textarea id="accessibility" name="accessibility" rows="3" cols="50" 
                   placeholder="Please describe any accessibility requirements..."></textarea>
       </div>
       
       <div>
         <label for="dietary-restrictions">Dietary Restrictions:</label>
         <textarea id="dietary-restrictions" name="dietaryRestrictions" rows="3" cols="50"
                   placeholder="Please list any dietary restrictions or allergies..."></textarea>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">Complete Conference Registration</button>
       <button type="reset">Clear Form</button>
     </div>
   </form>
   ```

3. **Create Workshop Registration Form**
   
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>Participant Information</legend>
       
       <div>
         <label for="workshop-name">Full Name:</label>
         <input type="text" id="workshop-name" name="fullName" required>
       </div>
       
       <div>
         <label for="workshop-email">Email:</label>
         <input type="email" id="workshop-email" name="email" required>
       </div>
       
       <div>
         <label for="workshop-experience">Experience Level:</label>
         <select id="workshop-experience" name="experienceLevel" required>
           <option value="">Select your level...</option>
           <option value="beginner">Beginner (0-1 years)</option>
           <option value="intermediate">Intermediate (2-5 years)</option>
           <option value="advanced">Advanced (5+ years)</option>
           <option value="expert">Expert (10+ years)</option>
         </select>
       </div>
       
       <div>
         <label for="workshop-field">Primary Field:</label>
         <select id="workshop-field" name="primaryField">
           <option value="">Choose your field...</option>
           <option value="web-dev">Web Development</option>
           <option value="mobile-dev">Mobile Development</option>
           <option value="data-science">Data Science</option>
           <option value="design">UI/UX Design</option>
           <option value="devops">DevOps</option>
           <option value="other">Other</option>
         </select>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Workshop Selection</legend>
       <p>Choose up to 3 workshops to attend:</p>
       
       <div>
         <input type="checkbox" id="react-workshop" name="workshops" value="react">
         <label for="react-workshop">React.js Fundamentals</label>
       </div>
       
       <div>
         <input type="checkbox" id="python-workshop" name="workshops" value="python">
         <label for="python-workshop">Python for Data Analysis</label>
       </div>
       
       <div>
         <input type="checkbox" id="design-workshop" name="workshops" value="design">
         <label for="design-workshop">Design Thinking Workshop</label>
       </div>
       
       <div>
         <input type="checkbox" id="api-workshop" name="workshops" value="api">
         <label for="api-workshop">RESTful API Development</label>
       </div>
       
       <div>
         <input type="checkbox" id="testing-workshop" name="workshops" value="testing">
         <label for="testing-workshop">Automated Testing Strategies</label>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Equipment and Setup</legend>
       
       <div>
         <input type="checkbox" id="bring-laptop" name="equipment" value="laptop">
         <label for="bring-laptop">I will bring my own laptop</label>
       </div>
       
       <div>
         <input type="checkbox" id="need-laptop" name="equipment" value="need-laptop">
         <label for="need-laptop">I need a laptop provided</label>
       </div>
       
       <div>
         <input type="checkbox" id="need-adapter" name="equipment" value="adapter">
         <label for="need-adapter">I need power adapter/cables</label>
       </div>
       
       <div>
         <label for="os-preference">Operating System Preference:</label>
         <select id="os-preference" name="osPreference">
           <option value="windows">Windows</option>
           <option value="mac">macOS</option>
           <option value="linux">Linux</option>
           <option value="no-preference">No Preference</option>
         </select>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">Register for Workshops</button>
     </div>
   </form>
   ```

4. **Build Contact and Feedback Form**
   
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>Contact Information</legend>
       
       <div>
         <label for="contact-name">Name:</label>
         <input type="text" id="contact-name" name="name" required>
       </div>
       
       <div>
         <label for="contact-email">Email:</label>
         <input type="email" id="contact-email" name="email" required>
       </div>
       
       <div>
         <label for="contact-subject">Subject:</label>
         <select id="contact-subject" name="subject" required>
           <option value="">Choose a topic...</option>
           <option value="registration">Registration Question</option>
           <option value="schedule">Schedule Information</option>
           <option value="payment">Payment Issue</option>
           <option value="technical">Technical Support</option>
           <option value="feedback">General Feedback</option>
           <option value="other">Other</option>
         </select>
       </div>
       
       <div>
         <label for="contact-message">Message:</label>
         <textarea id="contact-message" name="message" rows="6" cols="50" 
                   placeholder="Please type your message here..." required></textarea>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Event Feedback</legend>
       
       <div>
         <label for="overall-rating">Overall Event Rating:</label>
         <select id="overall-rating" name="overallRating">
           <option value="">Rate the event...</option>
           <option value="5">Excellent (5 stars)</option>
           <option value="4">Very Good (4 stars)</option>
           <option value="3">Good (3 stars)</option>
           <option value="2">Fair (2 stars)</option>
           <option value="1">Poor (1 star)</option>
         </select>
       </div>
       
       <div>
         <label for="recommend">Would you recommend this event?</label>
         <div>
           <input type="radio" id="recommend-yes" name="recommend" value="yes">
           <label for="recommend-yes">Yes, definitely</label>
         </div>
         <div>
           <input type="radio" id="recommend-maybe" name="recommend" value="maybe">
           <label for="recommend-maybe">Maybe</label>
         </div>
         <div>
           <input type="radio" id="recommend-no" name="recommend" value="no">
           <label for="recommend-no">No, probably not</label>
         </div>
       </div>
       
       <div>
         <label for="suggestions">Suggestions for Improvement:</label>
         <textarea id="suggestions" name="suggestions" rows="4" cols="50"
                   placeholder="What could we do better next time?"></textarea>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>Newsletter and Updates</legend>
       
       <div>
         <input type="checkbox" id="newsletter" name="newsletter" value="yes">
         <label for="newsletter">Subscribe to our newsletter</label>
       </div>
       
       <div>
         <input type="checkbox" id="event-updates" name="eventUpdates" value="yes">
         <label for="event-updates">Receive updates about future events</label>
       </div>
       
       <div>
         <label for="interests">Topics of Interest:</label>
         <select id="interests" name="interests" multiple size="4">
           <option value="technology">Technology Trends</option>
           <option value="business">Business Strategy</option>
           <option value="design">Design and UX</option>
           <option value="development">Software Development</option>
           <option value="leadership">Leadership Skills</option>
           <option value="innovation">Innovation</option>
         </select>
         <small>Hold Ctrl (Cmd on Mac) to select multiple options</small>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">Send Message</button>
       <button type="reset">Clear Form</button>
     </div>
   </form>
   ```

## 💡 Pro Tips

- Always use proper `<label>` elements with `for` attributes
- Include `required` attributes for mandatory fields
- Use appropriate `input` types for better mobile experience
- Group related fields with `<fieldset>` and `<legend>`
- Provide clear instructions and placeholder text
- Consider form validation and error handling

## 🚀 Bonus Challenges

1. **Add Advanced Input Types**
   - Date and time pickers for event scheduling
   - Number inputs with min/max for pricing
   - Range sliders for rating systems

2. **Include File Upload Forms**
   - Resume/CV upload for speaker applications
   - Photo upload for attendee profiles
   - Document upload for presentation materials

3. **Create Multi-Step Forms**
   - Break long forms into multiple steps
   - Add progress indicators
   - Include previous/next navigation

4. **Add Form Validation**
   - Client-side validation with HTML5
   - Custom validation messages
   - Real-time feedback for users

## ✅ Completion Checklist

- [ ] Created main registration page with quick form
- [ ] Built comprehensive conference registration form
- [ ] Created workshop registration with skill levels
- [ ] Added contact and feedback forms
- [ ] Used proper form structure with fieldsets
- [ ] Included all major input types
- [ ] Added appropriate labels for all inputs
- [ ] Used proper form validation attributes
- [ ] Created dropdown menus for selections
- [ ] Added textarea elements for longer text
- [ ] Included radio buttons and checkboxes
- [ ] Added submit and reset buttons
- [ ] Tested form usability and accessibility

## 🎨 Form Design Tips

- Keep forms organized and logical
- Use consistent spacing and alignment
- Group related fields together
- Provide clear instructions and help text
- Make error messages helpful and specific
- Consider mobile-friendly form layouts

This exercise provides comprehensive practice with HTML forms while building a practical event registration system!
