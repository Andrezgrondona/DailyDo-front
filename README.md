# DailyDo - Frontend

## Descripción
Este es el frontend del proyecto DailyDo, una aplicación diseñada para la gestión eficiente de tareas diarias.



   

## Tecnologías Usadas

### 1. **React con Vite**
### 2. **TypeScript**

### 3. **Tailwind CSS**
### 4. **Axios**




## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Andrezgrondona/DailyDo-front.git

2. Instala las Dependencias:
   ```bash
   npm install

3. Inicia la Aplicación:
   ```bash
   npm run dev

3. Configura o remplaza  la URL del backend en el archivo /src/pages/Home.tsx:
   ```bash
   Produccion:
   .get(`${import.meta.env.VITE_API_BASE_URL}/api/tasks`)

   local:
   .get("http://localhost:5001/api/tasks")
 
 
##  Endpoints del Backend
#### Base URL: https://dailydo-backend-production.up.railway.app/api

| **Método** | **Endpoint**         | **Descripción**                 |
|------------|----------------------|---------------------------------|
| GET        | `/tasks`             | Obtener todas las tareas        |
| GET        | `/tasks/:id`         | Obtener una tarea por ID        |
| POST       | `/tasks`             | Crear una nueva tarea           |
| PUT        | `/tasks/:id`         | Actualizar una tarea existente  |
| DELETE     | `/tasks/:id`         | Eliminar una tarea por ID       |

 
 ### Depoly
https://dailydo-backend-production.up.railway.app

## Imagen Desktop
![Captura de pantalla 1](https://i.ibb.co/YZpnk9T/Captura-de-pantalla-2024-12-30-a-la-s-9-40-33-a-m.png)

## Imagen Responsive
![Captura de pantalla 2](https://i.ibb.co/gzWkHQF/Captura-de-pantalla-2024-12-30-a-la-s-9-41-01-a-m.png)
