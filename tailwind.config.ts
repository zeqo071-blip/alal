import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
 theme:{extend:{colors:{brand:'var(--brand)',brand2:'var(--brand-dark)',ink:'var(--ink)',muted:'var(--muted)',line:'var(--line)',soft:'var(--soft)'}}},plugins:[]} satisfies Config;
