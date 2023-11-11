import React from "react"
import { PageProps } from "gatsby"

const PageTemplate: React.FC<PageProps<{}, ProjectContext<ProjectData>>> = ({ pageContext }) => {
  const { title, content } = pageContext.data

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PageTemplate
