# Nextjs Basic Boilerplate

This is a basic boilerplate for Nextjs projects. It's includes:

- [x] Nextjs
- [x] Typescript
- [x] Eslint (Eslint Javascript Standart and with Typescript)
- [x] Prettier
- [x] Husky (pre-commit - Lint and Check Build)
- [x] Next Auth V5 (Credentials Provider and Google)
- [x] Prisma

### Environment Variables

- NEXTAUTH_URL (Your App URL)
- NEXTAUTH_SECRET (Your Next Auth Secret)
- IDENTIFIER_PREFIX (It's for ID Prefix -> ex. iz_skwo2239sik2s023nd)
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET

### How to use it :

1. Clone this repo or use as template
2. Install dependencies

```bash
npm install
```

3. Create .env.local file and add environment variables
4. Do prisma migration

```bash
npm run db:migrate
```

5. Run the development server:

```bash
npm run dev
```

6. Open http://localhost:3000 with your browser to see the result.
