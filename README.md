📁src
├── 📁core
│ ├── 📁axios
│ │ ├── axios.instance.ts
│ │ ├── axios.interceptors.ts
│ │ └── index.ts
│ ├── 📁directives
│ ├── 📁composables
│ ├── 📁router ← opcional mover aquí `router/index.ts`
│ └── 📁store ← global store si usas Pinia
├── 📁lib
│ ├── utils.ts
│ ├── validators.ts
│ └── formatters.ts
├── 📁features
│ ├── 📁auth
│ │ ├── 📁guards
│ │ │ └── auth.guard.ts
│ │ ├── 📁services
│ │ ├── 📁routes
│ │ └── 📁views
│ ├── 📁users
│ ├── 📁admin
│ └── 📁home
