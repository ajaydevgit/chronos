# Chronos – A Memory Prosthesis for Civilization

**Chronos** is an AI-powered civilizational memory system that helps users learn from historical events, policies, scientific discoveries, and societal outcomes. It retrieves historical analogues, builds causal relationships, and generates future scenarios based on past patterns.

## 🚀 Vision

In an era of information overload and short-term thinking, Chronos serves as humanity's collective memory. It enables:

- **Pattern Recognition**: Identify similar historical events
- **Causal Analysis**: Understand cause-effect relationships
- **Scenario Planning**: Generate optimistic, realistic, and pessimistic futures
- **Evidence-Based Decision Making**: Ground decisions in historical precedent

## 🏗️ Architecture

```
Chronos System Architecture
┌──────────────────────────────────────────────────────────────┐
│                  React Frontend                             │
│         (Dashboard, Graph Viz, Scenarios)           │
└──────────────────────────────────────────────────────────────┘
              │
┌─────────────┴──────────────────────────────────────────────┐
│          Django REST Framework API                 │
│  (User Queries, Knowledge Base, Scenario Gen)      │
└──┬──────────────────────────────────────────────────────┬──┘
   │                                                      │
┌──▼──────────────────────────────────────┐ ┌──────────▼──────────────┐
│   PostgreSQL DB                         │ │   Neo4j Graph          │
│  (Entities, Events)                     │ │  (Relationships)       │
└─────────────────────────────────────────┘ └───────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ChromaDB (Vector Store) & Embeddings Pipeline              │
│      Sentence Transformers + Semantic Search              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│     LLM Integration (OpenAI / Local LLM)                   │
│   (Reasoning, Scenario Generation, Analysis)              │
└─────────────────────────────────────────────────────────────┘
```

## 📋 Tech Stack

- **Backend**: Django 4.2+ with Django REST Framework
- **Database**: PostgreSQL (relational) + Neo4j (graph)
- **Vector Store**: ChromaDB with Sentence Transformers
- **Frontend**: React 18+ with Cytoscape.js for visualization
- **LLM**: OpenAI API (with local LLM fallback)
- **Deployment**: Docker, Docker Compose
- **Search**: Elasticsearch-ready architecture

## 🎯 Core Features

### 1. User Query System
- Natural language question input
- Semantic search across knowledge base
- Multi-modal search (text, date, region, category)

### 2. Historical Knowledge Base
- Events, Policies, Discoveries, Outcomes
- CRUD APIs with validation
- Rich metadata (dates, locations, impacts)

### 3. Embedding Pipeline
- Document-to-embedding conversion
- ChromaDB vector storage
- Semantic similarity search

### 4. Knowledge Graph
- Entity modeling (Event, Policy, Technology, Outcome, Country)
- Relationship creation and traversal
- Pattern discovery algorithms

### 5. Reasoning Engine
- Historical analogue retrieval
- Causal chain extraction
- Lesson summarization

### 6. Future Scenario Generator
- Optimistic, realistic, pessimistic scenarios
- Evidence-backed predictions
- Uncertainty quantification

### 7. Dashboard
- Interactive home page
- Query interface
- Knowledge graph visualization
- Scenario comparison
- Admin portal

## 📁 Folder Structure

```
chronos-memory/
├── backend/
│   ├── chronos/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── apps/
│   │   ├── knowledge/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   └── services.py
│   │   ├── reasoning/
│   │   │   ├── models.py
│   │   │   ├── views.py
│   │   │   └── services.py
│   │   ├── scenarios/
│   │   │   ├── models.py
│   │   │   ├── views.py
│   │   │   └── services.py
│   │   └── graph/
│   │       ├── models.py
│   │       ├── services.py
│   │       └── queries.py
│   ├── utils/
│   │   ├── embeddings.py
│   │   ├── llm.py
│   │   ├── decorators.py
│   │   └── exceptions.py
│   ├── requirements.txt
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
├── .env.example
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Python 3.10+
- Node.js 18+
- OpenAI API key (optional)

### Installation

1. **Clone and setup**
   ```bash
   git clone https://github.com/ajaydevgit/chronos-memory.git
   cd chronos-memory
   cp .env.example .env
   ```

2. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   sleep 30
   ```

3. **Run migrations**
   ```bash
   docker exec chronos-backend python manage.py migrate
   docker exec chronos-backend python manage.py seed_data
   docker exec chronos-backend python manage.py createsuperuser
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Admin: http://localhost:8000/admin
   - Neo4j: http://localhost:7474

## 📚 API Documentation

### Knowledge Base Endpoints
```
GET    /api/v1/knowledge/events/
POST   /api/v1/knowledge/events/
GET    /api/v1/knowledge/events/{id}/
PUT    /api/v1/knowledge/events/{id}/
DELETE /api/v1/knowledge/events/{id}/

GET    /api/v1/knowledge/policies/
GET    /api/v1/knowledge/discoveries/
GET    /api/v1/knowledge/outcomes/
```

### Query & Reasoning Endpoints
```
POST   /api/v1/reasoning/query/
GET    /api/v1/reasoning/{id}/analogues/
GET    /api/v1/reasoning/{id}/lessons/
```

### Scenario Generation Endpoints
```
POST   /api/v1/scenarios/generate/
GET    /api/v1/scenarios/{id}/
GET    /api/v1/scenarios/{id}/compare/
```

### Graph Endpoints
```
GET    /api/v1/graph/nodes/
GET    /api/v1/graph/edges/
GET    /api/v1/graph/subgraph/?node_id=id&depth=2
GET    /api/v1/graph/paths/?start_id=id&end_id=id
```

## 🔐 Security

- Environment-based configuration
- API key management
- Rate limiting (10 requests/min per IP)
- CORS configuration
- Input validation
- SQL injection prevention
- XSS protection

## 🧪 Testing

```bash
# Backend tests
docker exec chronos-backend pytest

# Frontend tests
cd frontend && npm test
```

## 📊 Demo Flow

### User Query: "What happens if AI automates 50% of jobs?"

1. **Query Processing**
   - Embeddings generated
   - Semantic search in ChromaDB
   - Find historical analogues

2. **Historical Analogues Retrieved**
   - Industrial Revolution job displacement
   - Textile industry automation
   - ATM adoption impact

3. **Causal Graph Built**
   - Technology → Job loss → Social unrest → Policy → Outcome

4. **Lessons Extracted**
   - Transition periods matter
   - Reskilling programs crucial
   - Social safety nets essential

5. **Future Scenarios Generated**
   - **Optimistic**: Smooth transition, new jobs created, prosperity
   - **Realistic**: Mixed outcomes, some displacement, policy intervention
   - **Pessimistic**: Mass unemployment, social disruption, inequality

6. **Visualization**
   - Interactive knowledge graph
   - Timeline visualization
   - Scenario comparison dashboard

## 📈 Scalability

- Horizontal scaling via Docker Swarm/Kubernetes
- Database indexing optimization
- Caching layer (Redis) ready
- Async task processing (Celery) ready
- CDN integration ready

## 🔗 Learning Resources

- Graph databases with Neo4j
- Vector embeddings with Sentence Transformers
- LLM integration patterns
- Django scalability best practices
- React component architecture

## 🤝 Contributing

See CONTRIBUTING.md for guidelines.

## 📄 License

MIT License - See LICENSE file

## 💬 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ for humanity's collective memory**
