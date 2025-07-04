# 🛒 Gestión de Productos con JSON Server y Fetch API

Este proyecto es una pequeña aplicación web que permite **crear, leer, actualizar y eliminar productos** utilizando una API REST simulada con `json-server`. Incluye una interfaz amigable creada con **HTML + Bootstrap 5** y funcionalidades en **JavaScript (Fetch API)**.

---

## 📁 Estructura del proyecto

📦 training3
├── db.json # Base de datos simulada (con productos)
├── gestion_api.js # Código JS con funciones CRUD usando Fetch
├── index.html # Interfaz web (formulario + Bootstrap)
└── README.md # Esta guía


---

## 🚀 Cómo ejecutar el proyecto

### 1. Instala JSON Server en terminal

npm install -g json-server

### 2. Inicia el servidor en terminal
Ubícate en la carpeta donde tienes db.json y ejecuta:
json-server --watch db.json
Esto iniciará una API REST falsa en:
http://localhost:3000/products

### 3. Abre la interfaz
Abre el archivo index.html en tu navegador (puedes arrastrarlo o hacer doble clic).

### ✅ Funcionalidades 
Desde la interfaz web puedes:

📋 Obtener productos: los muestra por consola.

➕ Crear productos: con nombre, precio y un ID si lo deseas.

✏️ Actualizar productos: escribiendo el ID (alfanumérico permitido).

🗑️ Eliminar productos: escribiendo el ID correspondiente.

🆔 Los IDs pueden ser números o texto, como 23, "abc123", "producto-1", etc.


### 🛠 Tecnologías usadas
HTML5

Bootstrap 5 (via CDN)

JavaScript puro con Fetch API

JSON Server (API REST simulada)


by Samuel Quintero Sanchez