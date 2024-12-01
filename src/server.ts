import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.database_url as string);
    console.log('Connected to the database successfully!');

    // Start the Express server
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Error during app initialization:', err);
    process.exit(1); // Exit process with failure code
  }
}

main();



// import mongoose from 'mongoose'
// import config from './app/config'
// import app from './app'

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string)
//     app.listen(config.port, () => {
//       console.log(App listening on port ${config.port});
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
