## Marketplace Developer Code Challenge
This app sets up a NodeJS server in order to call the Yelp Fusion API, which sends the data back to a local html file.

I have chosen to use this server for two reasons:
- CORS: the Yelp Fusion API doesn't support CORS and that complicates the usage of the API directly from the browser. Instead, I decided it was better to make all the calls to the API from a node server.
- Security: given that the Yelp Fusion API requires an authorization key, calling it from the browser would expose this key to all users. For the sake of security, I stored it using dotenv to keep it as an environment variable.