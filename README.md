<h1 align="center"><img src="https://raw.githubusercontent.com/MuffinTheDragon/daily-habit-tracker/main/src/app/favicon.ico" /></h1>

## Daily habit tracker

This is a simple, minimalistic app that lets you track your daily habits.

Some included features:
- Streaks based, track and beat your longest streaks
- Fully useable offline
- Freezes (similar to Duolingo's streak freezes)
- Visual map for tracking consistency
- Pause the app when you need a break or will be away


Stack: React, Dexie cloud, Vercel

# Steps to run the project locally

1. Clone the repository
```
    git clone https://github.com/yash9657/habittasktracker.git
    cd habittasktracker
```

2. Install Dependencies
```
    npm install
```

3. Create a Dexie cloud Database
```
    npx dexie-cloud create
```
You'll be prompted for email verification. Then the URL of your database will output to the console and stored in a new local file dexie-cloud.json. And the Client ID and Client Secret will be stored in another local file dexie-cloud.key

4. Configure the environment variables
```
    NEXT_PUBLIC_DBURL=<your-database-url-here>
    DEXIE_CLIENT_ID=<your-client-id-here>
    DEXIE_CLIENT_SECRET=<your-client-secret-here>
```
Create a .env.local file in the root directory of the project and add your respective url, id, secret to file with the above given variable names.

5. Whitelist your LocalHost
```
    npx dexie-cloud whitelist http://localhost:3000
```

6. Run the project
```
    npm run dev
```
