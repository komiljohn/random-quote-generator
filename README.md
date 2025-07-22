Used technologies:
pnpm - Fast and memory-efficient
Next.js - Frontend Framework
Shadcn - UI library
Tailwind CSS - CSS Framework
Eslint - Linting
Prettier - Formatting
Husky - Git hooks
Lint Staged - Work with husky
Tanstack React Query - Server side state management
Service workers - Support offline

About task:
On the docs quote api endpoint (https://api.quotable.io/random) was mentioned twice

Problems with task:
2 invalid api endpoints were provided (https://api.quotable.io/random, https://pprathameshmore.github.io/QuoteGarden/), so, I couldn't actually use Promise.race to get the fastest resolved promise. Because, I don't think it's worth to add extra logic to handle error cases, if the endpoints are not working at all. Instead I'm using working endpoint (https://dummyjson.com/quotes).
