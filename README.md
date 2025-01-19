# Admin Dashboard

A modern, fully responsive admin dashboard built with Next.js, featuring authentication, user management, and data visualization. Optimized for all devices from mobile phones to large desktop screens.

![image](https://github.com/user-attachments/assets/a9c695b4-9f0c-40e2-b126-1c8034c1fb0a)

## Features

### Responsive Design
- Fully adaptive layout that works seamlessly on all devices
- Dynamic navigation that adapts to screen size
- Responsive data tables and charts

### Authentication System
- Responsive login and password recovery forms
- Secure login system with email and password validation
- Protected routes using middleware
- Cookie-based authentication
- Form validation with error messages

### Dashboard
- Clean and intuitive interface
- Data visualization using Chart.js with responsive charts
- Adaptive layout that reorganizes based on screen size

### User Management
- Display of 500 user records
- Responsive data tables that adapt to screen size
- Pagination (10 users per page)
- Search functionality by nickname and email
- Smart email truncation with tooltip for long addresses

### Navigation
- Adaptive dual navigation system:
  - Left sidebar: Collapsible on mobile devices
  - Top navbar: Responsive profile and settings access
- Mobile-friendly menu toggles
- Quick access to key features

## Default Credentials
```
Email: admin@gmail.com
Password: admin
```

## Tech Stack
- **Next.js**
- **React.js**
- **Tailwind CSS**
- **REST API**
- **Chart.js**
- **Sonner**

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/spudoodle/admin-ui.git
```

2. Install dependencies
```bash
npm install --force
```

3. Set up environment variables
```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_EMAIL=admin@gmail.com
NEXT_PUBLIC_ADMIN_PASSWORD=admin
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

### Important Notes
- The logout button is located in the settings page, accessible via the profile icon in the top navigation bar
- Users must be authenticated to access any route except login and forgot-password
- Session persistence is maintained through cookies
- All pages are fully responsive and work on any device

## Screenshots

![image](https://github.com/user-attachments/assets/a0e301e9-2158-4558-9b16-c3e3cb3d5a76)

![image](https://github.com/user-attachments/assets/1cf99292-cf61-4c05-bef5-239a48f1ec82)

![image](https://github.com/user-attachments/assets/c199a844-5f89-435a-820a-ae83615cb958)

![image](https://github.com/user-attachments/assets/9a88662a-725e-45f3-8fc5-1214cd918f33)

![image](https://github.com/user-attachments/assets/49d665d7-84ec-4d6d-9dac-81c5cdbc3106)
