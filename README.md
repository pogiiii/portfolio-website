# Project Prerequisites
- Docker Desktop running
- Node

# Project setup

## After forking and cloning the repo, follow the steps below to start the project:

1. In the project root, install node modules: 
```
npm i
```

2. Build docker image
```
docker compose build
```

3. Start docker container
```
docker compose up
```

4. Start tailwind service
- Open another terminal and run:
```
npm run watch
```

5. Visit http://localhost:5000 to view website