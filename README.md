# Link Sharing API

Backend API para una aplicación de compartir enlaces con sistema de votación y comentarios.

## Estructura del Proyecto
```
back/
├── models/
│   ├── comment.js
│   └── link.js
├── routes/
│   ├── comments.js
│   └── links.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## Frontend Implementations
Este backend es compatible con las siguientes implementaciones frontend:
1. [Link Sharing React](https://github.com/arabenitezz/link-manager-react) - Implementación en React
2. [Link Sharing Vue](https://github.com/arabenitezz/link-manager-vue) - Implementación en Vue.js
3. [Link Sharing Angular](https://github.com/arabenitezz/link-manager-angular) - Implementación en Angular
4. [Link Sharing Svelte](https://github.com/arabenitezz/link-manager-svelte) - Implementación en Svelte
5. [Link Sharing Vanilla js](https://github.com/arabenitezz/link-manager-vanilla-js) - Implementación en Vanilla.js
6. [Link Sharing Alpine](https://github.com/arabenitezz/link-manager-alpine.js) - Implementación en Alpine

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/link-sharing-api.git
cd link-sharing-api
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env.example .env
```
Editar el archivo `.env` con tus configuraciones

4. Iniciar el servidor
```bash
npm start
```

## API Endpoints

### Links

- `GET /api/links` - Obtener todos los enlaces
  - Query params: 
    - `tags` (opcional): filtrar por tags (separados por coma)
- `GET /api/links/:id` - Obtener un enlace específico con sus comentarios
- `POST /api/links` - Crear nuevo enlace
- `PATCH /api/links/:id/vote` - Votar un enlace (up/down)

### Comentarios

- `POST /api/comments` - Crear nuevo comentario

## Modelos

### Link
- title: String (requerido)
- url: String (requerido)
- tags: [String]
- votes: Number (default: 0)
- comments: [Referencias a Comment]

### Comment
- text: String (requerido)
- link: Referencia a Link