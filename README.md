# **Learning Management Dashboard**

## **Project Overview**

The Softmax Online School Dashboard is a role-based web application designed to facilitate efficient learning and management for **Admins**, **Instructors**, and **Students**. Built with **Next.js** and **TypeScript**, it enables seamless navigation, dynamic course management, and engaging visual analytics to enhance the online learning experience.

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **1. Prerequisites**

Ensure you have the following installed:

- **Node.js**: v18.x or higher.
- **npm** or **yarn**: Latest version.

### **2. Clone the Repository**

```bash
git clone https://github.com/masud-rana44/lms-dashboard.git
cd lms-dashboard
```

### **3. Install Dependencies**

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### **4. Environment Variables**

Locate the `example.env` file in the root directory. Rename it to `.env.local` and fill in the required values with your specific credentials.

> Replace placeholder values like `your_*` with the actual keys and secrets from OAuth provider's configuration.

### **5. Run the Development Server**

```bash
npm run dev
# Or
yarn dev
```

Visit the app at **[http://localhost:3000](http://localhost:3000)**.

---

## **Demo Credentials**

Use the following credentials to log in as different roles in the application:

- **Admin**:

  - Email: `admin@example.com`
  - Password: `admin123`

- **Instructor**:

  - Email: `instructor@example.com`
  - Password: `instructor123`

- **Student**:
  - Email: `student@example.com`
  - Password: `student123`

---

### **Key Features**

- **Admin Features**:

  - Manage users and their roles dynamically.
  - View site analytics (e.g., user growth, course performance, total sales).

- **Instructor Features**:

  - Create, edit, and manage courses with prerequisites and pricing.
  - Track student progress using charts and metrics.
  - Interact with students through query management.

- **Student Features**:
  - Access enrolled courses and track progress with visual indicators.
  - Submit feedback and interact with course content effortlessly.
  - Access quizzes and submit answers for real-time feedback.

### **Tech Stack**

- **Frontend Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components).
- **Styling**: Tailwind CSS for responsive, utility-first design.
- **Charts**: Chart.js and react-chartjs-2 for interactive data visualizations.
- **Authentication**: NextAuth.js with support for Google, GitHub, and Facebook OAuth.
