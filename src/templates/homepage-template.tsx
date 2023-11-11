import React from "react"
import { PageProps } from "gatsby"

const PageTemplate: React.FC<PageProps<{}, ProjectContext<HomepageData>>> = ({ pageContext }) => {
  const { general, data } = pageContext

  return (
    <div>
      {data.map((project, i) => (
        <div>
          <a href={`/project/${i + 1}`}>{project.title}</a>
        </div>
      ))}
    </div>
  )
}

export default PageTemplate
