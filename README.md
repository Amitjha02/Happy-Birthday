# 🎂 Birthday Love Application 💖

A special, interactive web application designed to celebrate a birthday and make a romantic proposal.

## ✨ Features

- **Countdown Timer**: Automatically counts down to the special day (default: March 20th).
- **Interactive Love Shower**: A "Shower Love 💖" button that releases floating emojis.
- **Memory Gallery**: A responsive photo grid to showcase your favorite memories.
- **Red Rose Proposal**: A special 🌹 button that reveals a "Will you marry me?" overlay.
- **Celebration Mode**: Accepting the proposal triggers a grand celebration animation.
- **Responsive Design**: Looks beautiful on both desktop and mobile.

## 🚀 How to Run

1.  **Prerequisites**:
    - Java 17 or higher
    - Maven

2.  **Start the Application**:
    Open your terminal in the project folder and run:
    ```bash
    mvn spring-boot:run
    ```

3.  **Access the App**:
    Open your browser and go to: [http://localhost:8080](http://localhost:8080)

## ⚙️ Customization

### 📅 Setting the Date
Open `src/main/resources/static/js/script.js` and edit:
```javascript
// Month is 0-indexed (0=Jan, 2=March)
let birthdayDate = new Date(today.getFullYear(), 2, 20); 
```

### 🖼️ Adding Photos
1.  Navigate to `src/main/resources/static/images`.
2.  Add your photos named `photo1.jpg`, `photo2.jpg`, and `photo3.jpg`.
3.  (Optional) Edit `index.html` to add more photos or change filenames.

## 💍 Proposal Feature
- Click the **Red Rose 🌹** button to open the proposal dialog.
- Clicking **"YES! 💖"** changes the page title to "SHE SAID YES!" and triggers confetti.

---
*Made with ❤️*
