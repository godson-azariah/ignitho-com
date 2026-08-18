/**
 * The 1360px content column every section on the site sits inside.
 * Mirrors Elementor's `--content-width: 1360px` boxed container.
 */
export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`mx-auto w-full max-w-[1360px] ${className}`}>{children}</Tag>
}
