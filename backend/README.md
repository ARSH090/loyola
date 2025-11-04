# School Admin Backend API

Complete backend system for school website admin panel with authentication, content management, and activity logging.

## 🚀 Features

- **Authentication System**: JWT-based secure login/logout
- **Role-Based Access Control**: Superadmin, Admin, Editor, Viewer roles
- **Content Management**: CRUD operations for news, notices, events
- **User Management**: Manage admin users and permissions
- **Activity Logs**: Track all admin actions with timestamps
- **File Uploads**: Secure image upload with Multer
- **Analytics**: Dashboard statistics and activity reports
- **Security**: bcrypt password hashing, helmet, rate limiting

## 📦 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite (better-sqlite3)
- **Authentication**: JWT + bcrypt
- **Validation**: express-validator
- **Security**: helmet, express-rate-limit, CORS

## 🔧 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file**:
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` file**:
   ```env
   PORT=5000
   JWT_SECRET=your_super_secret_key_here
   FRONTEND_URL=http://localhost:5173
   ```

4. **Create uploads directory**:
   ```bash
   mkdir uploads
   ```

5. **Start the server**:
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register first admin (one-time)
- `POST /login` - Login with credentials
- `POST /logout` - Logout user
- `GET /verify` - Verify JWT token

### Admin (`/api/admin`) - Protected
- `GET /profile` - Get admin profile
- `PUT /profile` - Update admin profile
- `PUT /password` - Change password
- `GET /dashboard` - Get dashboard statistics
- `GET /users` - Get all users (superadmin only)
- `DELETE /users/:id` - Delete user (superadmin only)

### Users (`/api/users`) - Protected
- `GET /` - Get all users
- `GET /:id` - Get user by ID
- `POST /` - Create new user
- `PUT /:id` - Update user
- `DELETE /:id` - Delete user (superadmin only)

### Content (`/api/content`)
- `GET /` - Get all content (public)
- `GET /:id` - Get content by ID (public)
- `GET /type/:type` - Get content by type (public)
- `POST /` - Create content (protected)
- `PUT /:id` - Update content (protected)
- `DELETE /:id` - Delete content (protected)
- `POST /upload` - Upload image (protected)

### Logs (`/api/logs`) - Protected
- `GET /` - Get all activity logs
- `GET /user/:userId` - Get logs by user
- `GET /analytics` - Get analytics data

## 🔐 Authentication

All protected routes require a Bearer token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

## 👤 User Roles

- **superadmin**: Full access, can manage all users
- **admin**: Can manage content and view logs
- **editor**: Can create/edit content
- **viewer**: Read-only access

## 🗄️ Database Schema

### Users Table
```sql
- id (PRIMARY KEY)
- username (UNIQUE)
- email (UNIQUE)
- password (hashed)
- role (superadmin|admin|editor|viewer)
- created_at
- last_login
- is_active
```

### Content Table
```sql
- id (PRIMARY KEY)
- title
- body
- type (news|notice|event|announcement)
- author_id (FOREIGN KEY -> users)
- image_url
- created_at
- updated_at
```

### Activity Logs Table
```sql
- id (PRIMARY KEY)
- user_id (FOREIGN KEY -> users)
- action
- details
- ip_address
- timestamp
```

## 🧪 Testing with Postman/cURL

### Register First Admin
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@school.com",
    "password": "Admin@123",
    "role": "superadmin"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "Admin@123"
  }'
```

### Create Content (with token)
```bash
curl -X POST http://localhost:5000/api/content \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>" \
  -d '{
    "title": "School Reopening Notice",
    "body": "Classes will resume from Monday",
    "type": "notice"
  }'
```

## 🔒 Security Features

- Password hashing with bcrypt (12 rounds)
- JWT token expiration (24 hours)
- Rate limiting (100 requests per 15 minutes)
- Helmet for HTTP headers security
- CORS protection
- Input validation and sanitization
- SQL injection prevention (parameterized queries)

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js       # Database setup and initialization
├── controllers/
│   ├── authController.js # Authentication logic
│   ├── adminController.js # Admin operations
│   ├── userController.js # User CRUD
│   ├── contentController.js # Content management
│   └── logController.js # Activity logs
├── middleware/
│   ├── auth.js # JWT authentication
│   ├── errorHandler.js # Error handling
│   └── validation.js # Input validation
├── routes/
│   ├── auth.js # Auth routes
│   ├── admin.js # Admin routes
│   ├── user.js # User routes
│   ├── content.js # Content routes
│   └── logs.js # Log routes
├── utils/
│   ├── logger.js # Activity logger
│   └── helpers.js # Helper functions
├── uploads/ # Uploaded files directory
├── .env.example # Environment template
├── package.json # Dependencies
├── server.js # Entry point
└── README.md # Documentation
```

## 🚨 Error Handling

All errors return JSON in this format:
```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Optional validation errors
}
```

## 📝 Development Notes

- Database file (`database.db`) is created automatically on first run
- Upload directory must exist before starting server
- JWT_SECRET must be changed in production
- Use HTTPS in production
- Consider adding refresh tokens for better security
- Implement token blacklisting for logout

## 🔧 Troubleshooting

**Port already in use**:
```bash
# Change PORT in .env file or kill the process
lsof -ti:5000 | xargs kill
```

**Database locked**:
```bash
# Close all connections to database.db
# Or delete database.db to start fresh
```

**Permission denied for uploads**:
```bash
chmod 755 uploads/
```

## 📜 License

MIT License - Feel free to use for personal or commercial projects.

## 👨‍💻 Author

**Huzaifa Ahmad**

---

**Ready to integrate with React frontend on `http://localhost:5173`**
