import Head from "next/head"

type LayoutProps = {
  title?: string
  bodyClass?: string
  metaDescription?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  bodyClass,
  metaDescription,
}) => {
  return (
    <div className="Layout">
      <Head>
        <title>{title ? `${title} | Md App` : "Md App"}</title>
        <meta title="description" content={metaDescription}></meta>
      </Head>
      <div className={bodyClass}>{children}</div>
    </div>
  )
}

export default Layout
