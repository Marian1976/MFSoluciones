// ══════════════════════════════════════════════════════
//  MF SOLUCIONES — Configuración Global
// ══════════════════════════════════════════════════════

// URL del túnel (Ngrok o Cloudflare)
const API_BASE_URL = 'https://manila-calzone-relic.ngrok-free.dev'; 

// Alias para compatibilidad con portal.html
const API = API_BASE_URL;

// Recursos de GitHub
const ASSETS_URL = "https://raw.githubusercontent.com/Marian1976/MFSoluciones/main/";
const FALLBACK_IMG = ASSETS_URL + 'oferta_default.jpg';

// Exportar si se usa en entorno de módulos (opcional)
if (typeof module !== 'undefined') {
    module.exports = { API, ASSETS_URL, FALLBACK_IMG };
}
