# Frontend - Lista de Tareas (React + Vite)

Este frontend está construido con React y Vite. Permite gestionar tareas consumiendo la API del backend.

## Instalación y ejecución

1. Instala las dependencias:
   ```powershell
   npm install
   ```
2. Inicia la aplicación:
   ```powershell
   npm run dev
   ```
   La app estará disponible en http://localhost:5173

## Variables de entorno
- `VITE_API_URL`: URL base de la API (por defecto: http://localhost:3000)

## Estructura de componentes
- `App.jsx`: Componente principal, maneja el estado global y las llamadas a la API.
- `TaskList.jsx`: Lista todas las tareas.
- `TaskItem.jsx`: Muestra una tarea individual.
- `TaskForm.jsx`: Formulario para crear/editar tareas.

## Accesibilidad y estilos
- UI minimalista, colores llamativos y tipografía refinada.
- Cumple buenas prácticas de accesibilidad: foco visible, contraste alto, responsivo.

## Estructura de datos
```js
interface Task {
  id: string;
  title: string;
  description: string;
  compled: boolean;
  createdAt: Date;
}
```

## Notas
- El frontend consume la API del backend para todas las operaciones CRUD.
- Puedes personalizar los estilos en `src/index.css`.
