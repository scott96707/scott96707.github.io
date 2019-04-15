/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === 'SitePage') {
        const fileNode = getNode(node.parent)
        console.log('\n', fileNode.relativePath)
    }
}

// You can delete this file if you're not using it
