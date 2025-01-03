This is a portfolio website built in Next.js.

## Steps to Run

Without Docker (dev):

```bash
npm run dev
# or
yarn dev
```

The site will run on [http://localhost:3000](http://localhost:3000) by default.

Without Docker (prod):

```bash
npm run build
# or
yarn build

npm run start
# or
yarn start
```

With Docker (prod):

```bash
docker build -t portfolio .
docker run -p 8080:3000 portfolio
```

You can insert any name for the image instead of "portfolio" and any port you wish to use for the app instead of 8080.
