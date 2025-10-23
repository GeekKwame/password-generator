# 🔐 Password Generator

A modern, secure password generator application built with vanilla JavaScript, HTML, and CSS. Generate strong, random passwords with a beautiful dark-themed interface.

## ✨ Features

- **Dual Password Generation**: Generate two unique passwords simultaneously
- **Strong Security**: Uses uppercase, lowercase, numbers, and special characters
- **Modern UI**: Clean, dark-themed interface with green accents
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Generation**: Instant password creation with a single click
- **15-Character Length**: Optimal password length for security

## 🚀 Live Demo

[View Live Demo](https://geekkwame.github.io/password-generator) *(Replace with your actual GitHub Pages URL)*

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and responsive design
- **Vanilla JavaScript**: ES6+ features for password generation
- **Math.random()**: Cryptographically secure random number generation

## 📋 Character Set

The password generator uses a comprehensive character set:

- **Uppercase Letters**: A-Z (26 characters)
- **Lowercase Letters**: a-z (26 characters)
- **Numbers**: 0-9 (10 characters)
- **Special Characters**: !@#$%^&*()_+-=[]{}|;:,.<>? (26 characters)

**Total**: 88 unique characters for maximum password strength

## 🎯 How It Works

1. **Click "Generate passwords"** button
2. **Two random passwords** are instantly created
3. **Each password** is 15 characters long
4. **Characters are selected** randomly from the full character set
5. **Passwords appear** in the green-colored display fields

## 📁 Project Structure

```
password-generator/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── index.js            # JavaScript password generation logic
├── images/             # Project images and assets
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GeekKwame/password-generator.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd password-generator
   ```

3. **Open in your browser**
   - Double-click `index.html` or
   - Use a local server: `python -m http.server` or `npx serve`

## 💻 Code Example

```javascript
// Generate a random password
function generatePassword(length = 15) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
```

## 🎨 Customization

### Changing Password Length
Modify the `length` parameter in the `generatePassword()` function:

```javascript
const password1 = generatePassword(20); // 20-character password
```

### Adding More Characters
Extend the `characters` array in `index.js`:

```javascript
const characters = [
    // ... existing characters
    "~", "`", "€", "£", "¥"  // Additional special characters
];
```

## 🔒 Security Features

- **Cryptographically Random**: Uses `Math.random()` for character selection
- **No Patterns**: Each character position is independently random
- **Full Character Set**: Includes all common character types
- **No Storage**: Passwords are generated client-side, never stored

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full-width layout with side-by-side password fields
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Stacked layout for easy viewing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**GeekKwame**
- GitHub: [@GeekKwame](https://github.com/GeekKwame)
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]

## 🙏 Acknowledgments

- Inspired by modern password generator designs
- Built as part of JavaScript learning journey
- Thanks to the open-source community for inspiration

## 📈 Future Enhancements

- [ ] Password strength indicator
- [ ] Customizable password length slider
- [ ] Copy to clipboard functionality
- [ ] Password history feature
- [ ] Export passwords as text file
- [ ] Dark/Light theme toggle

---

⭐ **Star this repository if you found it helpful!**

🔗 **Connect with me**: [GitHub](https://github.com/GeekKwame) | [Twitter](https://twitter.com/GeekKwame) | [LinkedIn](https://linkedin.com/in/geekkwame)
