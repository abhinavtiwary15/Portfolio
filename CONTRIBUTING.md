# 🤝 Contributing

Thank you for your interest in contributing to the **Cinematic Developer Portfolio**!

---

## 📋 Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and inclusive environment for all contributors.

---

## 🚀 How to Contribute

### 1. Fork & Clone the Repository
```bash
git clone https://github.com/abhinavtiwary15/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 4. Set Up Local Environment
Copy `.env.local.example` to `.env.local` and configure your environment parameters as described in [INSTALL.md](INSTALL.md).

### 5. Make Your Changes & Test
Ensure your code builds cleanly without errors:
```bash
npm run build
```

### 6. Commit & Push
```bash
git commit -m "feat: add feature description"
git push origin feature/your-feature-name
```

### 7. Open a Pull Request (PR)
- Go to the repository on GitHub and open a pull request.
- Provide a clear description of the problem solved or feature added.

---

## 🎨 Coding Guidelines

- **Styling**: Tailwind CSS v4 and vanilla CSS variables (`--orange: #ff6b1a`).
- **Components**: Keep React components modular and clean inside `src/components/`.
- **Config**: Keep personal details, experience, and project content centralized in `src/config/profile.js`.
- **Linting**: Follow standard Next.js and ESLint rules (`npm run lint`).
