# 🛒 Brusadin’s Garage Ecommerce

Este proyecto es la tienda online oficial de **Brusadin’s Garage**, desarrollada con **React**, **React Router DOM** y **Firebase Firestore**.  
Permite a los usuarios navegar productos, ver detalles individuales, seleccionar cantidades y agregarlos al carrito de compras.

---

## 🚀 Tecnologías utilizadas

- **React JS (Vite)**
- **React Router DOM**
- **Firebase Firestore**
- **CSS personalizado**
- **Hooks de React** (`useState`, `useEffect`, `useParams`)
- **JavaScript moderno (ES6+)**

---

## 📦 Funcionalidades principales

### ✔ Catálogo de Productos

- Obtención de productos desde Firebase Firestore.
- Renderizado dinámico de tarjetas con imagen, nombre y precio.

### ✔ Vista Detallada de Producto

Ruta dinámica:

/item/:id

Incluye:

- Imagen en mayor tamaño
- Título
- Descripción extendida
- Precio
- Controles de cantidad (sumar/restar)
- Botón de “Agregar al carrito”

### ✔ Carrito de Compras

- Se evita duplicar productos ya agregados.
- Si el producto existe, aumenta la cantidad.
- Vista limpia y ordenada del contenido del carrito.
- Cálculo del total de productos.

### ✔ Manejo de Errores por ID inválida

Si el usuario escribe manualmente una ruta incorrecta como:

/item/asda123j

Se muestra:

- Mensaje “Producto no encontrado”
- Botón para volver al inicio o al carrito
- Evita render vacío o errores internos

### ✔ Loading Widget

Mientras se consulta la base de datos, se muestra un componente de carga animado.

---

## 📁 Estructura del proyecto

src/
│── components/
│ ├── ItemListContainer/
│ ├── ItemDetailContainer/
│ ├── ItemDetail/
│ ├── Cart/
│ ├── LoadingWidget/
│ └── Navbar/
│
│── db/
│ └── db.js
│
│── App.jsx
│── main.jsx
│── styles/
└── ...

---

## 🔧 Firebase – Configuración

Archivo: `src/db/db.js`

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // tu configuración de Firebase
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

▶ Cómo ejecutar el proyecto
1️⃣ Clonar el repositorio

git clone https://github.com/SantiBrusa/EcommerceBrusadinsGarage.git
cd EcommerceBrusadinsGarage

2️⃣ Instalar dependencias

npm install

3️⃣ Iniciar el servidor de desarrollo

npm run dev

▶🧩 Mejoras futuras

Sistema de usuarios y autenticación

Panel administrador para cargar productos

Sistema de stock

Notificaciones visuales (Toastify)

🧑‍💻 Autor

Proyecto desarrollado por Santino Vissani Brusadin
GitHub: https://github.com/SantiBrusa
```
