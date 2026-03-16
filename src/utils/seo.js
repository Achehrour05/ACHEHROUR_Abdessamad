/**
 * Dynamic document title and meta management helper.
 */
export function setPageMeta(title, description) {
  if (title) {
    document.title = `${title} | Abdessamad Achehrour`;
  } else {
    document.title = "Abdessamad Achehrour — Software & AI Engineer Portfolio";
  }

  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }
}
