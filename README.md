# FLO Backend (NestJS)

Minimal NestJS backend scaffold implementing modules described in original README.

Endpoints (base /api):

- LLMModule
  - POST /api/llm/coaching/init/:userId  -> send initial context
  - POST /api/llm/coaching/chat/:userId  -> chat messages

- UsersModule
  - POST /api/users/login { username }
  - GET /api/users/tool-config
  - GET /api/users/coaching-config
  - POST /api/users/plan/:userId { plan }
  - POST /api/users/plan/update/:userId { delta }
  - GET /api/users/plan/:userId

- ConversationPersistModule
  - POST /api/conversation/save/:userId/:sessionId { messages }
  - GET  /api/conversation/read/:userId/:sessionId

- MonitoringModule
  - POST /api/monitoring/session/new/:sessionId { data }
  - POST /api/monitoring/session/end/:sessionId { data }
  - GET  /api/monitoring/session/:sessionId

- FLOConversationModule (orchestration)
  - POST /api/flo/coaching/init/:userId
  - POST /api/flo/coaching/chat/:userId { message }
  - POST /api/flo/coaching/close/:userId

Run locally

1. npm install
2. npm start

Notes

- This is a minimal in-memory implementation for development and testing. Add a DB, proper authentication, and real LLM integration for production.
