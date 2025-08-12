# 🎯 Challenge Easy Stage 7-02: File Upload Validator (Stage 7 - Error Handling and Debugging)

## 📝 Description

Create a file upload component that validates files and handles various error conditions that can occur during file operations.

## 🎯 Objectives

- Handle file-related errors gracefully
- Validate file types and sizes
- Provide meaningful feedback to users
- Practice error handling in real-world scenarios

## 📋 Requirements

1. File upload interface:
   - Drag and drop area
   - Browse button for file selection
   - File preview (for images)
   - Upload progress indicator
   - List of uploaded files

2. Validation rules:
   - Maximum file size: 5MB
   - Allowed types: images (jpg, png, gif), documents (pdf, doc, txt)
   - Maximum 3 files at once
   - No duplicate files (same name)

3. Error handling scenarios:
   - File too large
   - Invalid file type
   - Too many files selected
   - Duplicate file names
   - Network errors during upload simulation
   - Corrupted file detection

## 💡 Example HTML Structure

```html
<div class="upload-container">
  <div class="drop-zone" id="dropZone">
    <p>Drag files here or <button id="browseBtn">Browse</button></p>
    <input type="file" id="fileInput" multiple accept=".jpg,.png,.gif,.pdf,.doc,.txt" hidden>
  </div>
  
  <div id="errorContainer" class="error-messages"></div>
  
  <div class="file-list">
    <h3>Selected Files:</h3>
    <div id="fileList"></div>
  </div>
  
  <button id="uploadBtn" disabled>Upload Files</button>
</div>
```

## 🚀 Expected Functions

```javascript
function validateFile(file) {
  try {
    // Check file size
    if (file.size > 5 * 1024 * 1024) {
      throw new Error(`File "${file.name}" is too large. Maximum size is 5MB.`);
    }
    
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(`File type "${file.type}" is not allowed.`);
    }
    
    return true;
  } catch (error) {
    displayError(error.message);
    return false;
  }
}

function uploadFiles() {
  const validFiles = [];
  
  try {
    // Validate all files first
    for (let file of selectedFiles) {
      if (validateFile(file)) {
        validFiles.push(file);
      }
    }
    
    if (validFiles.length === 0) {
      throw new Error("No valid files to upload");
    }
    
    // Simulate upload process
    simulateUpload(validFiles);
    
  } catch (error) {
    displayError(error.message);
  } finally {
    console.log(`Upload attempt completed. ${validFiles.length} files processed.`);
  }
}
```

## ✅ Expected Error Messages

- **File too large**: "File 'document.pdf' is too large. Maximum size is 5MB."
- **Invalid type**: "File type 'video/mp4' is not allowed."
- **Too many files**: "Cannot upload more than 3 files at once."
- **Duplicate file**: "File 'image.jpg' already selected."
- **Upload failed**: "Upload failed. Please check your connection and try again."

## ✅ Expected Topics Used

- File API error handling
- `try-catch` for validation functions
- `finally` for cleanup operations
- Custom error messages
- Error state management

## 🌟 Bonus

- Add retry mechanism for failed uploads
- Implement file corruption detection
- Add image compression for large images
- Create upload queue with error handling
- Add preview generation with error handling
