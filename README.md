# E-Shop Market

A comprehensive e-commerce solution built with a modern technology stack, featuring a NestJS backend and an Angular Server-Side Rendered (SSR) frontend.

## 🚀 Technologies

### Backend
- **Framework:** [NestJS](https://nestjs.com/) (with Express)
- **Database:** MongoDB with [Mongoose](https://mongoosejs.com/)
- **Authentication:** Passport.js (JWT, Google OAuth2)
- **API:** RESTful architecture

### Frontend
- **Framework:** [Angular](https://angular.io/)
- **State Management:** [NgRx](https://ngrx.io/) (Store, Effects)
- **UI Components:** Angular Material
- **SSR:** Angular Universal for SEO and performance
- **Styling:** SCSS

### Integrations
- **Payments:** Stripe
- **Media:** Cloudinary (Image management)
- **Email:** SendGrid (Transactional emails)
- **Security:** Google Recaptcha v2/v3
- **Editor:** TinyMCE (Rich text editing)

## ✨ Features

- **Full-featured Store:** Product browsing, specific detailed views, shopping cart, and checkout process.
- **Admin Dashboard:** Comprehensive management for products, orders, and users.
- **Secure Authentication:** User registration and login support via Email/Password and Google OAuth.
- **Optimized Performance:** Server-Side Rendering (SSR) ensures fast initial loads and SEO friendliness.
- **Responsive Design:** Mobile-first approach using Angular Material and custom SCSS.
- **Automated Notifications:** Email confirmations for orders and contact form submissions.
- **Geo-Location:** IP-based location services.

## 🛠 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd eshop-market
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## ⚙️ Configuration

1. **Create Environment File:**
   Copy the example environment file to create your local `.env`:
   ```bash
   cp .env.example .env
   ```

2. **Configure Variables:**
   Edit `.env` and fill in your specific credentials:

   ```env
   # Backend Configuration
   SERVER_PORT=4000
   SERVER_URL="http://localhost:4000"

   # Frontend Configuration
   ORIGIN="http://localhost:3000"

   # Security (JWT)
   JWT_EXPIRATION="7d"
   JWT_SECRET="complex_secret_string"
   COOKIE_KEY="complex_cookie_string"

   # Database
   MONGO_URI="mongodb://{user}:{password}@{host}:{port}/{databaseName}"

   # Email Service (SendGrid)
   # Get key from https://sendgrid.com
   SENDGRID_KEY="SG.your_key..." 

   # Cloudinary (Images)
   # Get credentials from https://cloudinary.com
   CLOUDINARY_NAME="your_cloud_name"
   CLOUDINARY_KEY="your_api_key"
   CLOUDINARY_SECRET="your_api_secret"

   # Payments (Stripe)
   # Get keys from https://stripe.com
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRETKEY="sk_test_..."

   # Yandex.Money (Optional)
   YA_CLIENT_ID=""
   YA_SECRETKEY=""

   # Google OAuth
   # Enable Google Login
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"

   # Administration
   # These emails receive admin notifications
   ADMIN_EMAILS="admin@example.com, support@example.com"

   # Google Recaptcha
   RECAPTCHA_SERVER_KEY="your_server_key"
   FE_RECAPTCHA_CLIENT_KEY="your_client_key"

   # Geo Location (https://geolocation-db.com)
   GEO_LOCATION_API_KEY="your_api_key"

   # Frontend Public Keys (Must match above where applicable)
   FE_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   FE_TINYMCE_API_KEY="your_tinymce_key"
   ```

## 🏃‍♂️ Running the Application

### Development Mode

Run the backend and frontend services separately for development.

```bash
# 1. Start the Backend API (runs on port 4000)
npm run start:dev

# 2. Start the Angular Client (runs on port 3000/4200)
npm run start:client
```

### Server-Side Rendering (SSR)

To test the application with Server-Side Rendering:

```bash
# Build and serve SSR
npm run build:ssr
npm run serve:ssr

# Development watch mode for SSR
npm run dev:ssr
```

## 🐳 Docker

You can run the entire application using the provided Docker image.

```bash
# Pull the latest image
docker pull pararel/eshop-mean:latest

# Run with environment file
docker run --env-file .env --network=host pararel/eshop-mean:latest

# Run with command-line arguments
docker run \
  -e MONGO_URI="mongodb://..." \
  -e JWT_SECRET="secret" \
  --network=host \
  pararel/eshop-mean:latest
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).
