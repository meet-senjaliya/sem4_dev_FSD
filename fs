/education-management
│
├── /frontend                # React UI (JSX + CSS)
│   ├── /public              # Static assets (favicon, index.html, images)
│   ├── /src
│   │   ├── /components      # Reusable UI components (.jsx + .css)
│   │   │   ├── Navbar.jsx + Navbar.css
│   │   │   ├── Footer.jsx + Footer.css
│   │   │   └── Chart.jsx + Chart.css
│   │   ├── /pages           # Role-based pages
│   │   │   ├── /student     # Student dashboards
│   │   │   ├── /teacher     # Teacher dashboards
│   │   │   ├── /admin       # Admin dashboards
│   │   │   └── Login.jsx + Login.css
│   │   ├── /services        # API calls
│   │   │   ├── nodeAPI.js   # Node backend calls
│   │   │   └── djangoAPI.js # Django ML/analytics calls
│   │   ├── /store           # State management (Redux/Context)
│   │   ├── App.jsx          # Root component
│   │   └── index.js         # Entry point
│   └── package.json
│
├── /backend-node            # Node.js + Express backend
│   ├── /routes              # API routes (auth, courses, exams, fees, attendance)
│   ├── /controllers         # Business logic
│   ├── /models              # Mongoose schemas (users, courses, exams, fees)
│   ├── /middleware          # JWT auth, role-based access
│   ├── /services            # QR code gen, notifications, payments
│   └── server.js            # Express entry point
│
├── /backend-django          # Django backend (ML + analytics microservice)
│   ├── /apps
│   │   ├── /ml              # ML models (regression, classification, CNN)
│   │   ├── /analytics       # Pandas/Seaborn data analysis
│   │   └── /scraping        # Web scraping + ETL tasks
│   ├── /api                 # Django REST Framework serializers, viewsets
│   ├── /migrations
│   └── manage.py
│
├── /database
│   ├── /mongo-config        # MongoDB connection configs
│   ├── /seed                # Sample seed data
│   └── /scripts             # Backup/restore scripts
│
├── /docs
│   ├── ER-diagram.png       # Database design
│   ├── wireframes/          # UI mockups
│   └── syllabus-mapping.md  # Mapping FCSP units → project features
│
├── /tests                   # Unit/integration tests
│   ├── /frontend-tests
│   ├── /backend-node-tests
│   └── /backend-django-tests
│
├── docker-compose.yml       # Container orchestration
├── nginx.conf               # Reverse proxy config
└── README.md                # Project overview
