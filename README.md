# 🛒 Apple Kingdom — E-Commerce React

Aplicación web para la venta de dispositivos Apple nuevos y usados.  
Incluye catálogo dinámico, carrito persistente, login y registro con Firebase, y un flujo pensado para uso real en tienda.

## ✨ Funcionalidades principales
- Navegación completa con **React Router**  
- Catálogo cargado desde JSON con categorías calculadas dinámicamente  
- **Carrito de compras** con contexto global  
- **Autenticación** (login y registro) utilizando Firebase Auth  
- Sistema de sesión con persistencia del usuario  
- Interfaz adaptada a **mobile y desktop**  
- Estilos modernos con **Bootstrap 5** y personalización propia  

## 🧩 Tecnologías utilizadas
- **React + Vite**
- **Firebase Auth**
- **Firestore** (opcional o según implementación futura)
- **Bootstrap 5**
- **React Context API**

## 📁 Estructura del proyecto
src/
├── components/
│ ├── NavBar/
│ ├── CartWidget/
│ ├── ItemList/
│ ├── ItemDetail/
│ └── ...
├── pages/
│ ├── Login/
│ ├── Register/
│ ├── Home/
│ └── ...
├── context/
│ ├── CartContext.jsx
│ └── UserContext.jsx
├── firebase/
│ └── config.js
└── main.jsx


## ▶️ Scripts disponibles
- `npm run dev` — Ejecuta el entorno de desarrollo  
- `npm run build` — Genera el build de producción  
- `npm run preview` — Previsualiza el build generado  

## 🚀 Próximos pasos
- Panel administrativo  
- Gestión de stock  
- Dashboard de ventas  
