# 🚀 Next.js v14 Starter Boilerplate 🌟

A **fully-featured** and **highly customizable** Next.js v14 boilerplate designed to kickstart your projects with **modern tools** and **best practices**. Let’s build something amazing! 💻✨

---

## 🌟 Features

### ⚙️ Core Setup
- **Next.js v14**: The latest and greatest for building server-rendered React applications. 🚀  
- **TypeScript**: Enjoy a type-safe development experience out of the box. 🔒  
- **ESLint & Prettier**:  
  - 🛠️ Simple, friendly configurations for clean, consistent code.  
  - Configured to check for **syntax**, **problems**, and **code style**.  

### 🔐 Authentication
- **NextAuth v4**: Seamlessly integrated for secure authentication. 🔑  

### 🗄️ Database Options
Flexibly choose from multiple database solutions:  
- **Supabase** ⚡  
- **Pocketbase** 📦  
- **PostgreSQL** 🐘  
- **LiteSQL** 💾  

### 🎨 Frontend Tools
- **TailwindCSS**: Styled with the beautiful **SF Pro** font and fully responsive. 💅  
- **NextUI**: A sleek, modern UI component library. 🖌️  
- **ShadCN**: Perfectly styled for **dark/light themes**. 🌗  
- **DaisyUI**: Easy-to-use, component-rich library for TailwindCSS. 🌸  
- **Dark/Light Modes**: Fully configured for seamless theme switching! 🌓  

### 🛠️ Developer Tools
- **Zod**: Schema validation for better type safety. ✅  
- **Husky**: Automate your Git workflows with pre-commit hooks. 🐶  
- **Essential Libraries**:  
  - TypeScript utilities.  
  - Intersection Observer.  
  - Next.js-specific utilities (`next/link`, `next/image`).  
  - Other must-have plugins for React and TypeScript. 🔧  

---

## 🚀 Installation

1. **Clone the repository**:  
   ```git clone <repository-url>
   cd <project-name>```

2. **Install dependencies**:

    ``` npm install
    # or
    yarn install```

3. **Setup environment variables**:
    - Use the provided ```.env.example``` file as a template.
    - Update it with your configurations for Supabase, Pocketbase, PostgreSQL, or LiteSQL.

## 📄 Sample ```.env``` File

  ```
  # Environment Variables
  NEXTAUTH_SECRET=your_nextauth_secret
  NEXTAUTH_URL=http://localhost:3000
  
  # Supabase
  SUPABASE_URL=your_supabase_url
  SUPABASE_ANON_KEY=your_supabase_anon_key
  SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
  
  # Pocketbase
  POCKETBASE_URL=your_pocketbase_url
  
  # PostgreSQL
  POSTGRES_HOST=your_postgres_host
  POSTGRES_PORT=5432
  POSTGRES_USER=your_postgres_user
  POSTGRES_PASSWORD=your_postgres_password
  POSTGRES_DB=your_postgres_db
  
  # LiteSQL
  LITESQL_DB_PATH=./path/to/your/sqlite.db
  # OAuth Providers (if needed)
  GOOGLE_CLIENT_ID=your-google-client-id
  GOOGLE_CLIENT_SECRET=your-google-client-secret
  GITHUB_ID=your-github-id
  GITHUB_SECRET=your-github-secret
  ```

## 🎉 **Contributing**
We’d love your help! Feel free to open issues or submit pull requests. Make sure to follow the coding standards enforced by ESLint and Prettier. ❤️
