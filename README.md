Used technologies:
pnpm - Fast and memory-efficient
Next.js - Frontend Framework
Shadcn - UI library
Tailwind CSS - CSS Framework
Eslint - Linting
Prettier - Formatting
Husky - Git hooks
Lint Staged - Work with husky
Tanstack React Query - For managing queries and mutations
Service workers - Support offline
Zustand - State manager

About task:
On the docs quote api endpoint (https://api.quotable.io/random) was mentioned twice

Problems with task:
2 invalid api endpoints were provided (https://api.quotable.io/random, https://pprathameshmore.github.io/QuoteGarden/), so, I couldn't actually use Promise.race to get the fastest resolved promise. Because, I don't think it's worth to add extra logic to handle error cases, if the endpoints are not working at all. Instead I'm using working endpoint (https://dummyjson.com/quotes).

- stored 10 static quotes to show when user is offline
- using server-side fetch and using it as initial data, further fetches are made client side to keep loading UI fast (when used search params there was a delay )
- added dark theme support
- used modular patterns to keep components clean and readable

Further improvements:

- quote id can be set on search params to get from generateMetadata and have dynamic metadata. Also this also keeps data persistant on reloads
- on initial load fetch some amount of quotes and persist them on local storage to show on offline
