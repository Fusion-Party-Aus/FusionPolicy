# FusionPolicy

This is a platform for Fusion's 

## Backend
```
#sh
cd backend
./pocketbase serve`
```

## Frontend

```
#sh
cd frontend
npm i
npm run dev
```

### Build
```
#sh
git pull
npm run build
systemctl restart policy-svelte
```

WARNING: pocketbase.ts file current points to production database (TODO: read from env file)