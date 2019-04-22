'use strict'

module.exports = `
	{
		allWordPressPage{
			edges {
				node {
					id
					slug
					status
					template
				}
			}
		}

		allWordPressPost{
			edges {
				node {
					id
					slug
					status
					template
					format
				}
			}
		}

	}
`