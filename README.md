# Lista de Tareas - Proyecto Fullstack

Este proyecto es una aplicación básica de lista de tareas (ToDo) desarrollada con Node.js (Express) para el backend y React + Vite para el frontend.

## Estructura del proyecto

```
backend/   # API REST con Express
frontend/  # Aplicación React + Vite
```

## ¿Cómo ejecutar el proyecto?

### 1. Backend
```powershell
cd backend
npm install
npm start
```
El backend estará disponible en http://localhost:3000

### 2. Frontend
```powershell
cd frontend
npm install
npm run dev
```
El frontend estará disponible en http://localhost:5173

## Funcionalidades principales
- Crear, listar, editar y eliminar tareas
- Almacenamiento temporal en memoria (backend)
- UI minimalista, accesible y responsiva
- Comunicación entre frontend y backend vía API REST

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

## Requisitos previos
- Node.js >= 18
- npm

## Notas
- El backend debe estar corriendo antes de iniciar el frontend.
- El almacenamiento es temporal (se borra al reiniciar el backend).

---

Desarrollado como prueba técnica para Challenge ForIT 2025.
