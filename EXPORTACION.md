# Coldwell Banker — Landing emprendedores

Exportación de la versión publicada de Sites, actualizada el 24 de noviembre de 2026.

- Proyecto Sites: `appgprj_6ac43902dd3c8191926056a4b41eda50`.
- Versión publicada: 11.
- Commit de origen: `1f686f59a5e4ce5091a3cef5a7d5a6f5dbbffd62`.
- Código completo disponible directamente en este repositorio: `app/`, `components/`, `lib/`, `public/` y configuración de compilación.
- Incluye los últimos ajustes de logotipo, títulos y botones; tipografías locales, fotografías, selección de territorio y formularios actualizados.
- La lógica de cálculo conserva los archivos originales de la versión publicada.

## Instalación

Requiere Node.js >= 22.13 y la versión de pnpm indicada en package.json.

```sh
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env
pnpm dev
pnpm build
```

El proyecto utiliza Vinext y Cloudflare Workers. Para alojarlo fuera de Sites deben configurarse los servicios de destino y, donde corresponda, los enlaces D1 y las variables de correo. Las solicitudes de sesión requieren confirmación.

## Alcance

Se exportan los archivos fuente y recursos de la versión publicada, verificados por SHA de Git en EXPORTACION_MANIFIESTO.json. Se excluyen cachés de compilación, node_modules, credenciales y datos de prospectos. La configuración .openai/hosting.json conserva la identidad del sitio de origen.

