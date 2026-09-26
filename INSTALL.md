# ⚙️ Installation & Configuration Manual

This guide walks you through setting up the portfolio locally, configuring your environment variables, and initializing your Supabase database.

---

## 📋 Prerequisites
Make sure you have the following installed on your machine:
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher) or **Yarn** / **pnpm**
* A **Supabase** account (for database tables and storage)
* A **Resend** account (for contact email routing)

---

## 🚀 Local Installation

Follow these steps to run the portfolio on your local machine:

```bash
# 1. Clone the project repository
git clone https://github.com/abhinavtiwary15/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Create your environment configuration file
# On Windows (PowerShell / Command Prompt):
copy .env.local.example .env.local
# On macOS / Linux:
cp .env.local.example .env.local
```

Configure your environment variables in `.env.local`, then start the development server:

```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

---

## 🗄️ Database Setup (Supabase)

To initialize the database tables and storage buckets:

1. Log into your [Supabase Dashboard](https://supabase.com/dashboard) and select your project.
2. Click on **SQL Editor** on the left menu, then click **New Query**.
3. Open [`supabase/migrations/run-sql-supabase.sql`](supabase/migrations/run-sql-supabase.sql), copy its entire contents, paste it into the SQL editor, and click **Run**.
4. This script idempotently creates all required tables (`ad_clicks`, `visits`, `searches`, `inquiries`, `subscribers`, `settings`, `reviews`, `projects`, `works`) and storage buckets (`projects`, `project-photos`) with row-level security policies.

---

## ⚙️ Environment Variables (`.env.local`)

Fill in your actual API keys and secrets in `.env.local`:

| Environment Variable | Description | Where to find |
| :--- | :--- | :--- |
| **`NEXT_PUBLIC_SUPABASE_URL`** | Your Supabase project URL | Supabase Dashboard -> Project Settings -> API |
| **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** | Client publishable / anon key | Supabase Dashboard -> Project Settings -> API |
| **`SUPABASE_SERVICE_ROLE_KEY`** | Database service role admin key | Supabase Dashboard -> Project Settings -> API |
| **`RESEND_API_KEY`** | API key for routing contact emails | Resend Dashboard -> API Keys (`re_...`) |
| **`ADMIN_PASSWORD`** | Admin panel sign-in password | Set a secure password for `/admin/login` |
| **`JWT_SECRET`** | Random signing token string | Generated automatically via `node generate-secret.js` |
| **`ADMIN_EMAIL`** | Target email for contact form alerts | Your personal / verified domain email |
| **`NEXT_PUBLIC_SITE_URL`** | Live domain or `http://localhost:3000` | Canonical site URL |
| **`NEXT_PUBLIC_WHATSAPP_NUMBER`** | WhatsApp phone number | Format without `+` (e.g. `919835045034`) |
| **`COMING_SOON_PASSWORD`** | Bypasses Coming Soon landing screen | Passcode to view dev progress |

---

## 🌍 Production Deployments

### Vercel (Recommended)
1. Push your local project to your GitHub repository.
2. Visit [Vercel](https://vercel.com/new) and log in.
3. Import your `Portfolio` repository.
4. Expand **Environment Variables** and add all variables listed in `.env.local`.
5. Click **Deploy**.
