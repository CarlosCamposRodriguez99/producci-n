// middleware.js
export default function middleware(context) {
  // Verifica si el contexto tiene la respuesta (res)
  if (context.res) {
      // Establece los encabezados CORS necesarios
      context.res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir desde cualquier origen
      context.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
      context.res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
  }

  // Establece el encabezado X-Content-Type-Options
  if (context.res) {
      context.res.setHeader('X-Content-Type-Options', 'nosniff');
  }

  // Continúa con el siguiente middleware o con la operación deseada
  return context;
}
