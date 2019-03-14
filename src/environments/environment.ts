// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    //Referencias de conexion
    apiKey: "AIzaSyAkrnJw9m5tAW0TkhNP7i1J-mWS4ia_HtA",
    authDomain: "sisfarm-85e0b.firebaseapp.com",
    databaseURL: "https://sisfarm-85e0b.firebaseio.com",
    projectId: "sisfarm-85e0b",
    storageBucket: "sisfarm-85e0b.appspot.com",
    messagingSenderId: "327957525029"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
