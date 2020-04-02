// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Airtable Starter',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.keyHePN4WJmZgSs8y, //required
        baseId: process.env.appjXPKZrAsqxTZxv, //required
        tableName: 'db', //required
        typeName: 'db', //required - needs to match template name
        route: '/people/:id' //optional
      }
    }
  ]
}
